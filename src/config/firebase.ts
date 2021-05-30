import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCQnJyL7o2RPvpQrOAodamnTaR6waJsyKY",
    authDomain: "react-chatengine.firebaseapp.com",
    projectId: "react-chatengine",
    storageBucket: "react-chatengine.appspot.com",
    messagingSenderId: "722981729499",
    appId: "1:722981729499:web:0ec33813aea85e373048fe"
  }).auth();