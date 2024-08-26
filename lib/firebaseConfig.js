import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // For Realtime Database


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSOovlM6yCHfBnfZk80qT9fxV30Nq0z6c",
  authDomain: "shoes-71636.firebaseapp.com",
  projectId: "shoes-71636",
  storageBucket: "shoes-71636.appspot.com",
  messagingSenderId: "824368491032",
  appId: "1:824368491032:web:54a8386800b4312621b16d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realtimeDb = getDatabase(app); // Realtime Database instance

export { auth, db, realtimeDb };