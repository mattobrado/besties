import { BottomNavigation } from "chakra-ui-bottom-navigation";
import { useState } from "react";
import { CONTENT } from "../../lib/content";
import MyNavigationItem from "./MyNavigationItem";
import COLORS from "../../lib/colors";

export const BottomNavBar = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation bg={COLORS.nav} value={value} onChange={() => {}}>
      <MyNavigationItem>{CONTENT.homeEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.addEmoji}</MyNavigationItem>
      <MyNavigationItem>{CONTENT.searchEmoji}</MyNavigationItem>
    </BottomNavigation>
  );
};
