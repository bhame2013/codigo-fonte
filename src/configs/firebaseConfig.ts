import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signOut, getAuth, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBDj6L8SvCOimpy5u-oMYnOorppnDw7NVw",
  authDomain: "codie-code.firebaseapp.com",
  projectId: "codie-code",
  storageBucket: "codie-code.appspot.com",
  messagingSenderId: "272431984451",
  appId: "1:272431984451:web:41e2ee77ccfbc6fe4309f6",
};

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export { GoogleAuthProvider, getAuth, provider , signInWithPopup, signOut };
