import { useToast } from "@chakra-ui/react";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";

export const useAddPost = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();

  async function addPost(post) {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
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
  }

  return { addPost, isLoading };
};
