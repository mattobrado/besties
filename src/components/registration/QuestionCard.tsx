import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";

const QuestionCard = ({
  options,
  nextButton,
  setValue,
  value,
  initialValue,
}: {
  options?: string[];
  nextButton: React.ReactNode;
  value: string;
  initialValue?: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  useEffect(() => setValue(initialValue ?? ""), [initialValue]);
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack spacing={1} pb={5}>
        {options?.map((option) => (
          <Radio size={"md"} py={1} value={option} key={option}>
            {option}
          </Radio>
        ))}
      </Stack>
      {nextButton}
    </RadioGroup>
  );
};

export default QuestionCard;
