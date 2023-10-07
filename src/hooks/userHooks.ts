import { doc, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { UserType } from "../lib/types";
import { COLLECTIONS } from "../lib/constants";

export const useUser = (
  id: string
): { user?: UserType; isLoading: boolean } => {
  const q = query(doc(db, COLLECTIONS.USERS, id) as any);
  const [user, isLoading] = useDocumentData(q as any);
  return { user: <UserType>user, isLoading };
};
