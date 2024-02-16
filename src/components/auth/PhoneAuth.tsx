import { useContext, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
  Spacer,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";
import { MainImage } from "src/components";
import { useSignIn } from "src/hooks";
import { ContentContext } from "src/context";
import { FormContainer } from "src/components/auth";
import { auth } from "src/lib";

export type PhoneAuthPropsType = {
  isFieldAndButtonOnly?: boolean;
};

export const PhoneAuth = ({ isFieldAndButtonOnly }: PhoneAuthPropsType) => {
  const [showOneTimePasswordInput, setShowOneTimePasswordInput] =
    useState(false);
  const [signInError, setSignInError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOtp] = useState("");
  const { handleSubmit } = useForm();
  const [isSendingCodeLoading, setLoading] = useState(false);
  const { signIn, isLoading: isSignInLoading } = useSignIn();
  const isLoading = isSendingCodeLoading || isSignInLoading;

  const onPhoneNumberSubmit = async () => {
    setLoading(true);
    (window as any).recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        "expired-callback": () => {},
      }
    );

    signInWithPhoneNumber(auth, phoneNumber, (window as any).recaptchaVerifier)
      .then((confirmationResult) => {
        (window as any).confirmationResult = confirmationResult;
        setShowOneTimePasswordInput(true);
      })
      .catch((e) => {
        setSignInError(e.message);
      })
      .finally(() => setLoading(false));
  };

  const pinOnChange = (otp: string) => {
    setOtp(otp);
    if (otp.length === 6) {
      signIn({ oneTimePassword: otp, phoneNumber });
    }
  };

  const content = useContext(ContentContext);

  return (
    <Box>
      {!isFieldAndButtonOnly && <MainImage />}
      <Box p={isFieldAndButtonOnly ? 0 : 4}>
        <FormContainer
          authHeadingProps={{
            title: isFieldAndButtonOnly ? undefined : content.auth.login,
          }}
          buttonProps={
            showOneTimePasswordInput
              ? {
                  isLoading: isLoading,
                  label: content.auth.login,
                  loadingText: content.auth.loggingIn,
                }
              : {
                  isLoading: isLoading,
                  label: "Next",
                  loadingText: "Sending code",
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
              <FormLabel>Enter your code</FormLabel>
              <HStack w={"full"}>
                <PinInput
                  otp={true}
                  placeholder="🥸"
                  value={oneTimePassword}
                  onChange={pinOnChange}
                  id="pinInput"
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
            <>
              <FormControl isInvalid={!!signInError}>
                <InputGroup>
                  <Input
                    as={PhoneInput}
                    country="US"
                    placeholder={content.auth.phoneNumberPlaceHolder}
                    value={phoneNumber}
                    onChange={setPhoneNumber as any}
                  />
                </InputGroup>
                <FormErrorMessage>{signInError}</FormErrorMessage>
              </FormControl>
            </>
          )}
        </FormContainer>{" "}
      </Box>

      <div id="recaptcha-container"></div>
      <div id="recaptcha-container"></div>
    </Box>
  );
};
