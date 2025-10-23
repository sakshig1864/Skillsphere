// Import the Firebase SDK functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWtIBXcRChf3k3ZboSJigMWsmt98loFiw",
  authDomain: "skillsphere-3f398-a8859.firebaseapp.com",
  projectId: "skillsphere-3f398-a8859",
  storageBucket: "skillsphere-3f398-a8859.firebasestorage.app",
  messagingSenderId: "251394174317",
  appId: "1:251394174317:web:4f7dc7f29180b4aaf9be64",
  measurementId: "G-P2XKF5VQMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app); // For storing data (users, scores, etc.)
const auth = getAuth(app); // For login/signup (optional)
const storage = getStorage(app); // For uploading files (optional)

// Export them for use in other files
export { app, db, auth, storage };
