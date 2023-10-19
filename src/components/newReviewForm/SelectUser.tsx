import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";
import { UserType } from "../../lib/types";
import Search from "../search/Search";
import { content } from "../../lib/content";
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
      <ModalContent bg={COLORS.BACKGROUND} shadow={COLORS.BACKGROUND}>
        <ModalBody mt={2} px={GLOBAL_PX}>
          <Search
            onClick={onClick}
            placeholderText={content.reviewForm.revieweeField}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
