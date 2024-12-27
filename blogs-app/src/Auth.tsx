// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithPopup, UserCredential, GoogleAuthProvider, initializeAuth, getAuth, signInWithRedirect, browserSessionPersistence, browserPopupRedirectResolver } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "blogs-79335.firebaseapp.com",
  projectId: "blogs-79335",
  storageBucket: "blogs-79335.firebasestorage.app",
  messagingSenderId: "1011065906283",
  appId: "1:1011065906283:web:cfe18d2fe88be135a6bd2e",
  measurementId: "G-HQEFCMJ0NW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
  popupRedirectResolver: browserPopupRedirectResolver
});

export const login = async (): Promise<string> => {
  // Sign in using a popup.
  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  try {
    const userCred: UserCredential = await signInWithPopup(auth, provider);

    const idTokenRes = await userCred.user.getIdTokenResult();
    return idTokenRes.token;
  } catch (error) {
    console.log(error);
    return '';
  }
}

export const logout = async () => {
  return await auth.signOut();
}
