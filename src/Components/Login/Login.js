import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider, signInWithGoogle } from "../../firebase";

const Login = () => {
	const signIn = () => {
		signInWithGoogle();
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
					alt=""
				/>
				<div className="login__text">
					<h1>Sign in to Whatsapp</h1>
				</div>
				<Button onClick={signIn}>Sign In With Google</Button>
			</div>
		</div>
	);
};

export default Login;
