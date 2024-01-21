import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import FormContainer from "./FormContainer";
import { content } from "../../lib/content/bestiesContent";
import PhoneInput from "react-phone-number-input/input";
import { useSignIn } from "../../hooks/authHooks";
import { BACKGROUNDS } from "../../theme/colors";

const PhoneAuth = () => {
  const [showOneTimePasswordInput, setShowOneTimePasswordInput] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOtp] = useState("");
  const { handleSubmit } = useForm();
  const [isSendingCodeLoading, setLoading] = useState(false);
  const { signIn, isLoading: isSignInLoading } = useSignIn();
  const isLoading = isSendingCodeLoading || isSignInLoading;

  const onCaptchaVerify = () => {
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            onPhoneNumberSubmit();
          },
          "expired-callback": () => {},
        }
      );
    }
  };

  const onPhoneNumberSubmit = () => {
    setLoading(true);
    onCaptchaVerify();

    signInWithPhoneNumber(auth, phoneNumber, (window as any).recaptchaVerifier)
      .then((confirmationResult) => {
        (window as any).confirmationResult = confirmationResult;
        setShowOneTimePasswordInput(true);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  const pinOnChange = (otp: string) => {
    setOtp(otp);
    if (otp.length === 6) {
      signIn({ oneTimePassword: otp, phoneNumber });
    }
  };

  return (
    <Box
      minHeight="100vh"
      style={{
        background: BACKGROUNDS.default,
      }}
    >
      <FormContainer
        authHeadingProps={{
          title: content.auth.login,
        }}
        buttonProps={
          showOneTimePasswordInput
            ? {
                isLoading: isLoading,
                label: "sign in",
                loadingText: "signing in",
              }
            : {
                isLoading: isLoading,
                label: "next",
                loadingText: "sending code",
              }
        }
        onSubmit={handleSubmit(
          showOneTimePasswordInput
            ? () => signIn({ oneTimePassword, phoneNumber })
            : onPhoneNumberSubmit
        )}
      >
        {showOneTimePasswordInput ? (
          <FormControl>
            <FormLabel>enter your code</FormLabel>
            <HStack w={"full"}>
              <PinInput
                otp={true}
                placeholder="🥸"
                value={oneTimePassword}
                onChange={pinOnChange}
              >
                <PinInputField />
                <Spacer border={"transparent"} />
                <PinInputField />
                <Spacer border={"transparent"} />
                <PinInputField />
                <Spacer border={"transparent"} />
                <PinInputField />
                <Spacer border={"transparent"} />
                <PinInputField />
                <Spacer border={"transparent"} />
                <PinInputField />
              </PinInput>
            </HStack>
          </FormControl>
        ) : (
          <FormControl>
            <InputGroup>
              <Input
                as={PhoneInput}
                country="US"
                placeholder="phone number"
                value={phoneNumber}
                onChange={setPhoneNumber as any}
              />
            </InputGroup>
          </FormControl>
        )}
        <div id="recaptcha-container"></div>
      </FormContainer>
    </Box>
  );
};

export default PhoneAuth;
