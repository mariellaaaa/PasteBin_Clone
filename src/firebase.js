// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvGwOG0C1VWO0d9sF9PGOS8SS2xSCJ-Y8",
  authDomain: "pastebinclone-ce997.firebaseapp.com",
  projectId: "pastebinclone-ce997",
  storageBucket: "pastebinclone-ce997.appspot.com",
  messagingSenderId: "363678390307",
  appId: "1:363678390307:web:1e0162f0e9222f2795f996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);