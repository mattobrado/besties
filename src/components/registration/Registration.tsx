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
import {
  Outlet,
  Link as ReactRouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import { useAuth } from "src/hooks/authHooks";

const Registration = () => {
  const { pathname } = useLocation();
  const { authUser } = useAuth();
  const navigate = useNavigate();

  const isRootPath = pathname.endsWith(ROUTES.IQ_TEST);

  if (authUser?.isApplicationSubmitted) {
    navigate(ROUTES.APPLICANT);
  }

  return (
    <Container p={0} layerStyle="white">
      <Logo />
      {isRootPath ? (
        <Box p={4}>
          <Stack spacing={5}>
            ``
            <Center>
              <Text fontSize={"3xl"}>IQ Test</Text>
            </Center>
            <Center>
              <Heading size={"2xl"}>Are you a Genius?</Heading>
            </Center>
            <Center>
              <Button
                as={ReactRouterLink}
                to={ROUTES.REGISTRATION}
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

export default Registration;
