import {
  doc,
  query,
  updateDoc,
  increment,
  getDoc,
  orderBy,
  collection,
  arrayUnion,
  where,
} from "firebase/firestore";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import type { UserType } from "src/lib/types/index";
import { COLLECTIONS } from "src/lib/constants";
import { db, storage } from "src/lib/firebase";
import getNewRating from "src/lib/utils/getNewRating";

export const useUser = (
  uid?: string
): { user?: UserType; isLoading: boolean } => {
  if (!uid) return { isLoading: true };
  const q = query(doc(db, COLLECTIONS.USERS, uid) as any);
  const [user, isLoading] = useDocumentData(q as any);
  return { user: <UserType>user, isLoading };
};

export const useUpdateUser = (uid?: string) => {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const updateUser = async (userFields: Partial<UserType>) => {
    setLoading(true);

    if (file) {
      const fileRef = ref(storage, "avatars/" + uid);
      await uploadBytes(fileRef, file).catch((e) => console.log(e));

      const avatarURL = await getDownloadURL(fileRef);
      userFields.avatar = avatarURL;
    }
    if (Object.keys(userFields).length > 0 && uid) {
      const docRef = doc(db, COLLECTIONS.USERS, uid);
      await updateDoc(docRef, userFields);
    }

    setLoading(false);
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

export const useFriendRequest = () => {
  const [isLoading, setLoading] = useState(false);

  const sendFriendRequest = async ({
    authUid,
    targetUid,
  }: {
    authUid: string;
    targetUid: string;
  }) => {
    setLoading(true);
    const docRef = doc(db, COLLECTIONS.USERS, targetUid);
    await updateDoc(docRef, {
      friendRequestsReceivedUids: arrayUnion(authUid),
    });
    setLoading(false);
  };

  return { sendFriendRequest, isLoading };
};

export const useFriendRequestUsers = (
  friendRequestsReceivedUids?: string[]
) => {
  const q = query(
    collection(db, COLLECTIONS.USERS),
    where("id", "in", friendRequestsReceivedUids)
  );
  const [users, isLoading, error] = useCollectionData(q);
  if (!friendRequestsReceivedUids || friendRequestsReceivedUids.length === 0) {
    return { users: [], isloading: false };
  }
  if (error) throw error;
  return { users: <UserType[]>users, isLoading };
};
