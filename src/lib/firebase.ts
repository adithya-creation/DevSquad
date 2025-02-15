import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC1BMA48bMDKWBhRjYs2htZyNTIQ01yTVM",
  authDomain: "the-dev-squad.firebaseapp.com",
  projectId: "the-dev-squad",
  storageBucket: "the-dev-squad.firebasestorage.app",
  messagingSenderId: "983845396340",
  appId: "1:983845396340:web:bc318ca155dc866a7d1621",
  measurementId: "G-3F3L08VE3Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);