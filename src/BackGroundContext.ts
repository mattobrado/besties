import { createContext } from "react";
import { UserType } from "./lib/types";

const BackgroundContext = createContext(
  undefined as unknown as ({ user }: { user?: UserType | undefined }) => void
);

export default BackgroundContext;
