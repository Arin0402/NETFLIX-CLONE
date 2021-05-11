import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgr94nRF2HARJUtkYIfaA0efEXEYDyBE8",
    authDomain: "netflix-clone-67335.firebaseapp.com",
    projectId: "netflix-clone-67335",
    storageBucket: "netflix-clone-67335.appspot.com",
    messagingSenderId: "1028551379778",
    appId: "1:1028551379778:web:afabb0f4583f84441216db",
    measurementId: "G-MSTJE29ME0"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
