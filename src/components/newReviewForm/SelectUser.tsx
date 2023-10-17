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
import { Dispatch, SetStateAction } from "react";
import { UserType } from "../../lib/types";

export default function SelectUser({
  isOpen,
  onClose,
  setTargetUser,
}: {
  isOpen: boolean;
  onClose: () => void;
  setTargetUser?: Dispatch<SetStateAction<UserType | undefined>>;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={COLORS.BACKGROUND}>
        <ModalHeader>select user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Search setTargetUser={setTargetUser} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
