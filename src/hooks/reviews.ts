import { useToast } from "@chakra-ui/react";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import { uuidv4 } from "@firebase/util";
import { ReviewType } from "../lib/types";

export const useAddReview = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addReview = async (review: ReviewType) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "reviews", id), {
      ...review,
      id,
      date: Date.now(),
      likes: [],
    });
    toast({
      title: "Post added successfully!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });
    setLoading(false);
  };

  return { addReview, isLoading };
};
