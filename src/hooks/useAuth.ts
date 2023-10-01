import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { CONTENT, ROUTES, TOAST_PROPS } from "../constants/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setDoc, doc } from "firebase/firestore";
import { LoginType, SignupType as SignupType } from "../types/types";
import isUsernameDuplicated from "./utils/isUserNameDuplicated";

export const useAuth = () => {
  const [user, isLoading, isError] = useAuthState(auth);
  return {
    user,
    isLoading,
    isError,
  };
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
      toast({
        title: "you are signed in",
        status: "success",
        ...TOAST_PROPS,
      });
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
      toast({
        title: CONTENT.logOutSuccess,
        status: "success",
        ...TOAST_PROPS,
      });
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
    username,
    email,
    password,
    redirectTo = ROUTES.HOME,
  }: SignupType) => {
    setLoading(true);

    const usernameExists = await isUsernameDuplicated(username);

    if (usernameExists) {
      toast({
        title: CONTENT.usernameTaken,
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
          id: response.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          date: Date.now(),
        });

        toast({
          title: CONTENT.signupSuccess,
          description: CONTENT.loginSuccess,
          status: "success",
          ...TOAST_PROPS,
        });

        navigate(redirectTo);
      } catch (error: any) {
        toast({
          title: CONTENT.signupFailed,
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
