import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAAWN7N4Hbv-cJ-th5ayslnE98R_LjFrHk",
  authDomain: "crown-db-45dc0.firebaseapp.com",
  databaseURL: "https://crown-db-45dc0.firebaseio.com",
  projectId: "crown-db-45dc0",
  storageBucket: "crown-db-45dc0.appspot.com",
  messagingSenderId: "831912274904",
  appId: "1:831912274904:web:ae254c4563a358e62d20ad",
  measurementId: "G-TJPBX5VP4M",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
