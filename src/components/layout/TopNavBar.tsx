import {
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  Link,
  SkeletonCircle,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useAuth, useLogout } from "../../hooks/authHooks";
import { Link as ReactRouterLink } from "react-router-dom";
import { content } from "../../lib/content";
import { ROUTES } from "../../lib/routes";
import Avatar from "../profile/Avatar";

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();
  const { user } = useAuth();

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
          {/* <MenuItem as={ReactRouterLink} to={ROUTES.USERS}>
            {content.navBar.seeAllUsers}
          </MenuItem> */}
          {/* <MenuDivider /> */}
          <MenuItem as={ReactRouterLink} to={ROUTES.HOME}>
            {content.navBar.mostPopular}
          </MenuItem>
          <MenuDivider />
          <MenuItem as={ReactRouterLink} to={ROUTES.HOME}>
            {content.navBar.highestRated}
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={logout}>{content.navBar.logOut}</MenuItem>
        </MenuList>
      </Menu>
      <Link as={ReactRouterLink} to={ROUTES.HOME}>
        <Text fontSize="5xl">{content.logo}</Text>
      </Link>
      {user ? (
        <Avatar user={user} avatarProps={{ size }} />
      ) : (
        <SkeletonCircle variant="custom" size={"12"} />
      )}
    </Flex>
  );
};

export default TopNavBar;
