import React from 'react';
// import app from 'firebase';
// import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './style.css';

export default function App() {
  console.log('getAuth', getAuth);
  return (
    <div className="App">
      <div>Test </div>
      {/* <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button> */}
      <h1>Name: {localStorage.getItem('name')}</h1>
      <h1>Email: {localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem('profilePic')} />
    </div>
  );
}
