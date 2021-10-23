import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBEQQzKbSFJ97dzlljLg2MXtiRUTNzsJgU",
    authDomain: "react-firebase-auth-8ce67.firebaseapp.com",
    projectId: "react-firebase-auth-8ce67",
    storageBucket: "react-firebase-auth-8ce67.appspot.com",
    messagingSenderId: "5500353683",
    appId: "1:5500353683:web:8f6e369194d64034d72166"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }