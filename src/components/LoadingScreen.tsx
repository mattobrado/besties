import { AbsoluteCenter, Container, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => (
  <Container py={{ base: "36" }}>
    <AbsoluteCenter>
      <Spinner variant={"custom"} size="xl" />
    </AbsoluteCenter>
  </Container>
);

export default LoadingScreen;
