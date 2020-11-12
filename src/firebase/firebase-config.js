import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAMrkbz_pV5iq7QsKe09pUwbrqg8XaSz5k",
    authDomain: "editordiplo-881c0.firebaseapp.com",
    databaseURL: "https://editordiplo-881c0.firebaseio.com",
    projectId: "editordiplo-881c0",
    storageBucket: "editordiplo-881c0.appspot.com",
    messagingSenderId: "954014973377",
    appId: "1:954014973377:web:3343c338e90d02b951c340",
    measurementId: "G-Y7B749833E"
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