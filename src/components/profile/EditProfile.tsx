import { FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { useUpdateUser } from "../../hooks/userHooks";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import AuthUserContext from "../layout/AuthUserContext";
import Avatar from "./Avatar";
import { INPUT_TYPE, VALIDATE } from "../../lib/formValidation";
import FormField from "../auth/FormField";
import FormContainer from "../auth/FormContainer";
import { useForm } from "react-hook-form";
import ContentContext from "../layout/ContentProvider";

export const EditProfile = ({
  id,
  onSubmit,
}: {
  id?: string;
  onSubmit?: () => void;
}) => {
  const navigate = useNavigate();
  const authUser = useContext(AuthUserContext);
  const [color, setColor] = useState(authUser.favoriteColor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (id && id !== authUser.id) {
    navigate(ROUTES.HOME);
  }
  const handleSignup = async (data: any) => {
    updateUser({
      fullName: data.fullName,
      songLink: data.url,
      color,
    });
    if (onSubmit) onSubmit();
  };

  const {
    setFile,
    updateUser: updateUser,
    isLoading,
    fileURL,
  } = useUpdateUser(authUser?.id);

  const content = useContext(ContentContext);

  // const setBackground = useContext(BackgroundContext);
  // useEffect(() => setBackground(color), [color]);

  return (
    <FormContainer
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading: isLoading,
        label: "Update",
        loadingText: "Updating",
      }}
    >
      <HStack>
        <Avatar
          user={authUser}
          overrideAvatar={fileURL ?? undefined}
          avatarProps={{ size: "xl" }}
        />
        <FormControl py="4">
          <FormLabel htmlFor="picture">Change avatar</FormLabel>
          <input
            type="file"
            accept="image/*"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </FormControl>
      </HStack>
      <FormField
        error={errors?.fullName}
        inputType={INPUT_TYPE.FULL_NAME}
        label={content.auth.fullName}
        register={register}
        validate={
          authUser.fullName ? VALIDATE.FULL_NAME : VALIDATE.FULL_NAME_REQUIRED
        }
        placeHolder={authUser.fullName}
      />
      <FormField
        error={errors?.url}
        inputType={INPUT_TYPE.SONG}
        label={"Favorite song"}
        placeHolder="Paste Spotify link"
        register={register}
      />
      <FormControl>
        <FormLabel>{"Favorite color"}</FormLabel>
        <Input
          type={INPUT_TYPE.COLOR}
          value={color}
          onChange={(e: any) => setColor(e.target.value)}
          placeholder="gh"
        />
      </FormControl>
    </FormContainer>
  );
};

export default EditProfile;
