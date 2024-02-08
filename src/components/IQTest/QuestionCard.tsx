import { Button, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { HEX_COLORS } from "../../theme/colors";

const QuestionCard = ({
  question,
  options,
  submitButtonLabel,
}: {
  question: string;
  options: string[];
  submitButtonLabel: string;
}) => {
  const [value, setValue] = useState("");

  return (
    <>
      <Text fontSize={"3xl"}>{question}</Text>
      <RadioGroup onChange={setValue} value={value} py={5}>
        <Stack spacing={1}>
          {options.map((option) => (
            <Radio size={"md"} py={1} value={option} key={option}>
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button
        style={{ backgroundColor: HEX_COLORS.THE_GENIUS_PROGRAM_PRIMARY }}
        px={8}
        py={3}
      >
        <Text color={"black"} w={"96px"} fontSize={"lg"}>
          {submitButtonLabel}
        </Text>
      </Button>
    </>
  );
};

export default QuestionCard;
