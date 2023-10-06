import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { CONTENT } from "../../lib/content";
import MyNavigationItem from "./MyNavigationItem";
import { ROUTES } from "../../lib/routes";

export const BottomNavBar = () => {
  return (
    <BottomNavigation bg={"transparent"} value={0} onChange={() => {}}>
      <MyNavigationItem
        icon={CONTENT.homeEmoji}
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
        icon={CONTENT.addEmoji}
        to={ROUTES.NEW_REVIEW}
      ></MyNavigationItem>
      <MyNavigationItem icon={CONTENT.searchEmoji} to={""}></MyNavigationItem>
    </BottomNavigation>
  );
};
