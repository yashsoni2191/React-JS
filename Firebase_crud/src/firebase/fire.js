// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export const db = getFirestore(app)