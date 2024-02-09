import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const QuestionCard = ({
  options,
  nextButton,
  value,
  setValue,
}: {
  options?: string[];
  nextButton: React.ReactNode;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
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
