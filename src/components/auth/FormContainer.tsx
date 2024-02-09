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
  <Container maxW="lg" px={{ base: "0", sm: "0" }}>
    <Stack spacing="8">
      {authHeadingProps && <AuthHeading {...authHeadingProps} />}
      <Box
        py={{ base: "0", sm: "8" }}
        bg={{ base: "transparent", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="1" as={"form"} pb={8}>
          {children}
        </Stack>
        <Box layerStyle={"black"}>
          <Button
            colorScheme="pink"
            type="submit"
            isLoading={buttonProps?.isLoading}
            loadingText={buttonProps?.loadingText}
            onClick={onSubmit as any}
          >
            <Box w={"96px"} fontSize={"lg"} layerStyle={"black"}>
              {buttonProps?.label}
            </Box>
          </Button>
        </Box>
      </Box>
    </Stack>
  </Container>
);

export default FormContainer;
