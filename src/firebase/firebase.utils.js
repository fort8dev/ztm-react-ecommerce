import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",
  authDomain: "crwn-db.firebaseapp.com",
  databaseURL: "https://crwn-db.firebaseio.com",
  projectId: "crwn-db",
  storageBucket: "crwn-db.appspot.com",
  messagingSenderId: "850995411664",
  appId: "1:850995411664:web:7ddc01d597846f65",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
