import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBg_euZpW_uUAE4EKflVTT3saNzCOAAS7g",
  authDomain: "event360-r.firebaseapp.com",
  projectId: "event360-r",
  storageBucket: "event360-r.appspot.com",
  messagingSenderId: "78643949787",
  appId: "1:78643949787:web:a94cf663ec613b7f2b1cfe",
  measurementId: "G-Q1BPGS3L0W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};