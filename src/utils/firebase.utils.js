// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUpkUUrWUSATAMvarK8A40zCLz7rEugjA',
  authDomain: 'clothing-pro-bd.firebaseapp.com',
  projectId: 'clothing-pro-bd',
  storageBucket: 'clothing-pro-bd.appspot.com',
  messagingSenderId: '1059577534545',
  appId: '1:1059577534545:web:7fa2fa149d42a57c28c070',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Crea una instancia del objeto del proveedor de Google
const googleProvider = new GoogleAuthProvider();

// Especifica los parámetros personalizados adicionales del proveedor de OAuth que quieres enviar junto con la solicitud de OAuth
googleProvider.setCustomParameters({
  // Forces account selection even when one account is available
  prompt: 'select_account',
});

export const auth = getAuth();
// Para acceder con una ventana emergente
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// Para acceder con el redireccionamiento a la página de acceso
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // Si no existe
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
