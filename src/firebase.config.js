// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrx7vl3-RwjNZ0T8XMR95w9DxgCBXzLY",
  authDomain: "multimart-e3283.firebaseapp.com",
  projectId: "multimart-e3283",
  storageBucket: "multimart-e3283.appspot.com",
  messagingSenderId: "448878854281",
  appId: "1:448878854281:web:48c79bcc5d66fcdd9e0658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;