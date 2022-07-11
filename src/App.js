import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Chat from "./Components/Chat/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login/Login";

function App() {
	const [user, setUser] = useState(null);

	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Router>
						<Sidebar />
						<Routes>
							<Route path="/" element={<Chat />} />
							<Route path="/rooms/:roomId" element={<Chat />} />
						</Routes>
					</Router>
				</div>
			)}
		</div>
	);
}

export default App;
