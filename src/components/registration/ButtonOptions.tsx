import { Button, Stack } from "@chakra-ui/react";
import { useAuth, useUpdateUser } from "src/hooks";

const ButtonOptions = ({
  options,
  field,
  goToNext,
}: {
  options?: string[];
  goToNext: Function;
  field: string;
}) => {
  const { authUser } = useAuth();
  const { updateUser, isLoading } = useUpdateUser(authUser?.id);
  return (
    <Stack spacing={3} pb={5}>
      {options?.map((option) => (
        <Button
          colorScheme={"brand"}
          onClick={() => {
            updateUser({ [field]: option }).then(() => goToNext());
          }}
          key={option}
          isLoading={isLoading}
          backgroundColor={option === "Revenge" ? "black" : undefined}
        >
          {option}
        </Button>
      ))}
    </Stack>
  );
};

export default ButtonOptions;
