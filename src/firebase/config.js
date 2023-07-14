import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBwsazDYPhhAahPy5r11R_e9loz3_QCd84",
    authDomain: "vue-blog-system-1f50d.firebaseapp.com",
    projectId: "vue-blog-system-1f50d",
    storageBucket: "vue-blog-system-1f50d.appspot.com",
    messagingSenderId: "902834372354",
    appId: "1:902834372354:web:31d5a4eeb2eacf27c14c1b"
  };
  //init firebase
  firebase.initializeApp(firebaseConfig)

  //database setup
  let db = firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {db,timestamp};