import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3IkGssjCQlAsCXptGeOVtgQkpSpvIPLg",
    authDomain: "green-shop-0000.firebaseapp.com",
    projectId: "green-shop-0000",
    storageBucket: "green-shop-0000.firebasestorage.app",
    messagingSenderId: "567247862957",
    appId: "1:567247862957:web:71277dfd572357c70a5a24",
    measurementId: "G-0NWPK86TWN"
  };


  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const ProviderGoogle = new GoogleAuthProvider()

 export const signWithGoogle = ()=>{
return signInWithPopup(auth,ProviderGoogle)
  }
