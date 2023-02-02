import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDhWQU5i011yocPKd67eoJ_hzqDPx8p0dI",
    authDomain: "electron-chat-5ad5d.firebaseapp.com",
    projectId: "electron-chat-5ad5d",
    storageBucket: "electron-chat-5ad5d.appspot.com",
    messagingSenderId: "865264784930",
    appId: "1:865264784930:web:25bcf22d6f4afecfa61c7b",
    measurementId: "G-LJKYQJDY7L"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(config).firestore();