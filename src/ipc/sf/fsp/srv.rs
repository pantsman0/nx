use alloc::boxed::Box;

use crate::result::*;
use crate::ipc::sf;
use crate::version;

ipc_sf_define_interface_trait! {
    trait IFileSystemProxy: Sync Send {
        set_current_process [1, version::VersionInterval::all()]: (process_id: sf::ProcessId) => ();
        open_sd_card_filesystem [18, version::VersionInterval::all()]: () => (sd_filesystem: Box<dyn super::IFileSystem>);
        output_access_log_to_sd_card [1006, version::VersionInterval::all()]: (log_buf: sf::InMapAliasBuffer<u8>) => ();
    }
}