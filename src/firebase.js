import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDRoqiBEcxu5YPmwqa7bxtRWGwKUjxRFkA',
  authDomain: 'shulte-v1.firebaseapp.com',
  projectId: 'shulte-v1',
  storageBucket: 'shulte-v1.appspot.com',
  messagingSenderId: '714891275251',
  appId: '1:714891275251:web:4f19b88d8279b401d48086',
  measurementId: 'G-F328V4CZ6C',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
