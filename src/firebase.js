// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2f-ge7AgALbxFoSXMkKo7KQ3ZrTrkLcY",
  authDomain: "js21teamwork.firebaseapp.com",
  projectId: "js21teamwork",
  storageBucket: "js21teamwork.appspot.com",
  messagingSenderId: "208178116589",
  appId: "1:208178116589:web:bdba25027bae4632e019e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;

