use crate::result::*;
use crate::ipc::sf;
use crate::version;

#[derive(Copy, Clone, PartialEq, Eq, Debug)]
#[repr(u32)]
pub enum FatalPolicy {
    ErrorReportAndErrorScreen,
    ErrorReport,
    ErrorScreen,
}
crate::impl_copy_server_command_parameter!(FatalPolicy);

ipc_sf_define_interface_trait! {
    trait IService {
        throw_fatal_with_policy [1, version::VersionInterval::all()]: (rc: ResultCode, policy: FatalPolicy, process_id: sf::ProcessId) => ();
    }
}