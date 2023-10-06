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
      ></MyNavigationItem>
      <MyNavigationItem
        icon={CONTENT.addEmoji}
        to={ROUTES.NEW_REVIEW}
      ></MyNavigationItem>
      <MyNavigationItem icon={CONTENT.searchEmoji} to={""}></MyNavigationItem>
    </BottomNavigation>
  );
};
