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

export const usePost = (id?: string) => {
  if (!id) return { post: undefined, isLoading: true };
  const q = doc(db, COLLECTIONS.POSTS, id);
  const [post, isLoading] = useDocumentData(q);

  return { post: <PostType | undefined>post, isLoading };
};

export const usePosts = (uid = null) => {
  const q = uid
    ? query(
        collection(db, COLLECTIONS.POSTS),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, COLLECTIONS.POSTS), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts: <PostType[]>posts, isLoading };
};

export const useToggleLike = ({ id, isLiked, uid }: ToggleLikeType) => {
  const [isLoading, setLoading] = useState(false);

  const toggleLike = async () => {
    setLoading(true);
    const docRef = doc(db, COLLECTIONS.POSTS, id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    setLoading(false);
  };

  return { toggleLike, isLoading };
};

export const useDeletePost = (id: string) => {
  const [isLoading, setLoading] = useState(false);

  async function deletePost() {
    setLoading(true);

    // Delete post document
    await deleteDoc(doc(db, COLLECTIONS.POSTS, id));

    // Delete comments
    const q = query(
      collection(db, COLLECTIONS.COMMENTS),
      where("postID", "==", id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

    setLoading(false);
  }

  return { deletePost, isLoading };
};
