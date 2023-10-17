import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Avatar from "./Avatar";
import { useUpdateAvatar } from "../../hooks/userHooks";
import { UserType } from "../../lib/types";
import { COLORS } from "../../theme/colors";

export default function EditProfile({
  authUser,
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  authUser: UserType;
}) {
  const {
    setFile,
    updateAvatar,
    isLoading: fileLoading,
    fileURL,
  } = useUpdateAvatar(authUser?.id);

  function handleChange(e: any) {
    setFile(e.target.files[0]);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={COLORS.BACKGROUND}>
        <ModalHeader>Edit profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing="5">
            <Avatar user={authUser} overrideAvatar={fileURL as any} />
            <FormControl py="4">
              <FormLabel htmlFor="picture">Change avatar</FormLabel>
              <input type="file" accept="image/*" onChange={handleChange} />
            </FormControl>
          </HStack>
          <Button
            loadingText="Uploading"
            w="full"
            my="6"
            colorScheme={COLORS.COLOR_SCHEME}
            onClick={updateAvatar}
            isLoading={fileLoading}
          >
            Save
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
