// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFwtnWgPUslkUqXl8SZBxNb_MslO1A4to",
    authDomain: "netflix-clone-react-8e695.firebaseapp.com",
    projectId: "netflix-clone-react-8e695",
    storageBucket: "netflix-clone-react-8e695.appspot.com",
    messagingSenderId: "942715510531",
    appId: "1:942715510531:web:ea7d9d9cce5a7bc9f89336"
  };
  
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth=firebase.auth();

export {auth}
export default db