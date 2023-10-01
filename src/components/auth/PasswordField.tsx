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
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const PasswordField = forwardRef<
  HTMLInputElement,
  InputProps & {
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  }
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
    <FormControl isInvalid={!!props.error}>
      <FormLabel htmlFor={INPUT_TYPE.PASSWORD}>{CONTENT.password}</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
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
        {typeof props.error?.message === "string" && props.error?.message}
      </FormErrorMessage>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
