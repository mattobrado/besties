import { Button, Checkbox, HStack, Stack } from "@chakra-ui/react";
import { PasswordField } from "./PasswordField";
import { useLogin } from "../../hooks/authHooks";
import { useForm } from "react-hook-form";
import AuthFormField from "./AuthFormField";
import AuthFormContainer from "./AuthFormContainer";
import { content } from "../../lib/content";
import { COLORS } from "../../theme/colors";
import { ROUTES } from "../../lib/routes";
import { INPUT_TYPE, VALIDATE } from "../../lib/constants";

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
          title: content.auth.logInToYourAccount,
          callToAction: content.auth.dontHaveAnAccount,
          link: {
            to: ROUTES.SIGNUP,
            label: content.auth.signup,
          },
        }}
        onSubmit={handleSubmit(handleLogin)}
        buttonProps={{
          isLoading,
          label: content.auth.login,
          loadingText: content.auth.loggingIn,
        }}
      >
        <Stack spacing="5">
          <AuthFormField
            error={errors?.email}
            inputType={INPUT_TYPE.EMAIL}
            label={content.auth.emailAddress}
            register={register}
            validate={VALIDATE.EMAIL}
          />
          <PasswordField
            error={errors?.password}
            {...register(INPUT_TYPE.PASSWORD, VALIDATE.PASSWORD)}
          />
        </Stack>
        <HStack justify="space-between">
          <Checkbox colorScheme={COLORS.COLOR_SCHEME} defaultChecked>
            {content.auth.rememberMe}
          </Checkbox>
          <Button variant="text" size="sm">
            {content.auth.forgotPassword}
          </Button>
        </HStack>
      </AuthFormContainer>
    </>
  );
};

export default Login;
