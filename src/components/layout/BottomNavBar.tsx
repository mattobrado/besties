import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationLabel,
} from "chakra-ui-bottom-navigation";
import { useState } from "react";
import { CONTENT } from "../../lib/content";

export const BottomNavBar = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation colorScheme="yellow" value={value} onChange={() => {}}>
      <BottomNavigationItem>
        {CONTENT.logo}
        <BottomNavigationLabel>{CONTENT.NAVBAR.home}</BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem>
        {CONTENT.heartEmoji}
        <BottomNavigationLabel>
          {CONTENT.NAVBAR.mostPopular}
        </BottomNavigationLabel>
      </BottomNavigationItem>

      <BottomNavigationItem>
        {CONTENT.starEmoji}
        <BottomNavigationLabel>
          {CONTENT.NAVBAR.highestRated}
        </BottomNavigationLabel>
      </BottomNavigationItem>
    </BottomNavigation>
  );
};
