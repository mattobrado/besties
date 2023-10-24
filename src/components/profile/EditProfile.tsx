import { HStack, FormControl, FormLabel, Button } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";
import { useUpdateAvatar } from "../../hooks/userHooks";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import AuthUserContext from "../layout/AuthUserContext";
import Avatar from "./Avatar";

export const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const authUser = useContext(AuthUserContext);

  if (id !== authUser.id) {
    navigate(ROUTES.HOME);
  }

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
    <>
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
    </>
  );
};

export default EditProfile;
