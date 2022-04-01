import db from "api/firebaseConfig";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
  getDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
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
  passcode,
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
    // const dbResponse = await addDoc(collection(db, "invitees"), {

    const inviteesRef = collection(db, "invitees");
    const dbResponse = await addDoc(inviteesRef, {
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
    console.log("RESPONSE:", dbResponse);
  } catch (err) {
    console.error("FAILED ADDING GUEST:", err);
  }
  console.log("\ndatabase:", db);
};

export const getGuest = async (passcode) => {
  const inviteesRef = collection(db, `invitees`);
  const q = query(inviteesRef, where("passcode", "==", passcode));

  try {
    const querySnap = await getDocs(q);
    const response = querySnap.docs;

    if (response.length) {
      response.forEach((resp) => console.log("DOC:", resp.data()));
    }
    return response[0].data();
  } catch (err) {
    console.log("QUERY FAILED!");
  }
};
