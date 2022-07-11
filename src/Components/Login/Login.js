import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
// import { signInWithPopup } from "firebase/auth";

const Login = () => {
	const signIn = () => {
		auth
			.signInWithPopUp(provider)
			.then((result) => console.log(result))
			.catch((error) => alert(error.message));

		// signInWithPopup(auth, provider).then(result =>{
		//     dispatch({type: ActionTypes.})
		// })
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
