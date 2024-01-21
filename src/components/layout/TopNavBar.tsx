import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useLogout } from "../../hooks/authHooks";
import { Link as ReactRouterLink } from "react-router-dom";
import { bestiesContent } from "../../lib/content/bestiesContent";
import { ROUTES } from "../../lib/routes";
import Avatar from "../profile/Avatar";
import { useContext } from "react";
import AuthUserContext from "./AuthUserContext";

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();
  const authUser = useContext(AuthUserContext);

  const size = "md";

  return (
    <Flex pb={4} h={20} alignItems={"center"} justifyContent={"space-between"}>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={10} />}
          aria-label={"open menu"}
          onClick={isOpen ? onClose : onOpen}
          variant="customGhost"
          size={size}
        ></MenuButton>
        <MenuList>
          <MenuItem as={ReactRouterLink} to={ROUTES.HOME}>
            {bestiesContent.navBar.mostPopular}
          </MenuItem>
          <MenuDivider />
          <MenuItem as={ReactRouterLink} to={ROUTES.HIGHEST_RATED}>
            {bestiesContent.navBar.highestRated}
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={logout}>{bestiesContent.navBar.logOut}</MenuItem>
        </MenuList>
      </Menu>
      <Link as={ReactRouterLink} to={ROUTES.HOME}>
        <Text fontSize="5xl">{bestiesContent.logo}</Text>
      </Link>
      <Avatar user={authUser} avatarProps={{ size }} />
    </Flex>
  );
};

export default TopNavBar;
