import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBWGVy49wvYcIbe3qveepLQH9xpEyTZYqE",
    authDomain: "net-ninja-marioplan-e6f3b.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-e6f3b.firebaseio.com",
    projectId: "net-ninja-marioplan-e6f3b",
    storageBucket: "net-ninja-marioplan-e6f3b.appspot.com",
    messagingSenderId: "941854541280",
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({/*..Timestamp...*/});

  export default firebase;