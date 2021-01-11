<?xml version='1.0' encoding='UTF-8'?>
<Project Type="Project" LVVersion="19008000">
	<Item Name="My Computer" Type="My Computer">
		<Property Name="server.app.propertiesEnabled" Type="Bool">true</Property>
		<Property Name="server.control.propertiesEnabled" Type="Bool">true</Property>
		<Property Name="server.tcp.enabled" Type="Bool">false</Property>
		<Property Name="server.tcp.port" Type="Int">0</Property>
		<Property Name="server.tcp.serviceName" Type="Str">My Computer/VI Server</Property>
		<Property Name="server.tcp.serviceName.default" Type="Str">My Computer/VI Server</Property>
		<Property Name="server.vi.callsEnabled" Type="Bool">true</Property>
		<Property Name="server.vi.propertiesEnabled" Type="Bool">true</Property>
		<Property Name="specify.custom.address" Type="Bool">false</Property>
		<Item Name="web_service_test" Type="Web Service">
			<Property Name="ws.guid" Type="Str">{9A15A460-D20A-4CDB-A895-118E75B33727}</Property>
			<Property Name="ws.public_folder_name" Type="Str">public</Property>
			<Item Name="Public Content" Type="Folder" URL="../public">
				<Property Name="NI.DISK" Type="Bool">true</Property>
			</Item>
			<Item Name="Startup VIs" Type="Startup VIs Container">
				<Item Name="test_web_app.vi" Type="VI" URL="../test_web_app.vi">
					<Property Name="ws.type" Type="Int">2</Property>
				</Item>
			</Item>
			<Item Name="Web Resources" Type="HTTP WebResources Container"/>
		</Item>
		<Item Name="Dependencies" Type="Dependencies"/>
		<Item Name="Build Specifications" Type="Build"/>
	</Item>
</Project>
