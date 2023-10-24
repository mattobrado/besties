import { HStack, FormControl, FormLabel } from "@chakra-ui/react";
import { useUpdateUser } from "../../hooks/userHooks";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../lib/routes";
import AuthUserContext from "../layout/AuthUserContext";
import Avatar from "./Avatar";
import { content } from "../../lib/content";
import { INPUT_TYPE, VALIDATE } from "../../lib/formValidation";
import FormField from "../auth/FormField";
import FormContainer from "../auth/FormContainer";
import { useForm } from "react-hook-form";

export const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const authUser = useContext(AuthUserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (id !== authUser.id) {
    navigate(ROUTES.HOME);
  }
  const handleSignup = async (data: any) => {
    updateUser({ fullName: data.fullName });
  };
  const {
    setFile,
    updateUser: updateUser,
    isLoading,
    fileURL,
  } = useUpdateUser(authUser?.id);

  return (
    <FormContainer
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading: isLoading,
        label: "update",
        loadingText: "updating",
      }}
    >
      <HStack spacing="5">
        <Avatar user={authUser} overrideAvatar={fileURL as any} />
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
        validate={VALIDATE.FULL_NAME}
      />
    </FormContainer>
  );
};

export default EditProfile;
