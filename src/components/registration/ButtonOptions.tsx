import { Button, Stack } from "@chakra-ui/react";
import { useAuth, useUpdateUser } from "src/hooks";
import type { RegistrationStepPropsType } from "src/lib/types";

export const ButtonOptions = ({
  options,
  field,
  onNextButtonClick,
}: RegistrationStepPropsType) => {
  const { authUser } = useAuth();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);
  return (
    <Stack spacing={3} pb={5}>
      {options?.map((option, index) => (
        <Button
          colorScheme={"brand"}
          onClick={() => {
            updateUser({ [field]: option }).then(() => onNextButtonClick());
          }}
          key={option}
          isLoading={isLoading}
          backgroundColor={option === "Revenge" ? "black" : undefined}
          id={`option-${index}`}
        >
          {option}
        </Button>
      ))}
    </Stack>
  );
};
