import { createContext } from "react";
import { THE_GENIUS_PROGRAM_CONTENT as defaultContent } from "../lib/config";

const ContentContext = createContext(defaultContent);

export default ContentContext;
