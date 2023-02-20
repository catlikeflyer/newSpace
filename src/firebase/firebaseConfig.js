import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCofPUmuv1dbiv20t_U3olzHGHfrKmflcY",
  authDomain: "my-pf-4f7f9.firebaseapp.com",
  projectId: "my-pf-4f7f9",
  storageBucket: "my-pf-4f7f9.appspot.com",
  messagingSenderId: "682088448561",
  appId: "1:682088448561:web:c263b704d0c7f683b2cb10"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const pStorage = firebase.storage();
const pFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { pStorage, pFirestore, timestamp };
