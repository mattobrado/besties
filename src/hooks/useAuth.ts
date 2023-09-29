import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useState } from "react";

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

  const login = async ({ email, password, rediretTo }) => {};

  return { login, isLoading };
};
