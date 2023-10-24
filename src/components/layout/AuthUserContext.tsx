import { createContext } from "react";
import { UserType } from "../../lib/types";

const AuthUserContext = createContext<UserType>({
  id: "",
  date: 0,
  ratingCount: 0,
  popularity: 0,
  friendUids: [],
  favorites: {
    color: undefined,
    food: undefined,
    animal: undefined,
    song: undefined,
    movie: undefined,
  },
  phoneNumber: "",
});

export default AuthUserContext;
