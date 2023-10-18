import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";
import { Dispatch, SetStateAction } from "react";
import { UserType } from "../../lib/types";
import Search from "../search/Search";
import { content } from "../../lib/content";
import { GLOBAL_PX } from "../../lib/constants";

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
        <ModalBody mt={2} px={GLOBAL_PX}>
          <Search
            setTargetUser={setTargetUser}
            onClose={onClose}
            placeholderText={content.reviewForm.revieweeField}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
