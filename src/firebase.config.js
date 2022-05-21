import {getApp, getApps, initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDasmbirLtI-Gbnc6QTbE4FkBWe4I8A8oo",
    authDomain: "restaurantapp-724b8.firebaseapp.com",
    databaseURL: "https://restaurantapp-724b8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-724b8",
    storageBucket: "restaurantapp-724b8.appspot.com",
    messagingSenderId: "416737821710",
    appId: "1:416737821710:web:74f617ab84cb25f014685f",
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage =getStorage(app)


export {app,firestore,storage}