import {
  FormControl,
  FormLabel,
  Input,
  Avatar as ChakraAvatar,
  Center,
} from "@chakra-ui/react";
import { useUpdateUser } from "../../hooks/userHooks";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import { INPUT_TYPE, VALIDATE } from "../../lib/formValidation";
import FormField from "../auth/FormField";
import FormContainer from "../auth/FormContainer";
import { useForm } from "react-hook-form";
import ContentContext from "../layout/ContentProvider";
import { AddIcon } from "@chakra-ui/icons";
import { useAuth } from "../../hooks/authHooks";
import getSongIdFromLink from "../../utils/getSongIdFromLink";

export const EditProfile = ({
  id,
  goToNext,
}: {
  id?: string;
  goToNext?: () => void;
}) => {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const [color, setColor] = useState(authUser?.favoriteColor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (id && id !== authUser?.id) {
    navigate(ROUTES.HOME);
  }
  const handleSignup = async (data: any) => {
    await updateUser({
      fullName: data.fullName,
      favoriteSongId: getSongIdFromLink(data.url),
      favoriteColor: color,
      bio: data.bio,
    }).catch(() => {
      if (goToNext) goToNext();
    });
  };

  const { setFile, updateUser, isLoading, fileURL } = useUpdateUser(
    authUser?.id
  );

  const content = useContext(ContentContext);

  const imageInputId = "image-input";

  return (
    <FormContainer
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading: isLoading,
        label: content.auth.next,
        loadingText: "Updating",
      }}
    >
      <div id="edit-avatar">
        <Center>
          <ChakraAvatar
            name={authUser?.fullName}
            src={fileURL ?? authUser?.avatar}
            loading="lazy"
            size={"xl"}
            icon={<AddIcon fontSize="1.5rem" />}
            bg={color}
            onClick={() => document.getElementById(imageInputId)?.click()}
            borderColor={color}
            borderWidth={3}
          />
        </Center>
        <FormControl>
          <FormLabel htmlFor="picture"></FormLabel>
          <input
            id={imageInputId}
            type="file"
            accept="image/*"
            onChange={(e: any) => setFile(e.target.files[0])}
            style={{ display: "none" }}
          />
        </FormControl>
      </div>

      <FormField
        error={errors?.fullName}
        inputType={INPUT_TYPE.FULL_NAME}
        label={content.auth.fullName}
        register={register}
        validate={
          authUser?.fullName ? VALIDATE.FULL_NAME : VALIDATE.FULL_NAME_REQUIRED
        }
        placeHolder={authUser?.fullName}
      />
      <FormField
        error={errors?.bio}
        inputType={INPUT_TYPE.BIO}
        label={content.auth.bio}
        register={register}
      />
      <FormField
        error={errors?.url}
        inputType={INPUT_TYPE.SONG}
        label={content.auth.favoriteSong}
        placeHolder={content.auth.favoriteSongPlaceholder}
        register={register}
      />
      <FormControl>
        <FormLabel>{"Favorite color"}</FormLabel>
        <Input
          type={INPUT_TYPE.COLOR}
          value={color}
          onChange={(e: any) => setColor(e.target.value)}
          placeholder="gh"
          p={0}
        />
      </FormControl>
    </FormContainer>
  );
};

export default EditProfile;
