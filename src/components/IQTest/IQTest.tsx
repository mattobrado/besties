import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import Logo from "../layout/Logo";
import { HEX_COLORS } from "../../theme/colors";
import { Outlet, Link as ReactRouterLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

const IQTest = () => {
  const { pathname } = useLocation();

  const isQuestionsPath = pathname.startsWith(ROUTES.QUESTIONS);
  const percentComplete = 20;

  return (
    <>
      <Logo />
      <Box p={4}>
        {!isQuestionsPath && (
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
                style={{
                  backgroundColor: HEX_COLORS.THE_GENIUS_PROGRAM_PRIMARY,
                }}
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
        )}
        <Outlet />
      </Box>
      <Box pt={2} pb={6} bg={"gray.800"}>
        <Center>
          <Text fontSize={"sm"}>{percentComplete}% Complete</Text>
        </Center>
        <Center>
          <Flex color="white" w={"150px"} h={"4px"}>
            <Box
              w={`${percentComplete}%`}
              style={{
                backgroundColor: HEX_COLORS.THE_GENIUS_PROGRAM_PRIMARY,
              }}
            />
            <Box w={`${100 - percentComplete}%`} bg={"white"}>
              {" "}
            </Box>
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default IQTest;
