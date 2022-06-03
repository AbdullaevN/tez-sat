import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqgIQWHwaadDjVYdNGAmS4qXa-wIXNPjQ",
  authDomain: "tez-sat-3e0a3.firebaseapp.com",
  databaseURL:
    "https://tez-sat-3e0a3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tez-sat-3e0a3",
  storageBucket: "tez-sat-3e0a3.appspot.com",
  messagingSenderId: "487828570908",
  appId: "1:487828570908:web:ec06fe32fca2197ce4b0d9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
