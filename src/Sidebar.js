import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar />
				<div className="sidebar__headerRight">
					<DonutLarge />
					<Chat />
					<MoreVert />
				</div>
			</div>
			<div className="sidebar__search"></div>
			<div className="sidebar__chat"></div>
		</div>
	);
};

export default Sidebar;
