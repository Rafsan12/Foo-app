import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXckJV2UUEFcR0l4A8k5UQtaZ5vX1RHw",
  authDomain: "food-app-69dd9.firebaseapp.com",
  databaseURL: "https://food-app-69dd9-default-rtdb.firebaseio.com",
  projectId: "food-app-69dd9",
  storageBucket: "food-app-69dd9.appspot.com",
  messagingSenderId: "306709130035",
  appId: "1:306709130035:web:e96e9945f78917d4316c46"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
