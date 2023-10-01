import {
  CONTENT,
  INPUT_TYPE,
  ROUTES,
  VALIDATE,
} from "../../constants/constants";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

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
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading>{CONTENT.heartEmoji}</Heading>
            <Heading size={{ base: "xs", md: "sm" }}>
              {CONTENT.logInToYourAccount}
            </Heading>
            <Text color="fg.muted">
              {CONTENT.dontHaveAnAccount}{" "}
              <Link href={ROUTES.SIGN_UP}>{CONTENT.signUp}</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <form onSubmit={handleSubmit(handleLogin)}>
              <Stack spacing="5">
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor={INPUT_TYPE.EMAIL}>
                    {CONTENT.emailAddress}
                  </FormLabel>
                  <Input
                    id={INPUT_TYPE.EMAIL}
                    type={INPUT_TYPE.EMAIL}
                    {...register(INPUT_TYPE.EMAIL, VALIDATE.EMAIL)}
                  />
                  <FormErrorMessage>
                    {typeof errors.email?.message === "string" &&
                      errors.email.message}
                  </FormErrorMessage>{" "}
                </FormControl>
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
                  {CONTENT.logIn}
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
            </form>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
