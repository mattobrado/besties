import { query, collection, where, getDocs } from "firebase/firestore";
import { COLLECTIONS, db } from "src/lib";

const isUsernameDuplicated = async (username: string) => {
  const q = query(
    collection(db, COLLECTIONS.USERS),
    where("username", "==", username)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
};

export default isUsernameDuplicated;
