//! Allocator implementation and definitions

use crate::result::*;
use core::mem;
use core::ptr;
use core::ptr::NonNull;

extern crate alloc;
use alloc::alloc::Allocator;

use alloc::alloc::Global;
pub use alloc::alloc::Layout;

pub const PAGE_ALIGNMENT: usize = 0x1000;

pub mod rc;

use alloc::alloc::AllocError;

impl From<AllocError> for ResultCode {
    fn from(_value: AllocError) -> Self {
        ResultCode::new(rc::ResultOutOfMemory::get_value())
    }
}

// TODO: be able to change the global allocator?


/// Represents a heap allocator for this library
pub unsafe trait AllocatorEx: Allocator {
    /// Allocates a new heap value
    fn new<T>(&mut self) -> Result<*mut T> {
        let layout = Layout::new::<T>();
        match self.allocate(layout) {
            Ok(allocation) => Ok(allocation.as_ptr().cast()),
            Err(_) => rc::ResultOutOfMemory::make_err()
        }
    }

    /// Releases a heap value
    ///
    /// The value must have been created using [`Allocator::new`]
    ///
    /// # Arguments
    ///
    /// * `t`: Heap value address
    fn delete<T>(&mut self, t: *mut T) {
        let layout = Layout::new::<T>();
        unsafe { self.deallocate(NonNull::new_unchecked(t.cast()), layout) };
    }
}

pub use linked_list_allocator::{LockedHeap, Heap};

/// Defines and initializes a default global allocator.
#[macro_export]
macro_rules! use_default_allocator {
    () => {
        #[global_allocator]
        static GLOBAL_ALLOCATOR: nx::mem::alloc::LockedHeap =
            nx::mem::alloc::LockedHeap::empty();

        #[no_mangle]
        pub fn initialize_heap(hbl_heap: util::PointerAndSize) -> nx::result::Result<()> {
            let mut lock_guard = GLOBAL_ALLOCATOR.lock();

            let heap = if hbl_heap.is_valid() {
                hbl_heap
            } else {
                let heap_size: usize = 0x10000000;
                let heap_address = svc::set_heap_size(heap_size)?;
                util::PointerAndSize::new(heap_address, heap_size)
            };

            *lock_guard = unsafe {nx::mem::alloc::Heap::new(heap.address, heap.size)};
            Ok(())
        }
    };
}

/// Gets whether heap allocations are enabled
///
/// The library may internally disable them in exceptional cases: for instance, to avoid exception handlers to allocate heap memory if the exception cause is actually an OOM situation
pub fn is_enabled() -> bool {
    false //GLOBAL_ALLOCATOR.get().initialized
}

pub struct AlignedBox<T: ?Sized, A: Allocator = Global>(alloc::boxed::Box<T, A>);

impl<T: ?Sized> core::ops::Deref for AlignedBox<T> {
    type Target = T;
    fn deref(&self) -> &Self::Target {
        self.0.as_ref()
    }
}
impl<T: ?Sized> core::ops::DerefMut for AlignedBox<T> {
    fn deref_mut(&mut self) -> &mut T {
        self.0.as_mut()
    }
}

/// Represents a wrapped and manually managed heap value
///
/// Note that a [`Buffer`] is able to hold both a single value or an array of values of the provided type
pub struct Buffer<T, A: Allocator = Global> {
    /// The actual heap value
    pub ptr: *mut T,
    /// The memory's layout
    pub layout: Layout,
    /// The allocator used to request the buffer
    allocator: A,
}

impl<T> Buffer<T> {
    /// Creates a new, invalid [`Buffer`]
    #[inline]
    pub const fn empty() -> Self {
        Self {
            ptr: ptr::null_mut(),
            layout: Layout::new::<u8>(), // Dummy value
            allocator: Global,
        }
    }

    /// Gets whether this [`Buffer`] is valid
    #[inline]
    pub fn is_valid(&self) -> bool {
        !self.ptr.is_null()
    }

    /// Creates a new [`Buffer`] using the global allocator
    ///
    /// # Arguments
    ///
    /// * `align`: The align to use
    /// * `count`: The count of values to allocate
    pub fn new(align: usize, count: usize) -> Result<Self> {
        let layout = Layout::from_size_align(count * mem::size_of::<T>(), align)
            .map_err(|_| ResultCode::new(rc::ResultLayoutError::get_value()))?;
        let allocator = Global;
        let ptr = allocator.allocate(layout)?.as_ptr().cast();
        Ok(Self {
            ptr,
            layout,
            allocator,
        })
    }

    pub fn into_raw(self) -> *mut [T] {
        unsafe {
            core::slice::from_raw_parts_mut(self.ptr, self.layout.size() / mem::size_of::<T>())
                as *mut [T]
        }
    }

    /// Releases the [`Buffer`]
    ///
    /// The [`Buffer`] becomes invalid after this
    pub unsafe fn release(&mut self) {
        if self.is_valid() {
            self.allocator
                .deallocate(NonNull::new_unchecked(self.ptr.cast()), self.layout);
            self.ptr = core::ptr::null_mut();
        }
        
    }
}

impl<T, A: Allocator> Buffer<T, A> {
    /// Creates a new [`Buffer`] using a given allocator
    ///
    /// # Arguments
    ///
    /// * `align`: The align to use
    /// * `count`: The count of values to allocate
    /// * `allocator`: The allocator to use
    pub fn new_in(align: usize, count: usize, allocator: A) -> Result<Self> {
        let layout = Layout::from_size_align(count * mem::size_of::<T>(), align)
            .map_err(|_| ResultCode::new(rc::ResultLayoutError::get_value()))?;
        let ptr = allocator.allocate(layout)?.as_ptr().cast();
        Ok(Self {
            ptr,
            layout,
            allocator,
        })
    }
}

impl<T, A: Allocator> Drop for Buffer<T, A> {
    fn drop(&mut self) {
        if !self.ptr.is_null() {
            unsafe {
                self.allocator
                    .deallocate(NonNull::new_unchecked(self.ptr.cast()), self.layout);
            }
        }
    }
}
