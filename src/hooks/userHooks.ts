import { doc, query, updateDoc, increment, getDoc } from "firebase/firestore";
import { db, storage } from "../lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { UserType } from "../lib/types";
import { COLLECTIONS } from "../lib/constants";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import getNewRating from "../utils/getNewRating";

export const useUser = (
  id?: string
): { user?: UserType; isLoading: boolean } => {
  if (!id) return { user: undefined, isLoading: false };
  const q = query(doc(db, COLLECTIONS.USERS, id) as any);
  const [user, isLoading] = useDocumentData(q as any);
  return { user: <UserType>user, isLoading };
};

export const useUpdateAvatar = (uid: string) => {
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  const updateAvatar = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      return;
    }

    setLoading(true);

    const fileRef = ref(storage, "avatars/" + uid);
    await uploadBytes(fileRef, file);

    const avatarURL = await getDownloadURL(fileRef);

    const docRef = doc(db, COLLECTIONS.USERS, uid);
    await updateDoc(docRef, { avatar: avatarURL });

    setLoading(false);

    navigate(0);
  };

  return {
    setFile,
    updateAvatar,
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
