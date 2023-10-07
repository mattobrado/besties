import { INPUT_TYPE, VALIDATE } from "../../lib/formValidation";
import { useSignup } from "../../hooks/authHooks";
import { useForm } from "react-hook-form";
import AuthFormContainer from "./AuthFormContainer";
import AuthFormField from "./AuthFormField";
import { PasswordField } from "./PasswordField";
import { content } from "../../lib/content";
import { ROUTES } from "../../lib/routes";

const Signup = () => {
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
        title: content.auth.createAnAccount,
        callToAction: content.auth.goToLoginMessage,
        link: {
          to: ROUTES.LOGIN,
          label: content.auth.login,
        },
      }}
      onSubmit={handleSubmit(handleSignup)}
      buttonProps={{
        isLoading,
        label: content.auth.signup,
        loadingText: content.auth.signingUp,
      }}
    >
      <AuthFormField
        error={errors?.email}
        inputType={INPUT_TYPE.EMAIL}
        label={content.auth.emailAddress}
        register={register}
        validate={VALIDATE.EMAIL}
      />
      <AuthFormField
        error={errors?.fullName}
        inputType={INPUT_TYPE.FULL_NAME}
        label={content.auth.fullName}
        register={register}
        validate={VALIDATE.FULL_NAME}
      />
      <AuthFormField
        error={errors?.username}
        inputType={INPUT_TYPE.USERNAME}
        label={content.auth.username}
        register={register}
        validate={VALIDATE.USERNAME}
      />
      <PasswordField
        error={errors?.password}
        {...register(INPUT_TYPE.PASSWORD, VALIDATE.PASSWORD)}
      />
    </AuthFormContainer>
  );
};

export default Signup;
