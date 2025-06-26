/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import { UserData } from "@/app/types/UserData";

const firestore = getFirestore(app);

// login
export async function loginWithGoogle(data: UserData) {
  const ref = collection(firestore, "/users");
  const q = query(ref, where("email", "==", data.email));
  const snapshot = await getDocs(q);

  const userData: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (userData.length === 0) {
    await addDoc(collection(firestore, "users"), {
      ...data,
      created_at: Timestamp.now(),
      updated_at: Timestamp.now(),
    });
    return { status: true, message: "Login success", data };
  } else if (userData.length === 1) {
    const updatedData = {
      name: data.name,
      image: data.image,
    };
    await updateDoc(doc(firestore, "users", userData[0].id), {
      ...updatedData,
      updated_at: Timestamp.now(),
    });
    return {
      status: true,
      message: "User data updated from google",
      data: { ...data, username: userData[0].username, info: userData[0].info },
    };
  } else {
    return { status: false, message: "Multiple same email account" };
  }
}

// search user
export async function getUserByUsername(username: string) {
  const ref = collection(firestore, "/users");
  const q = query(ref, where("username", "==", username));
  const snapshot = await getDocs(q);

  const userData: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (userData.length === 0)
    return { status: false, message: "User not found" };

  return { data: userData[0], status: true, message: "User found" };
}

// update user data
export async function updateUserData(
  newInfo: FormDataEntryValue,
  newUsername: FormDataEntryValue,
  user: UserData
) {
  if (newUsername === user.username && newInfo === user.info) {
    return { status: false, message: "Tidak ada data yang diubah" };
  }

  if (newUsername === user.username && newInfo !== user.info) {
    const newData = {
      info: newInfo,
    };
    await updateDoc(doc(firestore, "users", user.id || ""), {
      ...newData,
      updated_at: Timestamp.now(),
    });
    return {
      status: true,
      message: "User data updated successfully",
      data: { ...user, info: newInfo },
    };
  }

  if (newUsername !== user.username && newInfo === user.info) {
    console.log("tes");
    const newData = {
      username: newUsername,
    };
    await updateDoc(doc(firestore, "users", user.id || ""), {
      ...newData,
      updated_at: Timestamp.now(),
    });
    return {
      status: true,
      message: "User data updated successfully",
      data: { ...user, username: newUsername },
    };
  }

  if (newUsername !== user.username && newInfo !== user.info) {
    const newData = {
      username: newUsername,
      info: newInfo,
    };

    await updateDoc(doc(firestore, "users", user.id || ""), {
      ...newData,
      updated_at: Timestamp.now(),
    });
    return {
      status: true,
      message: "User data updated successfully",
      data: { ...user, username: newUsername },
    };
  }
}

// report room
export async function normalReport(
  name: FormDataEntryValue,
  room: FormDataEntryValue,
  report: FormDataEntryValue
) {
  const data = { name, room, report };
  await addDoc(collection(firestore, "reports-normal"), {
    ...data,
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
  });
  return { status: true, message: "Laporan berhasil dikirim" };
}

export async function anonymousReport(report: FormDataEntryValue) {
  const data = { report };
  await addDoc(collection(firestore, "reports-anonymous"), {
    ...data,
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
  });
  return { status: true, message: "Laporan berhasil dikirim" };
}
