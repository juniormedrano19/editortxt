import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_uM8JDnlapGBYa4seUHUBAGwhPmgxVOM",
    authDomain: "editortexto-5b528.firebaseapp.com",
    databaseURL: "https://editortexto-5b528.firebaseio.com",
    projectId: "editortexto-5b528",
    storageBucket: "editortexto-5b528.appspot.com",
    messagingSenderId: "691960905229",
    appId: "1:691960905229:web:4196c370012846d9ce1f44",
    measurementId: "G-4WDKFVHRVE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore(); //referencia a la bd de firebase

  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
  const twitterAuthProvider=new firebase.auth.TwitterAuthProvider();
  const facebookAuthProvider=new firebase.auth.FacebookAuthProvider();

  export{
      db,
      googleAuthProvider,
      twitterAuthProvider,
      facebookAuthProvider,
      firebase,
  }