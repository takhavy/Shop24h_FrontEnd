import * as firebase from "firebase/app";
//import firebase from "firebase";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCL85z9ZNeTRFtvqMGsQqwToYuAuCg7qVw",
  authDomain: "devcamp-r223-ae2df.firebaseapp.com",
  projectId: "devcamp-r223-ae2df",
  storageBucket: "devcamp-r223-ae2df.appspot.com",
  messagingSenderId: "681099511182",
  appId: "1:681099511182:web:a9c53fa5accf9e4ccad0df",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage(app);
const provider=new GoogleAuthProvider();

//  export const auth=firebase.auth();

//  export const provider = new firebase.auth.GoogleAuthProvider();
export { provider ,auth, storage,app };