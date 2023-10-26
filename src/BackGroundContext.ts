import { createContext } from "react";

const BackgroundContext = createContext(
  undefined as unknown as (color?: string) => void
);

export default BackgroundContext;
