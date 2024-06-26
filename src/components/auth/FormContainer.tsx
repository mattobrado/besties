import { Stack, Container, Box, Button } from "@chakra-ui/react";
import { AuthHeading, type AuthHeadingPropsType } from "src/components/auth";

export const FormContainer = ({
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
  <Container maxW="lg" px={{ base: "0", sm: "0" }}>
    <Stack spacing="8">
      {authHeadingProps && <AuthHeading {...authHeadingProps} />}
      <Box
        py={{ base: "0", sm: "8" }}
        bg={{ base: "transparent", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="2" as={"form"} pb={8}>
          {children}
        </Stack>
        <Box>
          <Button
            variant={"brandPrimary"}
            type="submit"
            isLoading={buttonProps?.isLoading}
            loadingText={buttonProps?.loadingText}
            onClick={onSubmit as any}
          >
            <Box w={"96px"} fontSize={"lg"}>
              {buttonProps?.label}
            </Box>
          </Button>
        </Box>
      </Box>
    </Stack>
  </Container>
);
