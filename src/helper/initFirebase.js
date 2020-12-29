import firebase from "firebase/app";

const InitFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyC16g0rVdI-fgWFcF08xxfXHIIKdftGJMQ",
      authDomain: "task-manager-885a1.firebaseapp.com",
      projectId: "task-manager-885a1",
      storageBucket: "task-manager-885a1.appspot.com",
      messagingSenderId: "66394983017",
      appId: "1:66394983017:web:9f555f3daed40c954bf0f8",
      measurementId: "G-LGPHVL4K65",
    });
  } else {
    firebase.app(); // if already initialized, use that one
  }
};


export default InitFirebase;