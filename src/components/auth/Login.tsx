import { CONTENT, INPUT_TYPE, ROUTES, VALIDATE } from "../../lib/constants";
import { Button, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { PasswordField } from "./PasswordField";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import AuthFormField from "./AuthFormField";
import AuthFormContainer from "./AuthFormContainer";

const Login = () => {
  const { login, isLoading } = useLogin();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();
  const handleLogin = async (data: any) => {
    if (!(data?.email && data?.password)) {
      return;
    }
    await login({
      email: data.email,
      password: data.password,
      redirectTo: ROUTES.HOME,
    });
  };

  return (
    <>
      <AuthFormContainer
        authHeadingProps={{
          title: CONTENT.logInToYourAccount,
          callToAction: CONTENT.dontHaveAnAccount,
          link: {
            href: ROUTES.SIGNUP,
            label: CONTENT.signup,
          },
        }}
        onSubmit={handleSubmit(handleLogin)}
        buttonProps={{
          isLoading,
          label: CONTENT.login,
          loadingText: CONTENT.loggingIn,
        }}
      >
        <Stack spacing="5">
          <AuthFormField
            error={errors?.email}
            inputType={INPUT_TYPE.EMAIL}
            label={CONTENT.emailAddress}
            register={register}
            validate={VALIDATE.EMAIL}
          />
          <PasswordField
            error={errors?.password}
            {...register(INPUT_TYPE.PASSWORD, VALIDATE.PASSWORD)}
          />
        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultChecked>{CONTENT.rememberMe}</Checkbox>
          <Button variant="text" size="sm">
            {CONTENT.forgotPassword}
          </Button>
        </HStack>
      </AuthFormContainer>
    </>
  );
};

export default Login;
