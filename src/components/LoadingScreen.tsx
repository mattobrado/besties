import { AbsoluteCenter, Container, Spinner } from "@chakra-ui/react";
import { COLORS } from "../lib/theme";

const LoadingScreen = () => (
  <Container py={{ base: "48" }}>
    <AbsoluteCenter>
      <Spinner color={COLORS.accent} size="xl" />
    </AbsoluteCenter>
  </Container>
);

export default LoadingScreen;
