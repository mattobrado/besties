import { collection, orderBy, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import { COLLECTIONS } from "../lib/constants";
import { PostType } from "../lib/types";

export const useComments = (postID?: string) => {
  const q = query(
    collection(db, COLLECTIONS.POSTS),
    where("parentPostId", "==", postID),
    orderBy("likes", "desc")
  );
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments: <PostType[]>comments, isLoading };
};
