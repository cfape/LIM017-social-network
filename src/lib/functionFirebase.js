//import { app } from './firebaseConfig.js';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

import {
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    getDoc,
    doc,
    updateDoc,
    getFirestore
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

export const firebaseConfig = {
    apiKey: 'AIzaSyACELeB7pHbMS0Bo8nCVCC95VIxKx6DoS4',
    authDomain: 'social-network-destinos.firebaseapp.com',
    projectId: 'social-network-destinos',
    storageBucket: 'social-network-destinos.appspot.com',
    messagingSenderId: '609611098447',
    appId: '1:609611098447:web:6304ca8c2e7416021b3d3a',
    measurementId: 'G-E4BPN7MZ8C',
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const createUser = (email, password)  => createUserWithEmailAndPassword(auth, email, password);
const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

export {
    initializeApp,
    getFirestore,
    signOut,
    collection,
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    getDoc,
    getAuth,
    doc,
    signIn,
    updateDoc
}

