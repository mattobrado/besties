import { createContext } from "react";
import { bestiesContent } from "../../lib/content/bestiesContent";

const ContentContext = createContext(bestiesContent);

export default ContentContext;
