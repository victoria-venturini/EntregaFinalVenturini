import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import data from "./seedData.json";

const productsCollection = collection(db, "products");

data.forEach((product) => {
  addDoc(productsCollection, product);
  // .then((resultado)=>{
  //     // console.log("🚀 ~ .then ~ resultado:", resultado)
  //     // return console.log("Producto agregado")
  // })
  // .catch(()=>{
  //     console.log("🚀 ~ data.forEach ~ error:",)
  //     return console.log("Todo mal")
  // })
});
