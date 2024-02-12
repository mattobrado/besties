import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { TfiWrite, TfiHome, TfiSearch, TfiBell } from "react-icons/tfi";
import { MyNavigationItem } from "src/components/layout";
import { ROUTES } from "src/lib";

const BottomNavBar = () => {
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
      <MyNavigationItem icon={<TfiSearch />} to={ROUTES.MEMBERS} />
    </BottomNavigation>
  );
};

export default BottomNavBar;
