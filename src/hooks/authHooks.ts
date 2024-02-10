import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "src/lib/firebase";
import { useContext, useEffect, useState } from "react";
import { COLLECTIONS, ROUTES, TOAST_PROPS } from "src/lib/constants";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setDoc, doc, getDoc, DocumentData } from "firebase/firestore";
import type UserType from "src/lib/types/UserType";
import { ContentContext } from "src/context";

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
  }, [authLoading, authUser]);

  return { authUser: <UserType>user, isLoading, error };
};

export const useLogout = () => {
  const [signOut, isLoading] = useSignOut(auth);
  const navigate = useNavigate();

  const logout = async () => {
    if (await signOut()) {
      navigate(ROUTES.HOME);
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  };

  return { logout, isLoading };
};

export const useSignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const content = useContext(ContentContext);

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
      const docRef = doc(db, COLLECTIONS.USERS, uid);
      const docSnap = await getDoc(docRef);
      const userFormDB = docSnap.data() as UserType;
      if (!user) {
        await setDoc(docRef, {
          avatar: "",
          date: Date.now(),
          id: uid,
          ratingCount: 0,
          popularity: 0,
          friendUids: [],
          phoneNumber,
        });
      }
      if (userFormDB.isMember) navigate(ROUTES.SEARCH);
      if (userFormDB.isApplicationSubmitted) navigate(ROUTES.APPLICANT);
      navigate(ROUTES.REGISTRATION);
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
