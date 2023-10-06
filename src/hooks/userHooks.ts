import { doc, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export const useUser = (id: string) => {
  const q = query(doc(db, "users", id) as any);
  const [user, isLoading] = useDocumentData(q as any);
  return { user, isLoading };
};
