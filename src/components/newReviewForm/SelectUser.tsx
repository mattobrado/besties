import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { Search } from "src/components/search";
import { GLOBAL_PX, type UserType } from "src/lib";

export default function SelectUser({
  isOpen,
  onClose,
  onClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onClick?: (user: UserType | undefined) => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody mt={2} px={GLOBAL_PX}>
          <Search onClick={onClick} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
