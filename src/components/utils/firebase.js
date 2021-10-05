import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
import  'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBEQQzKbSFJ97dzlljLg2MXtiRUTNzsJgU",
    authDomain: "react-firebase-auth-8ce67.firebaseapp.com",
    projectId: "react-firebase-auth-8ce67",
    storageBucket: "react-firebase-auth-8ce67.appspot.com",
    messagingSenderId: "5500353683",
    appId: "1:5500353683:web:8f6e369194d64034d72166"
  };  
  let InitFirebase ;
      InitFirebase = firebase.initializeApp(firebaseConfig);
      console.log("firebase in utils", firebase.database());
      const storage = firebase.storage()
  export {storage, InitFirebase , firebase as default}
