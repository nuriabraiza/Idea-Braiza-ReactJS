import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaAEkoD8IgDWqtu71zpYke1dWMWK493YA",
  authDomain: "nba-wb-2.firebaseapp.com",
  projectId: "nba-wb-2",
  storageBucket: "nba-wb-2.appspot.com",
  messagingSenderId: "123945269042",
  appId: "1:123945269042:web:4bec05bfdcf42375e2492b",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
