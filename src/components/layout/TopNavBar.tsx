import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useAuth, useLogout } from "../../hooks/useAuth";
import { Link as ReactRouterLink } from "react-router-dom";
import { CONTENT } from "../../lib/content";
import { ROUTES } from "../../lib/routes";
import Avatar from "../profile/Avatar";

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();
  const { user } = useAuth();

  return (
    <Box px={4}>
      <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={12} />}
            aria-label={"open menu"}
            onClick={isOpen ? onClose : onOpen}
            variant="customGhost"
            size={"lg"}
          ></MenuButton>
          <MenuList>
            <MenuItem as={ReactRouterLink} to={ROUTES.USERS}>
              {CONTENT.NAVBAR.seeAllUsers}
            </MenuItem>
            <MenuDivider />
            <MenuItem as={ReactRouterLink} to={ROUTES.HOME}>
              {CONTENT.NAVBAR.mostPopular}
            </MenuItem>
            <MenuDivider />
            <MenuItem as={ReactRouterLink} to={ROUTES.HOME}>
              {CONTENT.NAVBAR.highestRated}
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={logout}>{CONTENT.NAVBAR.logOut}</MenuItem>
          </MenuList>
        </Menu>
        <HStack spacing={8} alignItems={"center"}>
          <Link as={ReactRouterLink} to={ROUTES.HOME}>
            <Text fontSize="5xl">{CONTENT.logo}</Text>
          </Link>
        </HStack>
        {user ? (
          <Avatar user={user} />
        ) : (
          <Spinner variant={"custom"} size={"lg"} />
        )}
      </Flex>
    </Box>
  );
};

export default TopNavBar;
