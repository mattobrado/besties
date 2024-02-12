import { createContext } from "react";
import { THE_GENIUS_PROGRAM_CONTENT as defaultContent } from "src/lib/config";

const ContentContext = createContext(defaultContent);

export default ContentContext;
