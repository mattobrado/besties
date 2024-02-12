import { createContext } from "react";
import THE_GENIUS_PROGRAM_CONFIG from "src/lib/config/theGeniusProgramConfig";

const ConfigContext = createContext(THE_GENIUS_PROGRAM_CONFIG);

export default ConfigContext;
