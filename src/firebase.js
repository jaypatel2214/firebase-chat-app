import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGccXUEQqaHSfl1daI7pJ0YRAmcKoL_EM",
    authDomain: "react-chat-57aa7.firebaseapp.com",
    projectId: "react-chat-57aa7",
    storageBucket: "react-chat-57aa7.appspot.com",
    messagingSenderId: "681370651134",
    appId: "1:681370651134:web:725c87d25fc8c53b0a18af",
    measurementId: "G-8MS8EWCD9Z"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }