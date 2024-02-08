import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Box,
  Center,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import GenericNavBarItem from "./navBarItems/GenericNavBarItem";
import ConfigContext from "./ConfigProvider";
import { NUM_ITEMS_OUT_OF_HAMBURGER, ROUTES } from "../../lib/constants";
import { useAuth } from "../../hooks/authHooks";

const TopNavBar = () => {
  const config = useContext(ConfigContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authUser } = useAuth();

  const { navBarItems } = config;

  const itemsOutOfHamburger = navBarItems.slice(0, NUM_ITEMS_OUT_OF_HAMBURGER);

  return (
    <Flex
      bg="pink.500"
      h={12}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {itemsOutOfHamburger.map((item) => (
        <GenericNavBarItem
          label={item.label}
          to={item.to}
          key={item.label}
          isLogout={item.isLogout}
          state={item.state}
        />
      ))}
      <>
        <Button
          // ref={buttonRef}
          onClick={onOpen}
          variant="ghost"
          p={3}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />}
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          // finalFocusRef={buttonRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"black"} w={"full"}>
            <DrawerCloseButton size={"lg"} p={4} />
            <Box h={12} />
            <DrawerBody py={4}>
              {navBarItems?.map((item) => {
                if (item.isLogout && !authUser) {
                  return;
                }
                if (item.to === ROUTES.LOGIN && authUser) {
                  return;
                }
                return (
                  <Center key={item.label} py={4}>
                    <GenericNavBarItem
                      label={item.label}
                      to={item.to}
                      isLogout={item.isLogout}
                      state={item.state}
                      color="white"
                      onClick={onClose}
                    />
                  </Center>
                );
              })}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
};

export default TopNavBar;
