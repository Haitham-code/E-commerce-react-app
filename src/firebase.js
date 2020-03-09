import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDXTH-C3VaahJE6O0AA5Nhxg1G5xhMgDD0",
  authDomain: "e-commerce-app-8fb73.firebaseapp.com",
  databaseURL: "https://e-commerce-app-8fb73.firebaseio.com",
  projectId: "e-commerce-app-8fb73",
  storageBucket: "e-commerce-app-8fb73.appspot.com",
  messagingSenderId: "921382211039",
  appId: "1:921382211039:web:8459c5098cb7d9a961886a"
});

export { firebaseConfig as firebase };
