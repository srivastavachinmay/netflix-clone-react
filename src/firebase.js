import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFwtnWgPUslkUqXl8SZBxNb_MslO1A4to",
    authDomain: "netflix-clone-react-8e695.firebaseapp.com",
    projectId: "netflix-clone-react-8e695",
    storageBucket: "netflix-clone-react-8e695.appspot.com",
    messagingSenderId: "942715510531",
    appId: "1:942715510531:web:ea7d9d9cce5a7bc9f89336"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app);

export {auth}
export default db