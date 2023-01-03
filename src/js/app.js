// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, GithubAuthProvider, signOut, onAuthStateChanged, connectAuthEmulator } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// import { getFunctions } from "firebase/functions";
// import { getMessaging } from "firebase/messaging";
// import { getPerformance } from "firebase/performance";
// import { getRemoteConfig } from "firebase/remote-config";
// import { getStorage } from "firebase/storage";
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
    apiKey: "AIzaSyAAzU-ciZhoIphf9oVSZ5H9yXfnC5_62po",
    authDomain: "friendlyeats-web-demo-mar-2021.firebaseapp.com",
    projectId: "friendlyeats-web-demo-mar-2021",
    storageBucket: "friendlyeats-web-demo-mar-2021.appspot.com",
    messagingSenderId: "896188255323",
    appId: "1:896188255323:web:79ea8b17c685f4c5ee837e",
    measurementId: "G-BTQDH211GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
//const analytics = getAnalytics(app);

// Auth 
const auth = getAuth(app);

// Firestore
const db = getFirestore(app);

// Functions    
// const functions = getFunctions(app);

// Messaging
//const messaging = getMessaging(app);

// Performance
//const performance = getPerformance(app);

// Remote Config
//const remoteConfig = getRemoteConfig(app);

// Storage
//const storage = getStorage(app);

// Initialize App Check
//const appCheck = initializeAppCheck(app);

// Emulator
connectAuthEmulator(auth, 'http://localhost:8080');