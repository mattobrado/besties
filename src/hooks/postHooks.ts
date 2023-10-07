import {
  setDoc,
  doc,
  query,
  collection,
  orderBy,
  where,
  updateDoc,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import { uuidv4 } from "@firebase/util";
import { PostType, ToggleLikeType } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { COLLECTIONS } from "../lib/constants";
import { useToast } from "@chakra-ui/react";

export const useAddPost = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addPost = async (review: Partial<PostType>) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, COLLECTIONS.POSTS, id), {
      ...review,
      id,
      date: Date.now(),
      likes: [],
    });
    setLoading(false);
    navigate(ROUTES.HOME);
  };

  return { addPost, isLoading };
};

export function useReview(id: string) {
  const q = doc(db, COLLECTIONS.POSTS, id);
  const [review, isLoading] = useDocumentData(q);

  return { review, isLoading };
}

export function usePosts(uid = null) {
  const q = uid
    ? query(
        collection(db, COLLECTIONS.POSTS),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, COLLECTIONS.POSTS), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  const _posts = posts as PostType[];
  return { posts: _posts, isLoading };
}

export const useToggleLike = ({ id, isLiked, uid }: ToggleLikeType) => {
  const [isLoading, setLoading] = useState(false);

  async function toggleLike() {
    setLoading(true);
    const docRef = doc(db, COLLECTIONS.POSTS, id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setLoading(false);
  }

  return { toggleLike, isLoading };
};

export const useDeleteReview = (id: string) => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function deletePost() {
    const res = window.confirm("Are you sure you want to delete this review?");

    if (res) {
      setLoading(true);

      // Delete review document
      await deleteDoc(doc(db, COLLECTIONS.POSTS, id));

      // Delete comments
      const q = query(collection(db, "comments"), where("reviewID", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

      toast({
        title: "Post deleted!",
        status: "info",
        isClosable: true,
        position: "top",
        duration: 5000,
      });

      setLoading(false);
    }
  }

  return { deletePost, isLoading };
};
