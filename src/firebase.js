import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDFrtRc9Kho98iEPlYWW3IthtDZy48xT14",
    authDomain: "wedding-project-d772f.firebaseapp.com",
    databaseURL: "https://wedding-project-d772f.firebaseio.com",
    projectId: "wedding-project-d772f",
    storageBucket: "wedding-project-d772f.appspot.com",
    messagingSenderId: "909475900715",
    appId: "1:909475900715:web:cad1a3f71af10eadfb696e",
    measurementId: "G-CGWQ2LWRQP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export { db };

