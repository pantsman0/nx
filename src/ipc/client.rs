use alloc::boxed::Box;

use super::*;

pub(crate) trait RequestCommandParameter {
    fn before_request_write(
        var: &Self,
        walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()>;
    fn before_send_sync_request(
        var: &Self,
        walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()>;
}

pub(crate) trait ResponseCommandParameter<O> {
    fn after_response_read(walker: &mut DataWalker, ctx: &mut CommandContext) -> Result<O>;
}

macro_rules! impl_copy_client_command_parameter_for_ints {
    ($($integer:ty),*) => {
        $(
            crate::impl_copy_client_command_parameter!($integer);
        )*
        
    };
}
impl_copy_client_command_parameter_for_ints!(u8, u16, u32, u64, i8, i16, i32, i64, usize, isize, bool, f32, f64);

#[macro_export]
macro_rules! impl_copy_client_command_parameter {
    ($client:ty) => {
        impl crate::ipc::client::RequestCommandParameter for $client {
            fn before_request_write(
                _raw: &Self,
                walker: &mut crate::ipc::DataWalker,
                _ctx: &mut crate::ipc::CommandContext,
            ) -> $crate::result::Result<()> {
                walker.advance::<Self>();
                Ok(())
            }

            fn before_send_sync_request(
                raw: &Self,
                walker: &mut crate::ipc::DataWalker,
                _ctx: &mut crate::ipc::CommandContext,
            ) -> $crate::result::Result<()> {
                walker.advance_set(raw.clone());
                Ok(())
            }
        }

        impl crate::ipc::client::ResponseCommandParameter<$client> for $client {
            fn after_response_read(
                walker: &mut crate::ipc::DataWalker,
                _ctx: &mut crate::ipc::CommandContext,
            ) -> $crate::result::Result<Self> {
                Ok(walker.advance_get())
            }
        }
    };
}

impl<const A: BufferAttribute, T> RequestCommandParameter for sf::Buffer<A, T> {
    fn before_request_write(
        buffer: &Self,
        _walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()> {
        ctx.add_buffer(&buffer)
    }

    fn before_send_sync_request(
        _buffer: &Self,
        _walker: &mut DataWalker,
        _ctx: &mut CommandContext,
    ) -> Result<()> {
        Ok(())
    }
}

impl<const A: BufferAttribute, T> !ResponseCommandParameter<sf::Buffer<A, T>> for sf::Buffer<A, T> {}

impl<const M: HandleMode> RequestCommandParameter for sf::Handle<M> {
    fn before_request_write(
        handle: &Self,
        _walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()> {
        ctx.in_params.add_handle(handle.clone())
    }

    fn before_send_sync_request(
        _handle: &Self,
        _walker: &mut DataWalker,
        _ctx: &mut CommandContext,
    ) -> Result<()> {
        Ok(())
    }
}

impl<const M: HandleMode> ResponseCommandParameter<sf::Handle<M>> for sf::Handle<M> {
    fn after_response_read(_walker: &mut DataWalker, ctx: &mut CommandContext) -> Result<Self> {
        ctx.out_params.pop_handle()
    }
}

impl RequestCommandParameter for sf::ProcessId {
    fn before_request_write(
        _process_id: &Self,
        walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()> {
        ctx.in_params.send_process_id = true;
        if ctx.object_info.uses_cmif_protocol() {
            // TIPC doesn't set this placeholder space for process IDs
            walker.advance::<u64>();
        }
        Ok(())
    }

    fn before_send_sync_request(
        process_id: &Self,
        walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()> {
        // Same as above
        if ctx.object_info.uses_cmif_protocol() {
            walker.advance_set(process_id.process_id);
        }
        Ok(())
    }
}

impl !ResponseCommandParameter<sf::ProcessId> for sf::ProcessId {}

impl RequestCommandParameter for Box<dyn sf::IObject> {
    fn before_request_write(
        session: &Self,
        _walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<()> {
        ctx.in_params.add_object(session.get_session().object_info)
    }

    fn before_send_sync_request(
        _session: &Self,
        _walker: &mut DataWalker,
        _ctx: &mut CommandContext,
    ) -> Result<()> {
        Ok(())
    }
}

impl<S: IClientObject + 'static + Sized> ResponseCommandParameter<Box<dyn IClientObject>>
    for Box<S>
{
    fn after_response_read(
        _walker: &mut DataWalker,
        ctx: &mut CommandContext,
    ) -> Result<alloc::boxed::Box<(dyn IClientObject + 'static)>> {
        let object_info = ctx.pop_object()?;
        Ok(Box::new(S::new(sf::Session::from(object_info))))
    }
}

pub trait IClientObject: sf::IObject {
    fn new(session: sf::Session) -> Self
    where
        Self: Sized;

    fn get_info(&self) -> ObjectInfo {
        self.get_session().object_info
    }

    fn set_info(&mut self, info: ObjectInfo) {
        self.get_session_mut().set_info(info);
    }

    fn convert_to_domain(&mut self) -> Result<()> {
        self.get_session_mut().convert_to_domain()
    }

    fn query_own_pointer_buffer_size(&self) -> Result<u16> {
        self.get_info().query_pointer_buffer_size()
    }

    fn close_session(&mut self) {
        self.get_session_mut().close()
    }

    fn is_valid(&mut self) -> bool {
        self.get_info().is_valid()
    }

    fn is_domain(&mut self) -> bool {
        self.get_info().is_domain()
    }
}
