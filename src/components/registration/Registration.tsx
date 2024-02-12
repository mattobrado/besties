import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import { useContext } from "react";
import {
  Outlet,
  Link as ReactRouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Logo } from "src/components/layout";
import { ContentContext } from "src/context";
import { useAuth } from "src/hooks";
import { ROUTES } from "src/lib";

const Registration = () => {
  const { authUser } = useAuth();
  const content = useContext(ContentContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isRootPath = pathname.endsWith(ROUTES.REGISTER);

  if (authUser?.isApplicationSubmitted) {
    navigate(ROUTES.APPLICATION_STATUS);
  }

  return (
    <Container p={0}>
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
                variant={"brandSecondary"}
              >
                Take the Test
              </Button>
            </Center>
            <Center>{content.video}</Center>
          </Stack>
        </Box>
      ) : (
        <Outlet />
      )}
    </Container>
  );
};

export default Registration;
