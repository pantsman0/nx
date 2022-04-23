(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A&gt; Default for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = u8&gt; + Copy,&nbsp;</span>","synthetic":false,"types":["arrayvec::array_string::ArrayString"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; Default for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::ArrayVec"]}];
implementors["nx"] = [{"text":"impl Default for <a class=\"struct\" href=\"nx/result/struct.ResultCode.html\" title=\"struct nx::result::ResultCode\">ResultCode</a>","synthetic":false,"types":["nx::result::ResultCode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/util/struct.Uuid.html\" title=\"struct nx::util::Uuid\">Uuid</a>","synthetic":false,"types":["nx::util::Uuid"]},{"text":"impl&lt;const S:&nbsp;usize&gt; Default for <a class=\"struct\" href=\"nx/util/struct.CString.html\" title=\"struct nx::util::CString\">CString</a>&lt;S&gt;","synthetic":false,"types":["nx::util::CString"]},{"text":"impl&lt;const S:&nbsp;usize&gt; Default for <a class=\"struct\" href=\"nx/util/struct.CString16.html\" title=\"struct nx::util::CString16\">CString16</a>&lt;S&gt;","synthetic":false,"types":["nx::util::CString16"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/dynamic/elf/enum.Tag.html\" title=\"enum nx::dynamic::elf::Tag\">Tag</a>","synthetic":false,"types":["nx::dynamic::elf::Tag"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/dynamic/elf/struct.Dyn.html\" title=\"struct nx::dynamic::elf::Dyn\">Dyn</a>","synthetic":false,"types":["nx::dynamic::elf::Dyn"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/thread/enum.ThreadState.html\" title=\"enum nx::thread::ThreadState\">ThreadState</a>","synthetic":false,"types":["nx::thread::ThreadState"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/hbl/enum.AbiConfigEntryKey.html\" title=\"enum nx::hbl::AbiConfigEntryKey\">AbiConfigEntryKey</a>","synthetic":false,"types":["nx::hbl::AbiConfigEntryKey"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/hbl/struct.AbiConfigEntryFlags.html\" title=\"struct nx::hbl::AbiConfigEntryFlags\">AbiConfigEntryFlags</a>","synthetic":false,"types":["nx::hbl::AbiConfigEntryFlags"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/hbl/struct.AbiConfigAppletFlags.html\" title=\"struct nx::hbl::AbiConfigAppletFlags\">AbiConfigAppletFlags</a>","synthetic":false,"types":["nx::hbl::AbiConfigAppletFlags"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/hbl/struct.AbiConfigEntry.html\" title=\"struct nx::hbl::AbiConfigEntry\">AbiConfigEntry</a>","synthetic":false,"types":["nx::hbl::AbiConfigEntry"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/hbl/struct.Version.html\" title=\"struct nx::hbl::Version\">Version</a>","synthetic":false,"types":["nx::hbl::Version"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/hbl/enum.AppletType.html\" title=\"enum nx::hbl::AppletType\">AppletType</a>","synthetic":false,"types":["nx::hbl::AppletType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/rrt0/enum.ExecutableType.html\" title=\"enum nx::rrt0::ExecutableType\">ExecutableType</a>","synthetic":false,"types":["nx::rrt0::ExecutableType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/svc/enum.MemoryState.html\" title=\"enum nx::svc::MemoryState\">MemoryState</a>","synthetic":false,"types":["nx::svc::MemoryState"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.MemoryPermission.html\" title=\"struct nx::svc::MemoryPermission\">MemoryPermission</a>","synthetic":false,"types":["nx::svc::MemoryPermission"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.MemoryAttribute.html\" title=\"struct nx::svc::MemoryAttribute\">MemoryAttribute</a>","synthetic":false,"types":["nx::svc::MemoryAttribute"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.MemoryInfo.html\" title=\"struct nx::svc::MemoryInfo\">MemoryInfo</a>","synthetic":false,"types":["nx::svc::MemoryInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.AttachProcessDebugEventInfo.html\" title=\"struct nx::svc::AttachProcessDebugEventInfo\">AttachProcessDebugEventInfo</a>","synthetic":false,"types":["nx::svc::AttachProcessDebugEventInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.AttachThreadDebugEventInfo.html\" title=\"struct nx::svc::AttachThreadDebugEventInfo\">AttachThreadDebugEventInfo</a>","synthetic":false,"types":["nx::svc::AttachThreadDebugEventInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.ExitDebugEventInfo.html\" title=\"struct nx::svc::ExitDebugEventInfo\">ExitDebugEventInfo</a>","synthetic":false,"types":["nx::svc::ExitDebugEventInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/svc/struct.ExceptionDebugEventInfo.html\" title=\"struct nx::svc::ExceptionDebugEventInfo\">ExceptionDebugEventInfo</a>","synthetic":false,"types":["nx::svc::ExceptionDebugEventInfo"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/smc/enum.Result.html\" title=\"enum nx::smc::Result\">Result</a>","synthetic":false,"types":["nx::smc::Result"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/smc/struct.Arguments.html\" title=\"struct nx::smc::Arguments\">Arguments</a>","synthetic":false,"types":["nx::smc::Arguments"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/enum.CommandProtocol.html\" title=\"enum nx::ipc::CommandProtocol\">CommandProtocol</a>","synthetic":false,"types":["nx::ipc::CommandProtocol"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.ObjectInfo.html\" title=\"struct nx::ipc::ObjectInfo\">ObjectInfo</a>","synthetic":false,"types":["nx::ipc::ObjectInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.BufferDescriptor.html\" title=\"struct nx::ipc::BufferDescriptor\">BufferDescriptor</a>","synthetic":false,"types":["nx::ipc::BufferDescriptor"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.SendStaticDescriptor.html\" title=\"struct nx::ipc::SendStaticDescriptor\">SendStaticDescriptor</a>","synthetic":false,"types":["nx::ipc::SendStaticDescriptor"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.ReceiveStaticDescriptor.html\" title=\"struct nx::ipc::ReceiveStaticDescriptor\">ReceiveStaticDescriptor</a>","synthetic":false,"types":["nx::ipc::ReceiveStaticDescriptor"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.CommandHeader.html\" title=\"struct nx::ipc::CommandHeader\">CommandHeader</a>","synthetic":false,"types":["nx::ipc::CommandHeader"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.CommandSpecialHeader.html\" title=\"struct nx::ipc::CommandSpecialHeader\">CommandSpecialHeader</a>","synthetic":false,"types":["nx::ipc::CommandSpecialHeader"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/struct.BufferAttribute.html\" title=\"struct nx::ipc::BufferAttribute\">BufferAttribute</a>","synthetic":false,"types":["nx::ipc::BufferAttribute"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/cmif/enum.DomainCommandType.html\" title=\"enum nx::ipc::cmif::DomainCommandType\">DomainCommandType</a>","synthetic":false,"types":["nx::ipc::cmif::DomainCommandType"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/cmif/struct.DomainInDataHeader.html\" title=\"struct nx::ipc::cmif::DomainInDataHeader\">DomainInDataHeader</a>","synthetic":false,"types":["nx::ipc::cmif::DomainInDataHeader"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/cmif/struct.DomainOutDataHeader.html\" title=\"struct nx::ipc::cmif::DomainOutDataHeader\">DomainOutDataHeader</a>","synthetic":false,"types":["nx::ipc::cmif::DomainOutDataHeader"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/cmif/enum.CommandType.html\" title=\"enum nx::ipc::cmif::CommandType\">CommandType</a>","synthetic":false,"types":["nx::ipc::cmif::CommandType"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/cmif/struct.DataHeader.html\" title=\"struct nx::ipc::cmif::DataHeader\">DataHeader</a>","synthetic":false,"types":["nx::ipc::cmif::DataHeader"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/sm/mitm/struct.MitmProcessInfo.html\" title=\"struct nx::ipc::sf::sm::mitm::MitmProcessInfo\">MitmProcessInfo</a>","synthetic":false,"types":["nx::ipc::sf::sm::mitm::MitmProcessInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/lm/struct.LogDestination.html\" title=\"struct nx::ipc::sf::lm::LogDestination\">LogDestination</a>","synthetic":false,"types":["nx::ipc::sf::lm::LogDestination"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.FileOpenMode.html\" title=\"struct nx::ipc::sf::fsp::FileOpenMode\">FileOpenMode</a>","synthetic":false,"types":["nx::ipc::sf::fsp::FileOpenMode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.DirectoryOpenMode.html\" title=\"struct nx::ipc::sf::fsp::DirectoryOpenMode\">DirectoryOpenMode</a>","synthetic":false,"types":["nx::ipc::sf::fsp::DirectoryOpenMode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.FileAttribute.html\" title=\"struct nx::ipc::sf::fsp::FileAttribute\">FileAttribute</a>","synthetic":false,"types":["nx::ipc::sf::fsp::FileAttribute"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.FileReadOption.html\" title=\"struct nx::ipc::sf::fsp::FileReadOption\">FileReadOption</a>","synthetic":false,"types":["nx::ipc::sf::fsp::FileReadOption"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.FileWriteOption.html\" title=\"struct nx::ipc::sf::fsp::FileWriteOption\">FileWriteOption</a>","synthetic":false,"types":["nx::ipc::sf::fsp::FileWriteOption"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/fsp/enum.DirectoryEntryType.html\" title=\"enum nx::ipc::sf::fsp::DirectoryEntryType\">DirectoryEntryType</a>","synthetic":false,"types":["nx::ipc::sf::fsp::DirectoryEntryType"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.DirectoryEntry.html\" title=\"struct nx::ipc::sf::fsp::DirectoryEntry\">DirectoryEntry</a>","synthetic":false,"types":["nx::ipc::sf::fsp::DirectoryEntry"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.FileTimeStampRaw.html\" title=\"struct nx::ipc::sf::fsp::FileTimeStampRaw\">FileTimeStampRaw</a>","synthetic":false,"types":["nx::ipc::sf::fsp::FileTimeStampRaw"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/fsp/struct.FileQueryRangeInfo.html\" title=\"struct nx::ipc::sf::fsp::FileQueryRangeInfo\">FileQueryRangeInfo</a>","synthetic":false,"types":["nx::ipc::sf::fsp::FileQueryRangeInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/hid/struct.NpadStyleTag.html\" title=\"struct nx::ipc::sf::hid::NpadStyleTag\">NpadStyleTag</a>","synthetic":false,"types":["nx::ipc::sf::hid::NpadStyleTag"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/nv/enum.ErrorCode.html\" title=\"enum nx::ipc::sf::nv::ErrorCode\">ErrorCode</a>","synthetic":false,"types":["nx::ipc::sf::nv::ErrorCode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/vi/struct.LayerFlags.html\" title=\"struct nx::ipc::sf::vi::LayerFlags\">LayerFlags</a>","synthetic":false,"types":["nx::ipc::sf::vi::LayerFlags"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/nfp/struct.McuVersionData.html\" title=\"struct nx::ipc::sf::nfp::McuVersionData\">McuVersionData</a>","synthetic":false,"types":["nx::ipc::sf::nfp::McuVersionData"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/nfp/struct.DeviceHandle.html\" title=\"struct nx::ipc::sf::nfp::DeviceHandle\">DeviceHandle</a>","synthetic":false,"types":["nx::ipc::sf::nfp::DeviceHandle"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/nfp/struct.Date.html\" title=\"struct nx::ipc::sf::nfp::Date\">Date</a>","synthetic":false,"types":["nx::ipc::sf::nfp::Date"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/nfp/struct.AdminInfoFlags.html\" title=\"struct nx::ipc::sf::nfp::AdminInfoFlags\">AdminInfoFlags</a>","synthetic":false,"types":["nx::ipc::sf::nfp::AdminInfoFlags"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/nfp/enum.ProgramIdConsoleType.html\" title=\"enum nx::ipc::sf::nfp::ProgramIdConsoleType\">ProgramIdConsoleType</a>","synthetic":false,"types":["nx::ipc::sf::nfp::ProgramIdConsoleType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.Age.html\" title=\"enum nx::ipc::sf::mii::Age\">Age</a>","synthetic":false,"types":["nx::ipc::sf::mii::Age"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.Gender.html\" title=\"enum nx::ipc::sf::mii::Gender\">Gender</a>","synthetic":false,"types":["nx::ipc::sf::mii::Gender"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.Race.html\" title=\"enum nx::ipc::sf::mii::Race\">Race</a>","synthetic":false,"types":["nx::ipc::sf::mii::Race"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/mii/struct.SourceFlag.html\" title=\"struct nx::ipc::sf::mii::SourceFlag\">SourceFlag</a>","synthetic":false,"types":["nx::ipc::sf::mii::SourceFlag"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.SpecialKeyCode.html\" title=\"enum nx::ipc::sf::mii::SpecialKeyCode\">SpecialKeyCode</a>","synthetic":false,"types":["nx::ipc::sf::mii::SpecialKeyCode"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.HairType.html\" title=\"enum nx::ipc::sf::mii::HairType\">HairType</a>","synthetic":false,"types":["nx::ipc::sf::mii::HairType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.MoleType.html\" title=\"enum nx::ipc::sf::mii::MoleType\">MoleType</a>","synthetic":false,"types":["nx::ipc::sf::mii::MoleType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.HairFlip.html\" title=\"enum nx::ipc::sf::mii::HairFlip\">HairFlip</a>","synthetic":false,"types":["nx::ipc::sf::mii::HairFlip"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.EyeType.html\" title=\"enum nx::ipc::sf::mii::EyeType\">EyeType</a>","synthetic":false,"types":["nx::ipc::sf::mii::EyeType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.MouthType.html\" title=\"enum nx::ipc::sf::mii::MouthType\">MouthType</a>","synthetic":false,"types":["nx::ipc::sf::mii::MouthType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.FontRegion.html\" title=\"enum nx::ipc::sf::mii::FontRegion\">FontRegion</a>","synthetic":false,"types":["nx::ipc::sf::mii::FontRegion"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.FacelineType.html\" title=\"enum nx::ipc::sf::mii::FacelineType\">FacelineType</a>","synthetic":false,"types":["nx::ipc::sf::mii::FacelineType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.FacelineColor.html\" title=\"enum nx::ipc::sf::mii::FacelineColor\">FacelineColor</a>","synthetic":false,"types":["nx::ipc::sf::mii::FacelineColor"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.FacelineWrinkle.html\" title=\"enum nx::ipc::sf::mii::FacelineWrinkle\">FacelineWrinkle</a>","synthetic":false,"types":["nx::ipc::sf::mii::FacelineWrinkle"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.FacelineMake.html\" title=\"enum nx::ipc::sf::mii::FacelineMake\">FacelineMake</a>","synthetic":false,"types":["nx::ipc::sf::mii::FacelineMake"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.EyebrowType.html\" title=\"enum nx::ipc::sf::mii::EyebrowType\">EyebrowType</a>","synthetic":false,"types":["nx::ipc::sf::mii::EyebrowType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.NoseType.html\" title=\"enum nx::ipc::sf::mii::NoseType\">NoseType</a>","synthetic":false,"types":["nx::ipc::sf::mii::NoseType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.BeardType.html\" title=\"enum nx::ipc::sf::mii::BeardType\">BeardType</a>","synthetic":false,"types":["nx::ipc::sf::mii::BeardType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.MustacheType.html\" title=\"enum nx::ipc::sf::mii::MustacheType\">MustacheType</a>","synthetic":false,"types":["nx::ipc::sf::mii::MustacheType"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/mii/enum.GlassType.html\" title=\"enum nx::ipc::sf::mii::GlassType\">GlassType</a>","synthetic":false,"types":["nx::ipc::sf::mii::GlassType"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/mii/struct.CharInfo.html\" title=\"struct nx::ipc::sf::mii::CharInfo\">CharInfo</a>","synthetic":false,"types":["nx::ipc::sf::mii::CharInfo"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/mii/struct.CoreData.html\" title=\"struct nx::ipc::sf::mii::CoreData\">CoreData</a>","synthetic":false,"types":["nx::ipc::sf::mii::CoreData"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/mii/struct.StoreData.html\" title=\"struct nx::ipc::sf::mii::StoreData\">StoreData</a>","synthetic":false,"types":["nx::ipc::sf::mii::StoreData"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/set/struct.FirmwareVersion.html\" title=\"struct nx::ipc::sf::set::FirmwareVersion\">FirmwareVersion</a>","synthetic":false,"types":["nx::ipc::sf::set::FirmwareVersion"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/usb/hs/struct.DeviceFilterFlags.html\" title=\"struct nx::ipc::sf::usb::hs::DeviceFilterFlags\">DeviceFilterFlags</a>","synthetic":false,"types":["nx::ipc::sf::usb::hs::DeviceFilterFlags"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/ipc/sf/usb/hs/struct.DeviceFilter.html\" title=\"struct nx::ipc::sf::usb::hs::DeviceFilter\">DeviceFilter</a>","synthetic":false,"types":["nx::ipc::sf::usb::hs::DeviceFilter"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/ipc/sf/usb/enum.ClassCode.html\" title=\"enum nx::ipc::sf::usb::ClassCode\">ClassCode</a>","synthetic":false,"types":["nx::ipc::sf::usb::ClassCode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/diag/assert/struct.AssertLevel.html\" title=\"struct nx::diag::assert::AssertLevel\">AssertLevel</a>","synthetic":false,"types":["nx::diag::assert::AssertLevel"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/parcel/struct.ParcelHeader.html\" title=\"struct nx::gpu::parcel::ParcelHeader\">ParcelHeader</a>","synthetic":false,"types":["nx::gpu::parcel::ParcelHeader"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/parcel/struct.ParcelData.html\" title=\"struct nx::gpu::parcel::ParcelData\">ParcelData</a>","synthetic":false,"types":["nx::gpu::parcel::ParcelData"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/binder/enum.ErrorCode.html\" title=\"enum nx::gpu::binder::ErrorCode\">ErrorCode</a>","synthetic":false,"types":["nx::gpu::binder::ErrorCode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/ioctl/struct.NvMapCreate.html\" title=\"struct nx::gpu::ioctl::NvMapCreate\">NvMapCreate</a>","synthetic":false,"types":["nx::gpu::ioctl::NvMapCreate"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/ioctl/struct.NvMapFromId.html\" title=\"struct nx::gpu::ioctl::NvMapFromId\">NvMapFromId</a>","synthetic":false,"types":["nx::gpu::ioctl::NvMapFromId"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/ioctl/enum.AllocFlags.html\" title=\"enum nx::gpu::ioctl::AllocFlags\">AllocFlags</a>","synthetic":false,"types":["nx::gpu::ioctl::AllocFlags"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/ioctl/struct.NvMapAlloc.html\" title=\"struct nx::gpu::ioctl::NvMapAlloc\">NvMapAlloc</a>","synthetic":false,"types":["nx::gpu::ioctl::NvMapAlloc"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/ioctl/struct.NvMapGetId.html\" title=\"struct nx::gpu::ioctl::NvMapGetId\">NvMapGetId</a>","synthetic":false,"types":["nx::gpu::ioctl::NvMapGetId"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/ioctl/struct.NvHostCtrlSyncptWait.html\" title=\"struct nx::gpu::ioctl::NvHostCtrlSyncptWait\">NvHostCtrlSyncptWait</a>","synthetic":false,"types":["nx::gpu::ioctl::NvHostCtrlSyncptWait"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.Layout.html\" title=\"enum nx::gpu::Layout\">Layout</a>","synthetic":false,"types":["nx::gpu::Layout"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.DisplayScanFormat.html\" title=\"enum nx::gpu::DisplayScanFormat\">DisplayScanFormat</a>","synthetic":false,"types":["nx::gpu::DisplayScanFormat"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.Kind.html\" title=\"enum nx::gpu::Kind\">Kind</a>","synthetic":false,"types":["nx::gpu::Kind"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.ColorFormat.html\" title=\"enum nx::gpu::ColorFormat\">ColorFormat</a>","synthetic":false,"types":["nx::gpu::ColorFormat"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.PixelFormat.html\" title=\"enum nx::gpu::PixelFormat\">PixelFormat</a>","synthetic":false,"types":["nx::gpu::PixelFormat"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.GraphicsAllocatorUsage.html\" title=\"struct nx::gpu::GraphicsAllocatorUsage\">GraphicsAllocatorUsage</a>","synthetic":false,"types":["nx::gpu::GraphicsAllocatorUsage"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.ConnectionApi.html\" title=\"enum nx::gpu::ConnectionApi\">ConnectionApi</a>","synthetic":false,"types":["nx::gpu::ConnectionApi"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.DisconnectMode.html\" title=\"enum nx::gpu::DisconnectMode\">DisconnectMode</a>","synthetic":false,"types":["nx::gpu::DisconnectMode"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.QueueBufferOutput.html\" title=\"struct nx::gpu::QueueBufferOutput\">QueueBufferOutput</a>","synthetic":false,"types":["nx::gpu::QueueBufferOutput"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.Plane.html\" title=\"struct nx::gpu::Plane\">Plane</a>","synthetic":false,"types":["nx::gpu::Plane"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.GraphicBufferHeader.html\" title=\"struct nx::gpu::GraphicBufferHeader\">GraphicBufferHeader</a>","synthetic":false,"types":["nx::gpu::GraphicBufferHeader"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.GraphicBuffer.html\" title=\"struct nx::gpu::GraphicBuffer\">GraphicBuffer</a>","synthetic":false,"types":["nx::gpu::GraphicBuffer"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.Fence.html\" title=\"struct nx::gpu::Fence\">Fence</a>","synthetic":false,"types":["nx::gpu::Fence"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.MultiFence.html\" title=\"struct nx::gpu::MultiFence\">MultiFence</a>","synthetic":false,"types":["nx::gpu::MultiFence"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.Rect.html\" title=\"struct nx::gpu::Rect\">Rect</a>","synthetic":false,"types":["nx::gpu::Rect"]},{"text":"impl Default for <a class=\"enum\" href=\"nx/gpu/enum.Transform.html\" title=\"enum nx::gpu::Transform\">Transform</a>","synthetic":false,"types":["nx::gpu::Transform"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/gpu/struct.QueueBufferInput.html\" title=\"struct nx::gpu::QueueBufferInput\">QueueBufferInput</a>","synthetic":false,"types":["nx::gpu::QueueBufferInput"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.Key.html\" title=\"struct nx::input::Key\">Key</a>","synthetic":false,"types":["nx::input::Key"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.TouchData.html\" title=\"struct nx::input::TouchData\">TouchData</a>","synthetic":false,"types":["nx::input::TouchData"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.TouchEntry.html\" title=\"struct nx::input::TouchEntry\">TouchEntry</a>","synthetic":false,"types":["nx::input::TouchEntry"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.TouchState.html\" title=\"struct nx::input::TouchState\">TouchState</a>","synthetic":false,"types":["nx::input::TouchState"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.JoystickPosition.html\" title=\"struct nx::input::JoystickPosition\">JoystickPosition</a>","synthetic":false,"types":["nx::input::JoystickPosition"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.ConnectionState.html\" title=\"struct nx::input::ConnectionState\">ConnectionState</a>","synthetic":false,"types":["nx::input::ConnectionState"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.ControllerStateEntry.html\" title=\"struct nx::input::ControllerStateEntry\">ControllerStateEntry</a>","synthetic":false,"types":["nx::input::ControllerStateEntry"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.ControllerState.html\" title=\"struct nx::input::ControllerState\">ControllerState</a>","synthetic":false,"types":["nx::input::ControllerState"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.ControllerMacAddress.html\" title=\"struct nx::input::ControllerMacAddress\">ControllerMacAddress</a>","synthetic":false,"types":["nx::input::ControllerMacAddress"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/input/struct.ControllerColor.html\" title=\"struct nx::input::ControllerColor\">ControllerColor</a>","synthetic":false,"types":["nx::input::ControllerColor"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/arm/struct.CpuRegister.html\" title=\"struct nx::arm::CpuRegister\">CpuRegister</a>","synthetic":false,"types":["nx::arm::CpuRegister"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/arm/struct.FpuRegister.html\" title=\"struct nx::arm::FpuRegister\">FpuRegister</a>","synthetic":false,"types":["nx::arm::FpuRegister"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/arm/struct.RegisterGroup.html\" title=\"struct nx::arm::RegisterGroup\">RegisterGroup</a>","synthetic":false,"types":["nx::arm::RegisterGroup"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/arm/struct.ThreadContext.html\" title=\"struct nx::arm::ThreadContext\">ThreadContext</a>","synthetic":false,"types":["nx::arm::ThreadContext"]},{"text":"impl Default for <a class=\"struct\" href=\"nx/fs/struct.FileOpenOption.html\" title=\"struct nx::fs::FileOpenOption\">FileOpenOption</a>","synthetic":false,"types":["nx::fs::FileOpenOption"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()