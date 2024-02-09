import { Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import NextButton from "./NextButton";
import { useAuth } from "../../hooks/authHooks";
import { UserType } from "../../lib/types";
import { TOAST_PROPS } from "../../lib/constants";

const RadioOptions = ({
  options,
  onNext,
  setValue,
  value,
  field,
  isLoading,
}: {
  options?: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onNext: Function;
  field: string;
  isLoading: boolean;
}) => {
  const { authUser } = useAuth();
  const fieldValue = authUser && authUser[field as keyof UserType];
  const initialValue = typeof fieldValue === "string" ? fieldValue : "";
  useEffect(() => setValue(initialValue), []);
  const toast = useToast();
  return (
    <RadioGroup onChange={setValue} value={value} colorScheme="pink">
      <Stack spacing={1} pb={5}>
        {options?.map((option) => (
          <Radio size={"md"} py={1} value={option} key={option}>
            {option}
          </Radio>
        ))}
      </Stack>
      <NextButton
        onClick={() => {
          !value
            ? toast({
                title: "Please choose an option",
                status: "error",
                ...TOAST_PROPS,
              })
            : onNext(field);
        }}
        isLoading={isLoading}
      />
    </RadioGroup>
  );
};

export default RadioOptions;
