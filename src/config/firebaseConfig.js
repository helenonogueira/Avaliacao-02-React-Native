import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIusaaUf9njDG8QskDEVQ9o4WzVuP_KWc",
  authDomain: "react-native-uniesp-d4ded.firebaseapp.com",
  projectId: "react-native-uniesp-d4ded",
  storageBucket: "react-native-uniesp-d4ded.firebasestorage.app",
  messagingSenderId: "172262265768",
  appId: "1:172262265768:web:e579a4b3606e9247e0839d"
};

const missingConfigKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfigKeys.length) {
  throw new Error(
    `Firebase configuration ausente. Verifique as variáveis: ${missingConfigKeys.join(
      ", "
    )}`
  );
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };