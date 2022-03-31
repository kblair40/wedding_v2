import db from "api/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
// console.log("API DATABASE:", db);

export const addGuest = async ({
  first_name,
  last_name,
  priority,
  att_exp,
  replied,
  dinner_selection,
  age_range,
  special_requests,
  plus_one,
  reponse,
  email,
  phone_number,
  side,
}) => {
  console.log("DATA RECEIVED", {
    first_name,
    last_name,
    priority,
    att_exp,
    replied,
    dinner_selection,
    age_range,
    special_requests,
    plus_one,
    reponse,
    email,
    phone_number,
    side,
    timestamp: Timestamp.now(),
  });
  try {
    const response = await addDoc(collection(db, "invitees"), {
      first_name,
      last_name,
      priority,
      att_exp,
      replied,
      dinner_selection,
      age_range,
      special_requests,
      plus_one,
      reponse,
      email,
      phone_number,
      side,
      timestamp: Timestamp.now(),
    });
    console.log("RESPONSE:", response);
  } catch (err) {
    console.error("FAILED ADDING GUEST:", err);
  }
  console.log("\ndatabase:", db);
};
