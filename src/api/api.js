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
  updateDoc,
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
  attending,
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
    attending,
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
      attending,
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

export const getAllInvitees = async () => {
  const inviteesRef = collection(db, `invitees`);

  const allDocs = await getDocs(inviteesRef);
  // console.log("\n\nALL DOCS:", allDocs);

  const res = [];
  allDocs.forEach((doc) => {
    // console.log("\n", doc.id, " -> ", doc.data());
    let id = doc.id;
    let data = doc.data();
    // console.log("\n\n\n\n", { id, ...data });
    let mergedDoc = { id, ...data };
    res.push(mergedDoc);
  });
  // console.log("RES:", res);
  return res;
};

export const patchGuest = async (id, data) => {
  // console.log("\n\n\n\nPATCH GUEST DATA", { id, data });

  let guestRef = doc(db, "invitees", id);

  let patchData = {
    dinner_selection: data.dinner_selection,
    attending: data.attending,
  };

  let patchRes = await updateDoc(guestRef, patchData);
  // console.log("\nPATCH RES:", patchRes);

  // console.log("\n\n\n\n");
};

export const getGuestByName = async (fn, ln) => {
  const inviteesRef = collection(db, `invitees`);

  try {
    const q = query(
      inviteesRef,
      where("first_name", "==", fn),
      where("last_name", "==", ln)
    );

    const invitees = await getDocs(q);
    const inviteeDocs = invitees.docs;
    console.log("INVITEE DOCS:", inviteeDocs);

    if (inviteeDocs.length) {
      inviteeDocs.forEach((doc) => console.log("NAME DOC:", doc.data()));

      console.log(
        "GET GUEST RETURNING:",
        inviteeDocs[0].data(),
        inviteeDocs[0].id
      );
      const id = inviteeDocs[0].id;
      return { ...inviteeDocs[0].data(), id };
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

    const res = [];
    allOthers.forEach((doc) => {
      if (!doc || !doc.docs || !doc.docs[0]) return;

      let id = doc.docs[0].id;
      let data = doc.docs[0].data();
      // console.log("\n\n\n\n", { id, data });
      let mergedDoc = { id, ...data };
      res.push(mergedDoc);
    });

    return res;
  }
};

export const getGuest = async (passcode) => {
  const inviteesRef = collection(db, `invitees`);
  const q = query(inviteesRef, where("passcode", "==", passcode));

  try {
    const invitees = await getDocs(q);
    const inviteeDocs = invitees.docs;

    if (inviteeDocs.length) {
      inviteeDocs.forEach((doc) => console.log("DOC:", doc.data()));

      console.log("GET GUEST RETURNING:", inviteeDocs[0].data());
      return inviteeDocs[0].data();
    }
  } catch (err) {
    console.log("QUERY FAILED!");
  }
};
