import {
  doc,
  query,
  updateDoc,
  increment,
  getDoc,
  orderBy,
  collection,
  FirestoreError,
} from "firebase/firestore";
import { db, storage } from "../lib/firebase";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { UserType } from "../lib/types";
import { COLLECTIONS } from "../lib/constants";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import getNewRating from "../utils/getNewRating";
import { ROUTES } from "../lib/routes";

export const useUser = (
  id?: string
): { user?: UserType; isLoading: boolean; isError?: FirestoreError } => {
  if (!id) return { user: undefined, isLoading: false };
  const q = query(doc(db, COLLECTIONS.USERS, id) as any);
  const [user, isLoading, isError] = useDocumentData(q as any);
  return { user: <UserType>user, isLoading, isError };
};

export const useUpdateUser = (uid: string) => {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const updateUser = async (user: Partial<UserType>) => {
    setLoading(true);

    if (file) {
      const fileRef = ref(storage, "avatars/" + uid);
      await uploadBytes(fileRef, file);

      const avatarURL = await getDownloadURL(fileRef);
      user.avatar = avatarURL;
    }

    const docRef = doc(db, COLLECTIONS.USERS, uid);
    await updateDoc(docRef, user);

    setLoading(false);

    navigate(`${ROUTES.PROFILE}/${uid}`);
  };

  return {
    setFile,
    updateUser,
    isLoading,
    fileURL: file && URL.createObjectURL(file),
  };
};

export const addRating = async ({
  uid,
  newRating,
}: {
  uid: string;
  newRating: number;
}) => {
  const docRef = doc(db, COLLECTIONS.USERS, uid);
  const docSnap = await getDoc(docRef);
  const user = docSnap.data() as UserType;
  const { rating, ratingCount } = user;
  await updateDoc(docRef, {
    rating: getNewRating({ oldRating: rating, ratingCount, newRating }),
    ratingCount: increment(1),
    popularity: increment(1),
  });
};

export const removeRating = async ({
  uid,
  ratingToRemove,
}: {
  uid: string;
  ratingToRemove: number;
}) => {
  const docRef = doc(db, COLLECTIONS.USERS, uid);
  const docSnap = await getDoc(docRef);
  const user = docSnap.data() as UserType;
  const { rating, ratingCount } = user;
  await updateDoc(docRef, {
    rating: getNewRating({ oldRating: rating, ratingCount, ratingToRemove }),
    ratingCount: increment(-1),
  });
};

export const useHighestRated = () => {
  const q = query(collection(db, COLLECTIONS.USERS), orderBy("rating", "desc"));
  const [users, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { users: <UserType[]>users, isLoading };
};
