import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { CONTENT } from "../../lib/content";
import MyNavigationItem from "./MyNavigationItem";
import { colors } from "../../theme/customTheme";

export const BottomNavBar = () => {
  return (
    <BottomNavigation bg={colors.bg} value={0} onChange={() => {}}>
      <MyNavigationItem>{CONTENT.homeEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.addEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.searchEmoji}</MyNavigationItem>
    </BottomNavigation>
  );
};
