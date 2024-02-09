import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import NextButton from "./NextButton";
import { useAuth } from "../../hooks/authHooks";
import { UserType } from "../../lib/types";

const RadioOptions = ({
  options,
  onNext,
  setValue,
  value,
  field,
}: {
  options?: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onNext: Function;
  field: string;
}) => {
  const { authUser } = useAuth();
  const fieldValue = authUser && authUser[field as keyof UserType];
  const initialValue = typeof fieldValue === "string" ? fieldValue : "";
  useEffect(() => setValue(initialValue), []);
  return (
    <RadioGroup onChange={setValue} value={value} colorScheme="pink">
      <Stack spacing={1} pb={5}>
        {options?.map((option) => (
          <Radio size={"md"} py={1} value={option} key={option}>
            {option}
          </Radio>
        ))}
      </Stack>
      <NextButton onClick={() => onNext(field)} />
    </RadioGroup>
  );
};

export default RadioOptions;
