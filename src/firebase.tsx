import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyC9V-m9G_neeTbL5XlonKFw-rcJkV0U_o4",
//     authDomain: "to-do-app-c6bb3.firebaseapp.com",
//     databaseURL: "https://to-do-app-c6bb3.firebaseio.com",
//     projectId: "to-do-app-c6bb3",
//     storageBucket: "to-do-app-c6bb3.appspot.com",
//     messagingSenderId: "998776281516",
//     appId: "1:998776281516:web:c03d9116a2f0232e3ec209",
//     measurementId: "G-0PMJKM3706"
//   }
const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyC9V-m9G_neeTbL5XlonKFw-rcJkV0U_o4",
        authDomain: "to-do-app-c6bb3.firebaseapp.com",
        databaseURL: "https://to-do-app-c6bb3.firebaseio.com",
        projectId: "to-do-app-c6bb3",
        storageBucket: "to-do-app-c6bb3.appspot.com",
        messagingSenderId: "998776281516",
        appId: "1:998776281516:web:c03d9116a2f0232e3ec209",
        measurementId: "G-0PMJKM3706"

})

const db = firebaseApp.firestore()

export {db}