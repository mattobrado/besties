import { ROUTES } from "../../lib/constants";
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
  useColorModeValue,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useLogout } from "../../hooks/useAuth";
import { auth } from "../../lib/firebase";
import { Link as ReactRouterLink } from "react-router-dom";
import { CONTENT } from "../../lib/content";
import { COLORS } from "../../lib/theme";

const links = [
  {
    label: CONTENT.NAVBAR.seeAllUsers,
    to: ROUTES.USERS,
  },
  {
    label: CONTENT.NAVBAR.mostPopular,
    to: ROUTES.HOME,
  },
  {
    label: CONTENT.NAVBAR.highestRated,
    to: ROUTES.HOME,
  },
];

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();

  return (
    <Box bg={COLORS.nav} px={4}>
      <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          size={"lg"}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Link as={ReactRouterLink} to={ROUTES.HOME}>
            <Text fontSize="5xl">{CONTENT.logo}</Text>
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.label} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          {auth.currentUser && (
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"lg"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>{CONTENT.NAVBAR.goToProfile}</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>{CONTENT.NAVBAR.logOut}</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link) => (
              <NavLink key={link.label} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

const NavLink = (props: { children: React.ReactNode; to: string }) => {
  const { children } = props;
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <Link as={ReactRouterLink} to={props.to}>
        {children}
      </Link>
    </Box>
  );
};

export default TopNavBar;
