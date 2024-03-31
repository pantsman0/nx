use crate::ipc::sf::{hid, ncm};

#[derive(Copy, Clone, PartialEq, Eq, Debug, Default)]
#[repr(C)]
pub struct MitmProcessInfo {
    pub process_id: u64,
    pub program_id: ncm::ProgramId,
    pub npad_buttons: hid::NpadButton,
    pub override_flags: u64
}

pub mod rc;