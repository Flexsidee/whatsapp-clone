import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import {
	Chat,
	DonutLarge,
	MoreVert,
	SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useState, useEffect } from "react";
// import db from "../../firebase";

const Sidebar = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		// db.collection("rooms").onSnapshot((snapshot) =>
		// 	setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
		// );
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLarge />
					</IconButton>

					<IconButton>
						<Chat />
					</IconButton>

					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined />
					<input placeholder="Search or start new chat" type="text" />
				</div>
			</div>

			<div className="sidebar__chats">
				<SidebarChat addNewChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</div>
		</div>
	);
};

export default Sidebar;
