import { BottomNavigation } from "chakra-ui-bottom-navigation";
import MyNavigationItem from "./MyNavigationItem";
import { TfiWrite, TfiHome, TfiSearch, TfiBell } from "react-icons/tfi";
import { ROUTES } from "../../lib/constants";

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
      />
      <MyNavigationItem icon={<TfiWrite />} to={ROUTES.ADD_REVIEW} />
      <MyNavigationItem icon={<TfiBell />} to={ROUTES.NOTIFICATIONS} />
      <MyNavigationItem icon={<TfiSearch />} to={ROUTES.SEARCH} />
    </BottomNavigation>
  );
};
