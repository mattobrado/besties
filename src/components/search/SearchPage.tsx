import { useContext, useEffect } from "react";
import BackgroundContext from "../../BackGroundContext";
import Search from "./Search";

const SearchPage = () => {
  const setBackground = useContext(BackgroundContext);
  useEffect(() => setBackground({}), []);

  return <Search />;
};

export default SearchPage;
