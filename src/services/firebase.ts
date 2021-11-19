// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh9QLfC5JgNx1_QBhkxTxJVJpoZtZJF_g",
  authDomain: "test-tb-admin.firebaseapp.com",
  databaseURL:
    "https://test-tb-admin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-tb-admin",
  storageBucket: "test-tb-admin.appspot.com",
  messagingSenderId: "732807135521",
  appId: "1:732807135521:web:821ee1ded2931f38607e60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth(app);
