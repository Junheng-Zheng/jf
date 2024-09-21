import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC76SZUUFTqj5yNg1J2kNbhy3M5-VbTf2U",
  authDomain: "junandfiona-b280d.firebaseapp.com",
  projectId: "junandfiona-b280d",
  storageBucket: "junandfiona-b280d.appspot.com",
  messagingSenderId: "206820999241",
  appId: "1:206820999241:web:418004256793458558ff98",
  measurementId: "G-2HY615BBZ1"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);