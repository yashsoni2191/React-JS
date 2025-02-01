// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW_REr27ycVoGLWLcBTsPcXrdZR3DpIZ8",
  authDomain: "frontend02-97705.firebaseapp.com",
  projectId: "frontend02-97705",
  storageBucket: "frontend02-97705.firebasestorage.app",
  messagingSenderId: "590490249155",
  appId: "1:590490249155:web:ac19ed718421dfee1dbf76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

export const googleAuth = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};