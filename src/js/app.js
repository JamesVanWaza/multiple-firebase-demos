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

/** Constants */
const profileForm = document.querySelector('#form');
const fname = document.querySelector('#fname');
const btn = document.querySelector('#submit');
const readData = document.querySelector('#readData');
const githubBtn = document.querySelector('#githubBtn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    async function saveFormData() {
        const docRef = await addDoc(collection(db, 'contactForm'), {
            'First Name': fname.value, // As of Jan 10 2022, the data is being saved to firestore, but i have to declare the docRef variable - still an issue.
            //createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            console.log('Document written with ID: ', docRef.id);
            profileForm.reset();
        }).catch((error) => {
            console.error('Error adding document: ', error);
        });
    }

    saveFormData();
});

// Read data from firestore
readData.addEventListener('click', (e) => {
    async function readFormData() {
        const querySnapshot = await getDocs(collection(db, 'contactForm'));

        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    }

    readFormData();
});

/** Setting up Auth */
// Sign in with Github  
githubBtn.addEventListener('click', (e) => {
    e.preventDefault();

    async function signInUser() {
        // Sign in with Github
        const provider = new GithubAuthProvider();
        await signInWithRedirect(auth, provider);
    }

    signInUser();
});

// Auth state change
function initAuthStateChange() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User is signed in');
        } else {
            console.log('User is signed out');
        }
    });
}

// Sign out
function signOutUser() {
    signOut(auth).then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error('Error signing out: ', error);
    });
}

initAuthStateChange();
signOutUser();