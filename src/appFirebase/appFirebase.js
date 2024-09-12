
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "fitogrowshop-bbc6d.firebaseapp.com",
  projectId: "fitogrowshop-bbc6d",
  storageBucket: "fitogrowshop-bbc6d.appspot.com",
  messagingSenderId: "115603747376",
  appId: "1:115603747376:web:0e0550d79ad8951e2cf3f5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);


export  {db, storage, app};