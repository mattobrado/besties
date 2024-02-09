import { Button, Stack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const ButtonOptions = ({
  options,
  onNext,
  setValue,
}: {
  options?: string[];
  setValue: Dispatch<SetStateAction<string>>;
  onNext: () => void;
}) => {
  const onClick = (option: string) => {
    setValue(option);
    onNext();
  };
  return (
    <Stack spacing={3} pb={5}>
      {options?.map((option) => (
        <Button colorScheme="pink" onClick={onClick as any} key={option}>
          {option}
        </Button>
      ))}
    </Stack>
  );
};

export default ButtonOptions;
