import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import data from "./seedData.json";

const productsCollection = collection(db, "products");

data.forEach((product) => {
  addDoc(productsCollection, product);
});
