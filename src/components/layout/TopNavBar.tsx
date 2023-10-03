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
import { Link as ReactRouterLink } from "react-router-dom";
import { CONTENT } from "../../lib/content";

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();

  return (
    <Box px={4}>
      <Flex h={24} alignItems={"center"} justifyContent={"space-between"}>
        <Menu>
          <MenuButton as={Button} variant={"link"} transition="all 0.2s">
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={9} />}
              aria-label={"open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              variant="customGhost"
              size={"lg"}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NavLink to={ROUTES.USERS}>{CONTENT.NAVBAR.seeAllUsers}</NavLink>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <NavLink to={ROUTES.HOME}>{CONTENT.NAVBAR.mostPopular}</NavLink>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <NavLink to={ROUTES.HOME}>{CONTENT.NAVBAR.highestRated}</NavLink>
            </MenuItem>
          </MenuList>
        </Menu>

        <HStack spacing={8} alignItems={"center"}>
          <Link as={ReactRouterLink} to={ROUTES.HOME}>
            <Text fontSize="5xl">{CONTENT.logo}</Text>
          </Link>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
              transition="all 0.2s"
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
        </Flex>
      </Flex>
    </Box>
  );
};

const NavLink = (props: { children: React.ReactNode; to: string }) => {
  const { children } = props;
  return (
    <Box px={2} py={1} rounded={"md"}>
      <Link as={ReactRouterLink} to={props.to}>
        {children}
      </Link>
    </Box>
  );
};

export default TopNavBar;
