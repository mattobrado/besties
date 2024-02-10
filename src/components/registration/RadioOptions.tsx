import { Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NextButton from "./NextButton";
import { useAuth } from "../../hooks/authHooks";
import { TOAST_PROPS } from "../../lib/constants";
import { useUpdateUser } from "../../hooks/userHooks";

const RadioOptions = ({
  options,
  goToNext,
  field,
}: {
  options?: string[];
  goToNext: Function;
  field: string;
}) => {
  const { authUser } = useAuth();
  const toast = useToast();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);
  const [value, setValue] = useState("");
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
            : updateUser({ [field]: value }).then(() => goToNext());
        }}
        isLoading={isLoading}
      />
    </RadioGroup>
  );
};

export default RadioOptions;
