import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBQY52JsAH7XS9sb9cYmwdZo2zy4Rx6sHk",
    authDomain: "messenger-4ee92.firebaseapp.com",
    projectId: "messenger-4ee92",
    storageBucket: "messenger-4ee92.appspot.com",
    messagingSenderId: "989793361213",
    appId: "1:989793361213:web:594f13750b7270133d3954",
    measurementId: "G-Y4R2TFFFYP"
};
let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
export { storage, InitFirebase, firebase as default, auth, db };
