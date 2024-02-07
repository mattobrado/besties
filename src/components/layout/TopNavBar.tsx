import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { COLORS, HEX_COLORS } from "../../theme/colors";
import GenericNavBarItem from "./navBarItems/GenericNavBarItem";
import ConfigContext from "./ConfigProvider";
import { NUM_ITEMS_OUT_OF_HAMBURGER } from "../../lib/constants";

const TopNavBar = () => {
  const config = useContext(ConfigContext);

  const { navBarItems } = config;

  const itemsOutOfHamburger = navBarItems.slice(0, NUM_ITEMS_OUT_OF_HAMBURGER);
  const itemsInHamburger = navBarItems.slice(NUM_ITEMS_OUT_OF_HAMBURGER);

  return (
    <Flex
      style={{ backgroundColor: `${HEX_COLORS.THE_GENIUS_PROGRAM_PRIMARY}` }}
      h={12}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {itemsOutOfHamburger.map((item) => (
        <GenericNavBarItem
          label={item.label}
          to={item.to}
          key={item.label}
          // isLogout={item.isLogout}
        />
      ))}
      {/* <GridItem> */}
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={IconButton}
              aria-label={"open menu"}
              variant="ghost"
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />}
            </MenuButton>
            <MenuList bg={COLORS.BACKGROUND}>
              {itemsInHamburger?.map((item, index) => (
                <>
                  <GenericNavBarItem
                    label={item.label}
                    to={item.to}
                    // isLogout={item.isLogout}
                  />
                  {index === itemsInHamburger.length - 1 ? undefined : (
                    <MenuDivider />
                  )}
                </>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};

export default TopNavBar;
