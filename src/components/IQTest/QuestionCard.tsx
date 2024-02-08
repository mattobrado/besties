import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const QuestionCard = ({
  description,
  options,
}: {
  description: string;
  options?: string[];
}) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Stack spacing={5} pb={5}>
        <Text fontSize={"3xl"}>{description}</Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack spacing={1}>
            {options?.map((option) => (
              <Radio size={"md"} py={1} value={option} key={option}>
                {option}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Stack>
    </>
  );
};

export default QuestionCard;
