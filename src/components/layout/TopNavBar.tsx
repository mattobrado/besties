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
import { useAuth } from "src/hooks";
import { GenericNavBarItem } from "src/components/layout";
import { NUM_ITEMS_OUT_OF_HAMBURGER } from "src/lib";
import { useContext } from "react";
import { ContentContext } from "src/context";

const TopNavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authUser } = useAuth();
  const content = useContext(ContentContext);
  const NAV_BAR_ITEMS = content.navBar.items;

  const itemsOutOfHamburger = NAV_BAR_ITEMS.slice(
    0,
    NUM_ITEMS_OUT_OF_HAMBURGER
  );

  return (
    <Flex
      bg="pink.500"
      h={12}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {itemsOutOfHamburger.map((item) => (
        <GenericNavBarItem {...item} />
      ))}
      <>
        <Button
          onClick={onOpen}
          variant="ghost"
          p={3}
          aria-label="Toggle navigation"
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />}
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg={"black"} w={"full"}>
            <DrawerCloseButton size={"lg"} p={4} />
            <Box h={12} />
            <DrawerBody py={4}>
              {NAV_BAR_ITEMS?.map((item) => {
                if (item.isForAuthorizedUsersOnly && !authUser) {
                  return;
                }
                return (
                  <Center key={item.label} py={4}>
                    <GenericNavBarItem {...item} onClick={onClose} />
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
