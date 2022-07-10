import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzoBpb2J_kZBxsAjdnpGGJAZxZH9slMyo",
  authDomain: "dbest-note-app-3d99a.firebaseapp.com",
  projectId: "dbest-note-app-3d99a",
  storageBucket: "dbest-note-app-3d99a.appspot.com",
  messagingSenderId: "642835784092",
  appId: "1:642835784092:web:9d9c9d88316c0854962859",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
