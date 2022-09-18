import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAAIsvcQEHEsJcY7kED-YBIo4r_TKxRXjg",
    authDomain: "messenger-ba685.firebaseapp.com",
    projectId: "messenger-ba685",
    storageBucket: "messenger-ba685.appspot.com",
    messagingSenderId: "135931371477",
    appId: "1:135931371477:web:b2b5b9e7c511012dc2a75c"
}).auth()