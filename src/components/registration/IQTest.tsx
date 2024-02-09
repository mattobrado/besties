import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import Logo from "../layout/Logo";
import { Outlet, Link as ReactRouterLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

const IQTest = () => {
  const { pathname } = useLocation();

  const isQuestionsPath = pathname.startsWith(ROUTES.QUESTIONS);

  return (
    <Container p={0} layerStyle="white">
      <Logo />
      {!isQuestionsPath ? (
        <Box p={4}>
          <Stack spacing={5}>
            <Center>
              <Text fontSize={"3xl"}>IQ Test</Text>
            </Center>
            <Center>
              <Heading size={"2xl"}>Are you a Genius?</Heading>
            </Center>
            <Center>
              <Button
                as={ReactRouterLink}
                to={ROUTES.QUESTIONS}
                colorScheme="pink"
              >
                Take the Test
              </Button>
            </Center>
            <Center>
              <iframe
                width="335"
                height="188"
                src="https://www.youtube.com/embed/enijgkRpsE4?si=z5HIO_BCP594gvXi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Center>
          </Stack>
        </Box>
      ) : (
        <Outlet />
      )}
    </Container>
  );
};

export default IQTest;
