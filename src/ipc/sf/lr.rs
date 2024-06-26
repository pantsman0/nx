use crate::result::*;
use crate::version;
use crate::ipc::sf;
use crate::mem;
use super::ncm;

ipc_sf_define_interface_trait! {
    trait ILocationResolver {
        redirect_program_path [1, version::VersionInterval::all()]: (program_id: ncm::ProgramId, path_buf: sf::InPointerBuffer<u8>) => ();
    }
}

ipc_sf_define_interface_trait! {
    trait IRegisteredLocationResolver {
        register_program_path_deprecated [1, version::VersionInterval::to(version::Version::new(8, 1, 1))]: (program_id: ncm::ProgramId, path_buf: sf::InPointerBuffer<u8>) => ();
        register_program_path [1, version::VersionInterval::from(version::Version::new(9, 0, 0))]: (program_id: ncm::ProgramId, owner_id: ncm::ProgramId, path_buf: sf::InPointerBuffer<u8>) => ();
        redirect_program_path_deprecated [3, version::VersionInterval::to(version::Version::new(8, 1, 1))]: (program_id: ncm::ProgramId, path_buf: sf::InPointerBuffer<u8>) => ();
        redirect_program_path [3, version::VersionInterval::from(version::Version::new(9, 0, 0))]: (program_id: ncm::ProgramId, owner_id: ncm::ProgramId, path_buf: sf::InPointerBuffer<u8>) => ();
    }
}

ipc_sf_define_interface_trait! {
    trait ILocationResolverManager {
        open_location_resolver [0, version::VersionInterval::all()]: (storage_id: ncm::StorageId) => (resolver: mem::Shared<dyn ILocationResolver>);
        open_registered_location_resolver [1, version::VersionInterval::all()]: () => (resolver: mem::Shared<dyn IRegisteredLocationResolver>);
    }
}
