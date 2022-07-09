import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDLB8f8tiXJr7ZSb2MsuLbBi3HJGogSWLA",
	authDomain: "whatsapp-clone-4d999.firebaseapp.com",
	projectId: "whatsapp-clone-4d999",
	storageBucket: "whatsapp-clone-4d999.appspot.com",
	messagingSenderId: "247183489932",
	appId: "1:247183489932:web:fbfe024a5873540cf774a9",
	measurementId: "G-B7N5G57SES",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
