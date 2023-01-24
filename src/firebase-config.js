import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDbYgaYFJ5MqlHFVzCJ-mbs3E3SVv0gkDk",
    authDomain: "secquralse-assignment.firebaseapp.com",
    projectId: "secquralse-assignment",
    storageBucket: "secquralse-assignment.appspot.com",
    messagingSenderId: "921687562515",
    appId: "1:921687562515:web:9c68da4a0b5029118962e6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)