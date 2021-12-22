import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAKlJ4wA0jzLHzGhPEZRsJtWIOoxPIhL68",
    authDomain: "prpjectfb.firebaseapp.com",
    projectId: "prpjectfb",
    storageBucket: "prpjectfb.appspot.com",
    messagingSenderId: "756976570371",
    appId: "1:756976570371:web:1e2c4c17ad557cf80a3e36",
    measurementId: "G-YF75Z3MVYW"
};
let InitFirebase;
InitFirebase = firebase.initializeApp(firebaseConfig);
console.log("firebase in utils", firebase.database());
const storage = firebase.storage();
const auth = firebase.auth();
const db = firebase.firestore();
export { storage, InitFirebase, firebase as default, auth, db };
