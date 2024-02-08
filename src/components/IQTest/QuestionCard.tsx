import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const QuestionCard = ({ options }: { options?: string[] }) => {
  const [value, setValue] = useState("");

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack spacing={1}>
        {options?.map((option) => (
          <Radio size={"md"} py={1} value={option} key={option}>
            {option}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default QuestionCard;
