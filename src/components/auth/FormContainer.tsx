import { Stack, Container, Box, Button } from "@chakra-ui/react";
import { AuthHeading, AuthHeadingPropsType } from "./AuthHeading";

const FormContainer = ({
  authHeadingProps,
  buttonProps,
  children,
  onSubmit,
}: {
  authHeadingProps?: AuthHeadingPropsType;
  buttonProps?: { isLoading: boolean; label: string; loadingText: string };
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) => (
  <Container maxW="lg" px={{ base: "0", sm: "16" }}>
    <Stack spacing="8">
      {authHeadingProps && <AuthHeading {...authHeadingProps} />}
      <Box
        py={{ base: "0", sm: "8" }}
        bg={{ base: "transparent", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="1" as={"form"} onSubmit={onSubmit as any}>
          {children}
          <Button
            mt="4"
            type="submit"
            size="md"
            w="full"
            isLoading={buttonProps?.isLoading}
            loadingText={buttonProps?.loadingText}
            bg={"white"}
          >
            {buttonProps?.label}
          </Button>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default FormContainer;
