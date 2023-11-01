import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { COLLECTIONS, TOAST_PROPS } from "../lib/constants";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  setDoc,
  doc,
  getDoc,
  DocumentData,
  where,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { UserType } from "../lib/types";
import { content } from "../lib/content";
import { ROUTES } from "../lib/routes";

export const useAuth = (): {
  authUser?: UserType;
  isLoading: boolean;
  error?: Error;
} => {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (authUser_: User) => {
      setLoading(true);
      const ref = doc(db, COLLECTIONS.USERS, authUser_.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    };

    if (!authLoading) {
      if (authUser) fetchData(authUser);
      else setLoading(false); // Not signed in
    }
  }, [authLoading]);

  return { authUser: <UserType>user, isLoading, error };
};

export const useLogout = () => {
  const [signOut, isLoading] = useSignOut(auth);
  const navigate = useNavigate();

  const logout = async () => {
    if (await signOut()) {
      navigate(ROUTES.ROOT);
    }
  };

  return { logout, isLoading };
};

export const useSignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const signIn = async ({
    oneTimePassword,
    phoneNumber,
  }: {
    oneTimePassword: string;
    phoneNumber: string;
  }) => {
    setLoading(true);
    try {
      const { user } = await (window as any).confirmationResult.confirm(
        oneTimePassword
      );
      const uid = user.uid;
      const q = query(collection(db, "users"), where("id", "==", uid));
      const querySnapshot = await getDocs(q);
      const userExists = querySnapshot.size > 0;
      if (userExists) navigate(ROUTES.HOME);
      else {
        await setDoc(doc(db, COLLECTIONS.USERS, uid), {
          avatar: "",
          date: Date.now(),
          id: uid,
          ratingCount: 0,
          popularity: 0,
          friendUids: [],
          phoneNumber,
        });
        navigate(`${ROUTES.EDIT_PROFILE}/${uid}`);
      }
    } catch (error: any) {
      toast({
        title: content.auth.signupFailed,
        description: error?.message,
        status: "error",
        ...TOAST_PROPS,
      });
    } finally {
      setLoading(false);
    }
  };

  return { signIn, isLoading };
};
