import { BottomNavigation } from "chakra-ui-bottom-navigation";
import MyNavigationItem from "./MyNavigationItem";
import { ROUTES } from "../../lib/routes";
import { TfiWrite, TfiHome, TfiSearch } from "react-icons/tfi";

export const BottomNavBar = () => {
  return (
    <BottomNavigation
      shadow={"transparent"}
      bg={"transparent"}
      value={0}
      onChange={() => {}}
    >
      <MyNavigationItem
        icon={<TfiHome />}
        to={ROUTES.HOME}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      ></MyNavigationItem>
      <MyNavigationItem
        icon={<TfiWrite />}
        to={ROUTES.ADD_REVIEW}
      ></MyNavigationItem>
      <MyNavigationItem
        icon={<TfiSearch />}
        to={ROUTES.SEARCH}
      ></MyNavigationItem>
    </BottomNavigation>
  );
};
