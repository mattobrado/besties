import { useContext, useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  Box,
  FormControl,
  FormErrorMessage,
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
import PhoneInput from "react-phone-number-input/input";
import { useSignIn } from "../../hooks/authHooks";
import ContentContext from "../layout/ContentProvider";
import MainImage from "../home/MainImage";

const PhoneAuth = ({
  isFieldAndButtonOnly,
}: {
  isFieldAndButtonOnly: boolean;
}) => {
  const [showOneTimePasswordInput, setShowOneTimePasswordInput] =
    useState(false);
  const [signInError, setSignInError] = useState("");
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
      .catch((e) => {
        console.log("got an error", e);
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
    <>
      {isFieldAndButtonOnly && <MainImage />}
      <Box minHeight="100vh" p={4}>
        <FormContainer
          authHeadingProps={
            isFieldAndButtonOnly
              ? {}
              : {
                  title: content.auth.login,
                  // callToAction: "Take the ",
                  // link: {
                  //   label: "Genius IQ Test",
                  //   to: ROUTES.MEMBERS,
                  // },
                }
          }
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
          )}
          <div id="recaptcha-container"></div>
        </FormContainer>
      </Box>
    </>
  );
};

export default PhoneAuth;
