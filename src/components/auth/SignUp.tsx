import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  CONTENT,
  INPUT_TYPE,
  ROUTES,
  VALIDATE,
} from "../../constants/constants";
import { useSignup } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import AuthFormContainer from "./AuthFormContainer";
import AuthFormField from "./AuthFormField";
import { PasswordField } from "./PasswordField";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignup = async (data: any) => {
    signup({
      email: data.email,
      fullName: data.fullName,
      password: data.password,
      redirectTo: ROUTES.HOME,
      username: data.username,
    });
  };

  return (
    <AuthFormContainer
      authHeadingProps={{
        title: CONTENT.createAnAccount,
        callToAction: CONTENT.goToLoginMessage,
        link: {
          href: ROUTES.LOGIN,
          label: CONTENT.login,
        },
      }}
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading,
        label: CONTENT.signup,
        loadingText: CONTENT.signingUp,
      }}
    >
      <AuthFormField
        error={errors?.email}
        inputType={INPUT_TYPE.EMAIL}
        label={CONTENT.emailAddress}
        register={register}
        validate={VALIDATE.EMAIL}
      />
      <AuthFormField
        error={errors?.fullName}
        inputType={INPUT_TYPE.FULL_NAME}
        label={CONTENT.fullName}
        register={register}
      />
      <AuthFormField
        error={errors?.username}
        inputType={INPUT_TYPE.USERNAME}
        label={CONTENT.username}
        register={register}
        validate={VALIDATE.USERNAME}
      />
      <PasswordField
        error={errors?.password}
        {...register(INPUT_TYPE.PASSWORD, VALIDATE.PASSWORD)}
      />
    </AuthFormContainer>
  );
}
