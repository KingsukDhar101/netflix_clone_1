import { initializeApp } from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpBkE2DOU7BAM5bvxJOyrwu6SbJ7vpIWY",
  authDomain: "netflix-clone-1-bd865.firebaseapp.com",
  projectId: "netflix-clone-1-bd865",
  storageBucket: "netflix-clone-1-bd865.appspot.com",
  messagingSenderId: "740159991607",
  appId: "1:740159991607:web:57ac1b343c59e871fc34b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;