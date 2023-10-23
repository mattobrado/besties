import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  PinInput,
  PinInputField,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import AuthFormContainer from "./AuthFormContainer";
import { content } from "../../lib/content";
import { ROUTES } from "../../lib/routes";
import PhoneInput from "react-phone-number-input/input";
import { COLLECTIONS, TOAST_PROPS } from "../../lib/constants";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const PhoneAuth = () => {
  const [isLoading, setLoading] = useState(false);
  const [showOneTimePasswordInput, setShowOneTimePasswordInput] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOtp] = useState("");
  const { handleSubmit } = useForm();
  const toast = useToast();
  const navigate = useNavigate();

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
        setLoading(false);
        setShowOneTimePasswordInput(true);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onOneTimePasswordSubmit = async () => {
    setLoading(true);
    try {
      const { user } = await (window as any).confirmationResult.confirm(
        oneTimePassword
      );
      console.log(user);
      await setDoc(doc(db, COLLECTIONS.USERS, user.uid), {
        avatar: "",
        date: Date.now(),
        id: user.uid,
        ratingCount: 0,
        popularity: 0,
        friendUids: [],
      });

      navigate(ROUTES.HOME);
    } catch (error: any) {
      toast({
        title: content.auth.signupFailed,
        description: error?.message,
        status: "error",
        ...TOAST_PROPS,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthFormContainer
      authHeadingProps={{
        title: content.auth.login,
      }}
      buttonProps={
        showOneTimePasswordInput
          ? {
              isLoading,
              label: "verify code",
              loadingText: content.auth.signingUp,
            }
          : {
              isLoading,
              label: "next",
              loadingText: content.auth.signingUp,
            }
      }
      onSubmit={handleSubmit(
        showOneTimePasswordInput ? onOneTimePasswordSubmit : onPhoneNumberSubmit
      )}
    >
      {showOneTimePasswordInput ? (
        <FormControl>
          <FormLabel>enter your code</FormLabel>
          <HStack w={"full"}>
            <PinInput
              otp={true}
              placeholder="🥳"
              value={oneTimePassword}
              onChange={setOtp}
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
    </AuthFormContainer>
  );
};

export default PhoneAuth;
