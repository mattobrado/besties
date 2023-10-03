import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { CONTENT } from "../../lib/content";
import MyNavigationItem from "./MyNavigationItem";

export const BottomNavBar = () => {
  return (
    <BottomNavigation bg={"transparent"} value={0} onChange={() => {}}>
      <MyNavigationItem>{CONTENT.homeEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.addEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.searchEmoji}</MyNavigationItem>
    </BottomNavigation>
  );
};
