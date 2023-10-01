import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  useColorModeValue,
  FormErrorMessage,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { CONTENT, ROUTES, VALIDATE } from "../../constants/constants";
import { useSignup } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { AuthHeading } from "./AuthHeading";

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
      username: data.username,
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
        <AuthHeading
          title={CONTENT.createAnAccount}
          callToAction={CONTENT.goToLoginMessage}
          link={{
            href: ROUTES.LOGIN,
            label: CONTENT.login,
          }}
        />
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(handleSignup)}>
              <HStack>
                <Box>
                  <FormControl isInvalid={!!errors.username} py="2">
                    <FormLabel>{CONTENT.username}</FormLabel>
                    <Input
                      placeholder="username"
                      {...register("username", VALIDATE.USERNAME)}
                    />
                    <FormErrorMessage>
                      {typeof errors.username?.message === "string" &&
                        errors.username?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  _hover={{ bg: "blue.500" }}
                  bg={"blue.400"}
                  color={"white"}
                  isLoading={isLoading}
                  loadingText={CONTENT.signingUp}
                  size="lg"
                  type="submit"
                >
                  {CONTENT.signup}
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
