import { useContext, useState } from "react";
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
import PhoneInput from "react-phone-number-input/input";
import { useSignIn } from "../../hooks/authHooks";
import { BACKGROUNDS } from "../../theme/colors";
import ContentContext from "../layout/ContentProvider";
import MainImage from "../home/MainImage";
//  import { ROUTES } from "../../lib/constants";

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

  const content = useContext(ContentContext);

  return (
    <>
      <MainImage />
      <Box
        minHeight="100vh"
        style={{
          background: BACKGROUNDS.default,
        }}
        p={4}
      >
        <FormContainer
          authHeadingProps={{
            title: content.auth.login,
            // callToAction: "Take the ",
            // link: {
            //   label: "Genius IQ Test",
            //   to: ROUTES.MEMBERS,
            // },
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
                  placeholder={content.auth.phoneNumberPlaceHolder}
                  value={phoneNumber}
                  onChange={setPhoneNumber as any}
                />
              </InputGroup>
            </FormControl>
          )}
          <div id="recaptcha-container"></div>
        </FormContainer>
      </Box>
    </>
  );
};

export default PhoneAuth;
