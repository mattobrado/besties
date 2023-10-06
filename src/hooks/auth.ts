import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";
import { TOAST_PROPS } from "../lib/constants";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setDoc, doc, getDoc, DocumentData } from "firebase/firestore";
import { LoginType, SignupType as SignupType } from "../lib/types";
import isUsernameDuplicated from "./utils/isUserNameDuplicated";
import { CONTENT } from "../lib/content";
import { ROUTES } from "../lib/routes";

export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth);
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<DocumentData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async (authUser_: User) => {
      setLoading(true);
      const ref = doc(db, "users", authUser_.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    };

    if (!authLoading) {
      if (authUser) fetchData(authUser);
      else setLoading(false); // Not signed in
    }
  }, [authLoading]);

  return { user, isLoading, error };
}
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
        title: "logging in failed",
        status: "error",
        description: error?.message,
        ...TOAST_PROPS,
      });
    } finally {
      setLoading(false);
    }
  };
  return { login, isLoading };
};

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const toast = useToast();
  const navigate = useNavigate();

  async function logout() {
    if (await signOut()) {
      navigate(ROUTES.LOGIN);
    } // else: show error [signOut() returns false if failed]
  }

  return { logout, isLoading };
}

export function useSignup() {
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const signup = async ({
    email,
    fullName,
    password,
    redirectTo = ROUTES.HOME,
    username,
  }: SignupType) => {
    setLoading(true);

    const usernameExists = await isUsernameDuplicated(username);

    if (usernameExists) {
      toast({
        title: CONTENT.AUTH.usernameTaken,
        status: "error",
        ...TOAST_PROPS,
      });
      setLoading(false);
    } else {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await setDoc(doc(db, "users", response.user.uid), {
          avatar: "",
          date: Date.now(),
          fullName: fullName,
          id: response.user.uid,
          username: username.toLowerCase(),
        });

        toast({
          title: CONTENT.AUTH.signupSuccess,
          description: CONTENT.AUTH.loginSuccess,
          status: "success",
          ...TOAST_PROPS,
        });

        navigate(redirectTo);
      } catch (error: any) {
        toast({
          title: CONTENT.AUTH.signupFailed,
          description: error?.message,
          status: "error",
          ...TOAST_PROPS,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return { signup, isLoading };
}
