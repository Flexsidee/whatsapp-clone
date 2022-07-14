import "./Login.css";
import { Button } from "@mui/material";
import { signInWithGoogle } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const Login = () => {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		signInWithGoogle()
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error);
			});
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
