import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";
import Search from "../search/search";

export default function SelectUser({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={COLORS.BACKGROUND}>
        <ModalHeader>select user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Search />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
