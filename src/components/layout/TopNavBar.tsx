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
import { ROUTES } from "../../lib/routes";
import Avatar from "../profile/Avatar";
import { useContext } from "react";
import AuthUserContext from "./AuthUserContext";
import ContentContext from "./ContentProvider";
import { COLORS } from "../../theme/colors";

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();
  const authUser = useContext(AuthUserContext);
  const content = useContext(ContentContext);

  const size = "md";

  return (
    <Flex pb={4} h={20} alignItems={"center"} justifyContent={"space-between"}>
      <Avatar user={authUser} avatarProps={{ size }} />
      <Link as={ReactRouterLink} to={ROUTES.HOME}>
        <Text fontSize="5xl">{content.logo}</Text>
      </Link>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={IconButton}
              aria-label={"open menu"}
              variant="customGhost"
            >
              {isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={10} />}
            </MenuButton>
            <MenuList bg={COLORS.BACKGROUND}>
              <MenuItem as={ReactRouterLink} to={ROUTES.HOME}>
                {content.navBar.mostPopular}
              </MenuItem>
              <MenuDivider />
              <MenuItem as={ReactRouterLink} to={ROUTES.HIGHEST_RATED}>
                {content.navBar.highestRated}
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={logout}>{content.navBar.logOut}</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};

export default TopNavBar;
