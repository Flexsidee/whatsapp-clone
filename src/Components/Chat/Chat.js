import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import {
	AttachFile,
	InsertEmoticon,
	Mic,
	MoreVert,
	SearchOutlined,
} from "@mui/icons-material";

const Chat = () => {
	const [seed, setSeed] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		console.log("You typed:", message);
		setMessage("");
	};

	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

				<div className="chat__headerInfo">
					<h3>Room name</h3>
					<p>Last seen at ...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				<p className={`chat__message ${true && "chat__receiver"}`}>
					<span className="chat__name">Somade Daniel</span>
					Hey Guys
					<span className="chat__timestamp">3:53pm</span>
				</p>
			</div>

			<div className="chat__footer">
				<InsertEmoticon />
				<form>
					<input
						type="text"
						placeholder="Type a message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>

					<button type="submit" onClick={sendMessage}>
						Send a message
					</button>
				</form>
				<Mic />
			</div>
		</div>
	);
};

export default Chat;
