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
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Sidebar = () => {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		const fetchRooms = async () => {
			const rooms = [];
			const roomCollection = await getDocs(collection(db, "rooms"));
			roomCollection.forEach((doc) => {
				rooms.push({ id: doc.id, data: doc.data() });
			});
			setRooms(rooms);
		};
		fetchRooms();
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
				{rooms.map((room, index) => (
					<SidebarChat key={index} name={room.data.name} id={room.id} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
