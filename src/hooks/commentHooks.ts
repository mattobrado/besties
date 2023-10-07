import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import { COLLECTIONS } from "../lib/constants";

export const useAddComment = ({
  postID,
  uid,
}: {
  postID: string;
  uid: string;
}) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const addComment = async (text?: string) => {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, COLLECTIONS.COMMENTS, id);
    await setDoc(docRef, { text, id, postID, date, uid });

    toast({
      title: "Comment added!",
      status: "success",
      isClosable: true,
      position: "top",
      duration: 5000,
    });

    setLoading(false);
  };

  return { addComment, isLoading };
};

export const useComments = (postID: string) => {
  const q = query(
    collection(db, COLLECTIONS.COMMENTS),
    where("postID", "==", postID),
    orderBy("date", "asc")
  );
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments, isLoading };
};

export const useDeleteComment = (id: string) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  const deleteComment = async () => {
    const res = window.confirm("Are you sure you want to delete this comment?");

    if (res) {
      setLoading(true);
      const docRef = doc(db, COLLECTIONS.COMMENTS, id);
      await deleteDoc(docRef);
      toast({
        title: "Comment deleted!",
        status: "info",
        isClosable: true,
        position: "top",
        duration: 5000,
      });
      setLoading(false);
    }
  };

  return { deleteComment, isLoading };
};
