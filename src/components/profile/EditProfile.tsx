import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useUpdateUser } from "../../hooks/userHooks";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import AuthUserContext from "../layout/AuthUserContext";
import Avatar from "./Avatar";
import { content } from "../../lib/content";
import { INPUT_TYPE, VALIDATE } from "../../lib/formValidation";
import FormField from "../auth/FormField";
import FormContainer from "../auth/FormContainer";
import { useForm } from "react-hook-form";
import BackgroundContext from "../../BackGroundContext";

export const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const authUser = useContext(AuthUserContext);
  const [color, setColor] = useState(authUser.favoriteColor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (id !== authUser.id) {
    navigate(ROUTES.HOME);
  }
  const handleSignup = async (data: any) => {
    updateUser({
      fullName: data.fullName,
      songLink: data.url,
      color,
    });
  };
  const {
    setFile,
    updateUser: updateUser,
    isLoading,
    fileURL,
  } = useUpdateUser(authUser?.id);

  const setBackground = useContext(BackgroundContext);
  useEffect(() => setBackground(color), [color]);

  return (
    <FormContainer
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading: isLoading,
        label: "update",
        loadingText: "updating",
      }}
    >
      <Avatar user={authUser} overrideAvatar={fileURL as any} />
      <FormControl py="4">
        <FormLabel htmlFor="picture">Change avatar</FormLabel>
        <input
          type="file"
          accept="image/*"
          onChange={(e: any) => setFile(e.target.files[0])}
        />
      </FormControl>
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
        label={"favorite song"}
        placeHolder="paste spotify link"
        register={register}
      />
      <FormControl>
        <FormLabel>{"favorite color"}</FormLabel>
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
