import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5dddG3GxDO7w0LozZ2ICn0ITRLm1Kr-Q",
  authDomain: "ecommerce-c418d.firebaseapp.com",
  projectId: "ecommerce-c418d",
  storageBucket: "ecommerce-c418d.appspot.com",
  messagingSenderId: "642223536906",
  appId: "1:642223536906:web:a92d1ed2535f0f67a6d8f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
