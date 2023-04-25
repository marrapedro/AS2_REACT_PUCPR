import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDrBP46Hqe5vkPvhgGC0T9eyq9SNJLncak",
    authDomain: "pucpr-atividade.firebaseapp.com",
    projectId: "pucpr-atividade",
    storageBucket: "pucpr-atividade.appspot.com",
    messagingSenderId: "369848318680",
    appId: "1:369848318680:web:a1c8f5df3408a68f3235ad"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  
  export default firebase;