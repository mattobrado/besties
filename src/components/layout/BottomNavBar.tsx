import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { content } from "../../lib/content";
import MyNavigationItem from "./MyNavigationItem";
import { ROUTES } from "../../lib/routes";

export const BottomNavBar = () => {
  return (
    <BottomNavigation bg={"transparent"} value={0} onChange={() => {}}>
      <MyNavigationItem
        icon={content.homeEmoji}
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
        icon={content.addEmoji}
        to={ROUTES.ADD_REVIEW}
      ></MyNavigationItem>
      <MyNavigationItem icon={content.searchEmoji} to={""}></MyNavigationItem>
    </BottomNavigation>
  );
};
