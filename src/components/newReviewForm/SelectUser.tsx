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

export default function SelectUser({
  isOpen,
  onClose,
  setTargetUid,
}: {
  isOpen: boolean;
  onClose: () => void;
  setTargetUid: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={COLORS.BACKGROUND}>
        <ModalHeader>select user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Search setTargetUid={setTargetUid} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
