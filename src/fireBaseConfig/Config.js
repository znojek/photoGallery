 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvjCYSLllfIqehJdUZqK-kindEgTYsyBg",
    authDomain: "firstproject-84da1.firebaseapp.com",
    projectId: "firstproject-84da1",
    storageBucket: "firstproject-84da1.appspot.com",
    messagingSenderId: "210302536561",
    appId: "1:210302536561:web:5f4d092b3c54f431ed44d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const projectFirestorage = firebase.firestore();

  export{projectStorage, projectFirestorage};