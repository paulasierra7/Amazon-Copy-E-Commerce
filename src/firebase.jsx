import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const apiKey = (process.env.REACT_APP_firebaseApiKey)

const firebaseConfig = {
  apiKey,
  authDomain: "e-commerce-react-1d3b4.firebaseapp.com",
  projectId: "e-commerce-react-1d3b4",
  storageBucket: "e-commerce-react-1d3b4.appspot.com",
  messagingSenderId: "130778229459",
  appId: "1:130778229459:web:2e6e75ce216257dc614226"
};


//Esta variable representa "la plataforma firebase"
const app = initializeApp(firebaseConfig);

//Esta variable representa "la base de datos"
export const db = getFirestore(app);