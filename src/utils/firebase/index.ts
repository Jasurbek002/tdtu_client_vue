import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDAU45Y4DS5yuxAOcBcOZ-lSoyrrtWBkXc",
    authDomain: "tdtu-ae215.firebaseapp.com",
    projectId: "tdtu-ae215",
    storageBucket: "tdtu-ae215.appspot.com",
    messagingSenderId: "113659924698",
    appId: "1:113659924698:web:15edfff68dc5a3f38795e3",
    measurementId: "G-P9KSETPGRX"
  };
  

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)
export {db,storage}

