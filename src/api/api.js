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
  significant_other,
  other_family,
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
    significant_other,
    other_family,
    timestamp: Timestamp.now(),
  });

  try {
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
      significant_other,
      other_family,
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
    const invitees = await getDocs(q);
    const inviteeDocs = invitees.docs;

    if (inviteeDocs.length) {
      inviteeDocs.forEach((doc) => console.log("DOC:", doc.data()));

      return inviteeDocs[0].data();
    }
  } catch (err) {
    console.log("QUERY FAILED!");
  }
};

export const getRelatedGuests = async (names) => {
  if (!names.length) return;
  else console.log("NAMES RECEIVED:", names);

  const inviteesRef = collection(db, `invitees`);

  const queries = [];

  for (let name of names) {
    const [fn, ln] = name.split(" ");
    const q = query(
      inviteesRef,
      where("first_name", "==", fn),
      where("last_name", "==", ln)
    );

    queries.push(getDocs(q));
  }

  if (queries.length) {
    const allOthers = await Promise.all(queries);
    // console.log("ALL OTHERS:", allOthers);

    return allOthers.map((oth) => oth.docs[0].data());
  }
};
