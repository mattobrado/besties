import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { COLLECTIONS, TOAST_PROPS } from "../lib/constants";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setDoc, doc, getDoc, DocumentData } from "firebase/firestore";
import { LoginType, SignupType as SignupType, UserType } from "../lib/types";
import { content } from "../lib/content";
import { ROUTES } from "../lib/routes";

export const useAuth = (): {
  user?: UserType;
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

  return { user: <UserType>user, isLoading, error };
};
export const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const login = async ({
    email,
    password,
    redirectTo = ROUTES.HOME,
  }: LoginType) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(redirectTo);
    } catch (error: any) {
      toast({
        title: content.auth.loginFailure,
        description: error?.message,
        ...TOAST_PROPS,
      });
    } finally {
      setLoading(false);
    }
  };
  return { login, isLoading };
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

export const useSignup = () => {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const signup = async ({
    email,
    fullName,
    password,
    redirectTo = ROUTES.HOME,
  }: SignupType) => {
    setLoading(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, COLLECTIONS.USERS, response.user.uid), {
        avatar: "",
        date: Date.now(),
        fullName: fullName,
        id: response.user.uid,
        ratingCount: 0,
        popularity: 0,
        friendUids: [],
      });

      navigate(redirectTo);
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

  return { signup, isLoading };
};
