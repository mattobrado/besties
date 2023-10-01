import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { ROUTES, TOAST_DURATION } from "../constants/constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

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
  }: {
    email: string;
    password: string;
    redirectTo?: string;
  }) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "you are signed in",
        status: "success",
        isClosable: true,
        position: "top",
        duration: TOAST_DURATION,
      });
      navigate(redirectTo);
    } catch (error: any) {
      toast({
        title: "logging in failed",
        status: "error",
        description: error?.message,
        isClosable: true,
        position: "top",
        duration: TOAST_DURATION,
      });
    } finally {
      setLoading(false);
    }
  };
  return { login, isLoading };
};
