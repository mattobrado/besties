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
  increment,
  or,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import { uuidv4 } from "@firebase/util";
import { PostType, ToggleLikeType } from "../lib/types";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { COLLECTIONS } from "../lib/constants";
import { addComment, removeComment } from "./commentHooks";
import { addRating, removeRating } from "./userHooks";

export const useAddPost = () => {
  const [isLoading, setLoading] = useState(false);

  const addPost = async (post: Partial<PostType>) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, COLLECTIONS.POSTS, id), {
      ...post,
      id,
      date: Date.now(),
      likeUids: [],
      likeCount: 0,
      commentIds: [],
      commentCount: 0,
    });
    const { isReview, rating, isComment, targetUid, parentPostId } = post;
    if (isReview && rating !== undefined && targetUid)
      addRating({ uid: targetUid, newRating: rating });
    if (isComment && parentPostId) {
      addComment({ parentPostId: parentPostId, commentId: id });
    }
    setLoading(false);
  };

  return { addPost, isLoading };
};

export const usePost = (id?: string) => {
  if (!id) return { post: undefined, isLoading: true };
  const q = doc(db, COLLECTIONS.POSTS, id);
  const [post, isLoading] = useDocumentData(q);

  return { post: <PostType | undefined>post, isLoading };
};

export const usePosts = () => {
  const q = query(collection(db, COLLECTIONS.POSTS), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);
  if (error) throw error;
  return { posts: <PostType[]>posts, isLoading };
};

export const usePostsForProfile = (uid: string) => {
  const q = query(
    collection(db, COLLECTIONS.POSTS),
    or(where("posterUid", "==", uid), where("targetUid", "==", uid)),
    orderBy("date", "desc")
  );
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
      likeUids: isLiked ? arrayRemove(uid) : arrayUnion(uid),
      likeCount: isLiked ? increment(-1) : increment(1),
    });
    setLoading(false);
  };

  return { toggleLike, isLoading };
};

export const useDeletePost = (post: PostType) => {
  const {
    id,
    isComment,
    parentPostId,
    commentIds,
    isReview,
    rating,
    targetUid,
  } = post;
  const [isLoading, setLoading] = useState(false);

  const deletePost = async () => {
    setLoading(true);
    if (isComment && parentPostId) {
      removeComment({ parentPostId, commentId: id });
    }
    if (isReview && rating !== undefined && targetUid) {
      await removeRating({ uid: targetUid, ratingToRemove: rating });
    }

    commentIds.forEach(
      async (commentId) =>
        await deleteDoc(doc(db, COLLECTIONS.POSTS, commentId))
    );

    // Delete post document
    await deleteDoc(doc(db, COLLECTIONS.POSTS, id));

    setLoading(false);
  };

  return { deletePost, isLoading };
};
