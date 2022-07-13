// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLB8f8tiXJr7ZSb2MsuLbBi3HJGogSWLA",
	authDomain: "whatsapp-clone-4d999.firebaseapp.com",
	projectId: "whatsapp-clone-4d999",
	storageBucket: "whatsapp-clone-4d999.appspot.com",
	messagingSenderId: "247183489932",
	appId: "1:247183489932:web:fbfe024a5873540cf774a9",
	measurementId: "G-B7N5G57SES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { auth, provider, signInWithGoogle };
export default db;
