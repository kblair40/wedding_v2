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
  response,
  email,
  phone_number,
  side,
  passcode
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
    response,
    email,
    phone_number,
    side,
    passcode,
    timestamp: Timestamp.now(),
  });
  // return;
  try {
    const dbResponse = await addDoc(collection(db, "invitees"), {
      first_name,
      last_name,
      priority,
      att_exp,
      replied,
      dinner_selection,
      age_range,
      special_requests,
      plus_one,
      response,
      email,
      phone_number,
      side,
      timestamp: Timestamp.now(),
    });
    console.log("RESPONSE:", dbResponse);
  } catch (err) {
    console.error("FAILED ADDING GUEST:", err);
  }
  console.log("\ndatabase:", db);
};
