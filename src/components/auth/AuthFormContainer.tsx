import { Stack, Container, Box } from "@chakra-ui/react";
import { AuthHeading, AuthHeadingPropsType } from "./AuthHeading";

const AuthFormContainer = ({
  authHeadingProps,
  children,
  onSubmit,
}: {
  authHeadingProps: AuthHeadingPropsType;
  children: JSX.Element | JSX.Element[];
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}) => (
  <Container
    maxW="lg"
    py={{ base: "12", md: "24" }}
    px={{ base: "0", sm: "8" }}
  >
    <Stack spacing="8">
      <AuthHeading {...authHeadingProps} />
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={{ base: "transparent", sm: "bg.surface" }}
        boxShadow={{ base: "none", sm: "md" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="6">
          <form onSubmit={onSubmit}>{children}</form>
        </Stack>
      </Box>
    </Stack>
  </Container>
);

export default AuthFormContainer;
