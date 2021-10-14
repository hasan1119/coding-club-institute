import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

const firebaseInitialization = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInitialization;
