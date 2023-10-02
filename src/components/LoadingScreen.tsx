import { Center, Container, Spinner } from "@chakra-ui/react";

const LoadingScreen = () => (
  <Container py={{ base: "48" }}>
    <Center h="100px">
      <Spinner size="lg" />
    </Center>
  </Container>
);

export default LoadingScreen;
