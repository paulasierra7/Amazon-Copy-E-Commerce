import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDB5wEIEuqY_veTQmSX1TwNOv8hMb_ZGj8",
  authDomain: "e-commerce-react-1d3b4.firebaseapp.com",
  projectId: "e-commerce-react-1d3b4",
  storageBucket: "e-commerce-react-1d3b4.appspot.com",
  messagingSenderId: "130778229459",
  appId: "1:130778229459:web:2e6e75ce216257dc614226"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);