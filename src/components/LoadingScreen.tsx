import { AbsoluteCenter, Container, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => (
  <Container py={{ base: "48" }}>
    <AbsoluteCenter>
      <Spinner size="lg" />
    </AbsoluteCenter>
  </Container>
);

export default LoadingScreen;
