import db from "api/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
// console.log("API DATABASE:", db);

export const addGuest = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  side,
  entree = "",
}) => {
  console.log("DATA RECEIVED", {
    firstName,
    lastName,
    email,
    phoneNumber,
    side,
    entree,
    timestamp: Timestamp.now(),
  });
  try {
    const response = await addDoc(collection(db, "invitees"), {
      firstName,
      lastName,
      email,
      phoneNumber,
      side,
      entree,
      timestamp: Timestamp.now(),
    });
    console.log("RESPONSE:", response);
  } catch (err) {
    console.error("FAILED ADDING GUEST:", err);
  }
  console.log("\ndatabase:", db);
};
