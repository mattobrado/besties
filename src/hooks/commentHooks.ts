import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  increment,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { COLLECTIONS, db, type PostType } from "src/lib";

export const useComments = (postID?: string) => {
  const q = query(
    collection(db, COLLECTIONS.POSTS),
    where("parentPostId", "==", postID),
    orderBy("likeCount", "desc")
  );
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments: <PostType[]>comments, isLoading };
};

export const removeComment = async ({
  parentPostId,
  commentId,
}: {
  parentPostId: string;
  commentId: string;
}) => {
  const docRef = doc(db, COLLECTIONS.POSTS, parentPostId);
  await updateDoc(docRef, {
    commentIds: arrayRemove(commentId),
    commentCount: increment(-1),
  });
};
export const addComment = async ({
  parentPostId,
  commentId,
}: {
  parentPostId: string;
  commentId: string;
}) => {
  const docRef = doc(db, COLLECTIONS.POSTS, parentPostId);
  await updateDoc(docRef, {
    commentIds: arrayUnion(commentId),
    commentCount: increment(1),
  });
};
