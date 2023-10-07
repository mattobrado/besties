import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

const isUsernameDuplicated = async (username: string) => {
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
};

export default isUsernameDuplicated;
