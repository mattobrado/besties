import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import { uuidv4 } from "@firebase/util";
import { ReviewType } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/routes";

export const useAddReview = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addReview = async (review: ReviewType) => {
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
