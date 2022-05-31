/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { onNavigate } from '../main.js';

import {
  getFirestore,
  app,
  db,
  getAuth,
  signOut,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  getDoc,
  doc,
  updateDoc
} from './functionFirebase.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const author = getAuth(app);
export const firestore = getFirestore(app); // esto es db // usuarios

export const savePost = (title, description, author) => {
  addDoc(collection(db, 'Posts'), {
    title,
    description,
    author: localStorage.getItem('email')});
}

export const getPosts = (title, description) => {
  getDocs(collection(db, 'Posts'), {title, description});
}

export const onGetPosts = (callback) =>
  onSnapshot(collection(db, 'Posts'), callback);

export const deletePosts = (id) => deleteDoc(doc(db, 'Posts', id));

export const getPost = (id) => getDoc(doc(db, 'Posts', id));

export const updatePost = (id, newFields) =>
  updateDoc(doc(db, 'Posts', id), newFields);

export const signOutFunction = () =>
  {signOut(author).then(() => {
  onNavigate('/');
  }).catch((error) => {
  console.error(error);
  });
  }

export{
  collection,
  onSnapshot,
}