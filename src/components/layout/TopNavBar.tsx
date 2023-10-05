import {
  Box,
  Flex,
  Avatar,
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
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={9} />}
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
          </MenuList>
        </Menu>
        <HStack spacing={8} alignItems={"center"}>
          <Link as={ReactRouterLink} to={ROUTES.HOME}>
            <Text fontSize="5xl">{CONTENT.logo}</Text>
          </Link>
        </HStack>
        {user ? (
          <Menu>
            <MenuButton as={Button} rounded={"full"} variant={"link"}>
              <Avatar
                size={"lg"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                as={ReactRouterLink}
                to={`${ROUTES.PROTECTED}/${user.id}`}
              >
                {CONTENT.NAVBAR.goToProfile}
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={logout}>{CONTENT.NAVBAR.logOut}</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Spinner variant={"custom"} size={"lg"} />
        )}
      </Flex>
    </Box>
  );
};

export default TopNavBar;
