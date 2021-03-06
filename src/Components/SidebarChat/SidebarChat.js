import "./SidebarChat.css";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "./../../firebase";
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, id, name }) => {
	const [seed, setSeed] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const createChat = () => {
		const roomName = prompt("Please enter name for chat");

		if (roomName) {
			try {
				addDoc(collection(db, "rooms"), {
					name: roomName,
				});
			} catch (error) {
				console.error("Error adding document: ", error);
			}
		}
	};

	return !addNewChat ? (
		<Link to={`/rooms/${id}`}>
			<div className="sidebarChat">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
				<div className="sidebarChat__info">
					<h2>{name}</h2>
					<p>Last message..</p>
				</div>
			</div>
		</Link>
	) : (
		<div className="sidebarChat" onClick={createChat}>
			<h2>Add new chat</h2>
		</div>
	);
};

export default SidebarChat;
