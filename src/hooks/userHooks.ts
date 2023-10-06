import { doc, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { UserType } from "../lib/types";

export const useUser = (id: string): { user: UserType; isLoading: boolean } => {
  const q = query(doc(db, "users", id) as any);
  const [user, isLoading] = useDocumentData(q as any);
  const _user = user as UserType;
  return { user: _user, isLoading };
};
