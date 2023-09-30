import { MouseEventHandler, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { CONTENT, ROUTES } from "../../constants/constants";
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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(ROUTES.ROOT);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
              <Link href="/sign-up">{CONTENT.signUp}</Link>
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
            <Stack spacing="5">
              <FormControl isInvalid={true}>
                <FormLabel htmlFor="email">{CONTENT.emailAddress}</FormLabel>
                <Input id="email" type="email" />
                <FormErrorMessage>{CONTENT.error}</FormErrorMessage>
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>{CONTENT.rememberMe}</Checkbox>
              <Button variant="text" size="sm">
                {CONTENT.forgotPassword}
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button>{CONTENT.logIn}</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  {CONTENT.orContinueWith}
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
