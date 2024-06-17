//! `FsAccessLog` logger implementation

use alloc::boxed::Box;

use super::*;
use crate::result::*;
use crate::ipc::sf;
use crate::service;
use crate::service::fsp::srv;
use crate::service::fsp::srv::IFileSystemProxy;

/// Represents a logger though `FsAccessLog`s (see [`output_access_log_to_sd_card`][`srv::FileSystemProxy::output_access_log_to_sd_card`])
pub struct FsAccessLogLogger {
    service: Result<Box<srv::FileSystemProxy>>
}

impl Logger for FsAccessLogLogger {
    fn new() -> Self {
        Self { service: service::new_service_object() }
    }

    fn log(&mut self, metadata: &LogMetadata) {
        let msg = format_plain_string_log_impl(metadata, "FsAccessLog");
        // overcome a paper cut for type annotations
        if let Ok( fspsrv )  = self.service.as_mut() {
            fspsrv.output_access_log_to_sd_card(sf::Buffer::from_array(msg.as_bytes()));
        }
    }
}