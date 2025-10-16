import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBe3GdbgTpv7N4SX0mNYzMdFMS3KehUbFI",
  authDomain: "neuroshine-1892b.firebaseapp.com",
  projectId: "neuroshine-1892b",
  storageBucket: "neuroshine-1892b.firebasestorage.app",
  messagingSenderId: "12640584551",
  appId: "1:12640584551:web:4aeaf8dd071e2b12afe5c2",
}

// Initialize Firebase (singleton pattern)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
