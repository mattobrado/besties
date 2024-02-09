import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { UserType } from "../../lib/types";
import Search from "../search/Search";
import { bestiesContent } from "../../lib/content/bestiesContent";
import { GLOBAL_PX } from "../../lib/constants";

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
          <Search
            onClick={onClick}
            placeholderText={bestiesContent.reviewForm.revieweeField}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
