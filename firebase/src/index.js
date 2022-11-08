import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'
import { 
  getFirestore, collection, getDocs
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8XUfiAFd2tXpUleY99PlMzacGZmTcqLM",
  authDomain: "avid-racer-359700.firebaseapp.com",
  projectId: "avid-racer-359700",
  storageBucket: "avid-racer-359700.appspot.com",
  messagingSenderId: "1013991759252",
  appId: "1:1013991759252:web:1919b226b86c4a5612c381",
  measurementId: "G-5EZB862P3X"
};

//init firebase app
initializeApp(firebaseConfig)

//init service
const db = getFirestore()

//collection ref
const colRef = collection(db, 'books')

//get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {    
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

  const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault() })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




