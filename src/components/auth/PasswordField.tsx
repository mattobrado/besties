import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";
import { CONTENT, INPUT_TYPE } from "../../constants/constants";
import { forwardRef, useRef } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

export const PasswordField = forwardRef<
  HTMLInputElement,
  InputProps & { errors: FieldErrors<FieldValues> }
>((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl isInvalid={!!props.errors?.password}>
      <FormLabel htmlFor={INPUT_TYPE.PASSWORD}>{CONTENT.password}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            // icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id={INPUT_TYPE.PASSWORD}
          ref={mergeRef}
          name={INPUT_TYPE.PASSWORD}
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          {...props}
        />
      </InputGroup>
      <FormErrorMessage>
        {typeof props.errors?.password?.message === "string" &&
          props.errors.password.message}
      </FormErrorMessage>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
