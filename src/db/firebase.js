import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrTNTreJO_A72GcYPqHLXYjX1XejxJB_I",
  authDomain: "kira-indumentaria.firebaseapp.com",
  projectId: "kira-indumentaria",
  storageBucket: "kira-indumentaria.appspot.com",
  messagingSenderId: "310507073948",
  appId: "1:310507073948:web:84122d028a5eb792bc9859"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);