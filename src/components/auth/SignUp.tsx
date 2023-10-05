import { INPUT_TYPE, VALIDATE } from "../../lib/constants";
import { useSignup } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import AuthFormContainer from "./AuthFormContainer";
import AuthFormField from "./AuthFormField";
import { PasswordField } from "./PasswordField";
import { CONTENT } from "../../lib/content";
import { ROUTES } from "../../lib/routes";

export default function Signup() {
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
        title: CONTENT.AUTH.createAnAccount,
        callToAction: CONTENT.AUTH.goToLoginMessage,
        link: {
          to: ROUTES.LOGIN,
          label: CONTENT.AUTH.login,
        },
      }}
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading,
        label: CONTENT.AUTH.signup,
        loadingText: CONTENT.AUTH.signingUp,
      }}
    >
      <AuthFormField
        error={errors?.email}
        inputType={INPUT_TYPE.EMAIL}
        label={CONTENT.AUTH.emailAddress}
        register={register}
        validate={VALIDATE.EMAIL}
      />
      <AuthFormField
        error={errors?.fullName}
        inputType={INPUT_TYPE.FULL_NAME}
        label={CONTENT.AUTH.fullName}
        register={register}
      />
      <AuthFormField
        error={errors?.username}
        inputType={INPUT_TYPE.USERNAME}
        label={CONTENT.AUTH.username}
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
