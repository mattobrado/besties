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
import { INPUT_TYPE } from "../../lib/constants";
import { forwardRef, useRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { CONTENT } from "../../lib/content";
import { COLORS } from "../../lib/theme";

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
      <FormLabel color={COLORS.text} htmlFor={INPUT_TYPE.PASSWORD}>
        {CONTENT.AUTH.password}
      </FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <ViewOffIcon /> : <ViewIcon />}
            onClick={onClickReveal}
            color={COLORS.text}
          />
        </InputRightElement>
        <Input
          id={INPUT_TYPE.PASSWORD}
          ref={mergeRef}
          name={INPUT_TYPE.PASSWORD}
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          color={COLORS.text}
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
