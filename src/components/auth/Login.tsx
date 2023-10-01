import {
  CONTENT,
  INPUT_TYPE,
  ROUTES,
  VALIDATE,
} from "../../constants/constants";
import {
  Button,
  Checkbox,
  Divider,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
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
            href: ROUTES.SIGN_UP,
            label: CONTENT.signup,
          },
        }}
        onSubmit={handleSubmit(handleLogin)}
      >
        <Stack spacing="5">
          <AuthFormField
            error={errors.email}
            inputType={INPUT_TYPE.EMAIL}
            label={CONTENT.emailAddress}
            register={register}
            validate={VALIDATE.EMAIL}
          />
          <PasswordField
            errors={errors}
            {...register(INPUT_TYPE.PASSWORD, VALIDATE.PASSWORD)}
          />
        </Stack>
        <HStack justify="space-between">
          <Checkbox defaultChecked>{CONTENT.rememberMe}</Checkbox>
          <Button variant="text" size="sm">
            {CONTENT.forgotPassword}
          </Button>
        </HStack>
        <Stack spacing="6">
          <Button
            mt="4"
            type="submit"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText={CONTENT.loggingIn}
          >
            {CONTENT.login}
          </Button>
          <HStack>
            <Divider />
            <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
              {CONTENT.orContinueWith}
            </Text>
            <Divider />
          </HStack>
          <OAuthButtonGroup />
        </Stack>
      </AuthFormContainer>
    </>
  );
};

export default Login;
