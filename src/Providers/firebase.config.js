import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDnLcbF4rxIDGNScSVKRQMOIZpg4zBnWAE",
  authDomain: "readopia-a11-t008.firebaseapp.com",
  projectId: "readopia-a11-t008",
  storageBucket: "readopia-a11-t008.appspot.com",
  messagingSenderId: "451368359571",
  appId: "1:451368359571:web:59034aab4174430dc31f66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
