// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDak64JejhNY74j2mA0xj31uR29fWcxS0g",
  authDomain: "wedding-23853.firebaseapp.com",
  databaseURL: "https://wedding-23853-default-rtdb.firebaseio.com/",
  projectId: "wedding-23853",
  storageBucket: "wedding-23853.appspot.com",
  messagingSenderId: "268592059898",
  appId: "1:268592059898:web:31138394a2cb4d3e584043",
  // measurementId: "G-6V79T35KC6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const analytics = getAnalytics(firebaseApp);

console.log("EXPORTING:", database);

export default database;
