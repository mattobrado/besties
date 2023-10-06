import {
  setDoc,
  doc,
  query,
  collection,
  orderBy,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import { uuidv4 } from "@firebase/util";
import { ReviewType } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export const useAddReview = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addReview = async (review: Partial<ReviewType>) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "reviews", id), {
      ...review,
      id,
      date: Date.now(),
      likes: [],
    });
    setLoading(false);
    navigate(ROUTES.HOME);
  };

  return { addReview, isLoading };
};

export function useReview(id: string) {
  const q = doc(db, "reviews", id);
  const [review, isLoading] = useDocumentData(q);

  return { review, isLoading };
}

export function useReviews(uid = null) {
  const q = uid
    ? query(
        collection(db, "reviews"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "reviews"), orderBy("date", "desc"));
  const [reviews, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { reviews, isLoading };
}
