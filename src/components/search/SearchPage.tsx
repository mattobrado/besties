import { useContext } from "react";
import BackgroundContext from "../../BackGroundContext";
import Search from "./Search";

const SearchPage = () => {
  const setBackground = useContext(BackgroundContext);
  setBackground({});
  return <Search />;
};

export default SearchPage;
