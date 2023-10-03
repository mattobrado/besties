import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { CONTENT } from "../../lib/content";
import MyNavigationItem from "./MyNavigationItem";
import { colors } from "../../lib/customTheme";

export const BottomNavBar = () => {
  return (
    <BottomNavigation bg={colors.backgroundColor} value={0} onChange={() => {}}>
      <MyNavigationItem>{CONTENT.homeEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.addEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.searchEmoji}</MyNavigationItem>
    </BottomNavigation>
  );
};
