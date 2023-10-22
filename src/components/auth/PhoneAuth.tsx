import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AuthFormContainer from "./AuthFormContainer";
import { content } from "../../lib/content";
import { ROUTES } from "../../lib/routes";
import PhoneInput from "react-phone-number-input/input";
import { PhoneIcon } from "@chakra-ui/icons";

const PhoneAuth = () => {
  const [isLoading, setLoading] = useState(false);
  const [showOneTimePasswordInput, setShowOneTimePasswordInput] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const { handleSubmit } = useForm();

  const onCaptchaVerify = () => {
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  };

  const onSignup = () => {
    setLoading(true);
    onCaptchaVerify();

    const appVerifier = (window as any).recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        (window as any).confirmationResult = confirmationResult;
        setLoading(false);
        setShowOneTimePasswordInput(true);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  function onOTPVerify() {
    setLoading(true);
    (window as any).confirmationResult
      .confirm(otp)
      .then(async () => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <AuthFormContainer
      authHeadingProps={{
        title: content.auth.createAnAccount,
        callToAction: content.auth.goToLoginMessage,
        link: {
          to: ROUTES.LOGIN,
          label: content.auth.login,
        },
      }}
      buttonProps={
        showOneTimePasswordInput
          ? {
              isLoading,
              label: "verify one time code",
              loadingText: content.auth.signingUp,
            }
          : {
              isLoading,
              label: "next",
              loadingText: content.auth.signingUp,
            }
      }
      onSubmit={handleSubmit(showOneTimePasswordInput ? onOTPVerify : onSignup)}
    >
      {showOneTimePasswordInput ? (
        <FormControl>
          <FormLabel>enter your code</FormLabel>
          <HStack>
            <PinInput
              otp={true}
              placeholder="🥳"
              value={otp}
              onChange={setOtp}
              // {...register(INPUT_TYPE.ONE_TIME_PASS_CODE)}
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </FormControl>
      ) : (
        <FormControl>
          <FormLabel>verify your phone number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon />
            </InputLeftElement>
            {/* <InputLeftAddon children="+1" / */}
            <Input
              as={PhoneInput}
              placeholder="phone number"
              value={phoneNumber}
              onChange={setPhoneNumber as any}
            />
          </InputGroup>
        </FormControl>
      )}
    </AuthFormContainer>
  );
};

export default PhoneAuth;
