import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPyOMKZ0Zx1iOAW1LuHnB6oDfrRH4OprE",
  authDomain: "clone-8c9a8.firebaseapp.com",
  projectId: "clone-8c9a8",
  storageBucket: "clone-8c9a8.appspot.com",
  messagingSenderId: "361333019963",
  appId: "1:361333019963:web:0ac9b69f9aec8f89d9d31e",
  measurementId: "G-B2JZKGLFGC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};