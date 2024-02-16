import {
  Text,
  Avatar as ChakraAvatar,
  Flex,
  Box,
  Stack,
  Center,
  Button,
  useToast,
  Container,
  DarkMode,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useAuth, useLogout, useUpdateUser } from "src/hooks";
import { ROUTES, TOAST_PROPS } from "src/lib";
import { ContentContext } from "src/context";

export const ApplicantPortal = () => {
  const { authUser, isLoading } = useAuth();
  const content = useContext(ContentContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout } = useLogout();
  const toast = useToast();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.APPLICATION_STATUS)) {
      if (!authUser?.isApplicationSubmitted) {
        toast({
          title:
            "You must complete the Genius IQ Test before you can access members-only content",
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.REGISTER);
      }
    }
  }, [pathname, authUser?.isApplicationSubmitted, isLoading]);

  useEffect(() => {
    if (authUser?.isApplicationSubmitted) {
      toast({
        title: "Your application is under review.",
        status: "success",
        ...TOAST_PROPS,
      });
    }
  }, [authUser?.isApplicationSubmitted]);

  const { updateUser } = useUpdateUser(authUser?.id);

  const outerBoxStyles = {
    w: "100%",
    background:
      "url(https://firebasestorage.googleapis.com/v0/b/myplace-618e9.appspot.com/o/assets%2F37Es.gif?alt=media&token=dd12e387-fa30-40e2-9729-7afaabf4b991) center/cover no-repeat",
  };

  const innerBoxStyles = {
    display: "flex",
    justifyContent: "center",
    boxSize: "full",
    color: "white",
  };

  return (
    <DarkMode>
      <Container>
        <Flex flexWrap="wrap" justifyContent="space-evenly" minHeight="100vh">
          <Box sx={outerBoxStyles}>
            <Box sx={innerBoxStyles}>
              <Stack p={4} pt={5} spacing={2} w={"100%"}>
                <Stack spacing={0}>
                  <Center>
                    <ChakraAvatar
                      name={authUser?.fullName}
                      src={authUser?.avatar}
                      loading="lazy"
                      size={"2xl"}
                      borderColor={authUser?.favoriteColor}
                      borderWidth={3}
                    />
                  </Center>
                  <Center>
                    <Text as="b" fontSize={"4xl"}>
                      {authUser?.fullName}
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize={"xl"}>
                      Talented{" "}
                      <Text as="b" style={{ color: authUser?.favoriteColor }}>
                        {content.schoolSubjects
                          .find(
                            (item) =>
                              item.subject === authUser?.fieldOfExpertise
                          )
                          ?.profession.toLowerCase()}
                      </Text>
                    </Text>
                  </Center>
                  <Center>
                    <Text fontSize={"md"}>Presenting on:</Text>
                  </Center>
                </Stack>
                <Text
                  border={"1px"}
                  borderRadius={"10px"}
                  w={"100%"}
                  minHeight={28}
                  style={innerBoxStyles}
                  backdropFilter="auto"
                  backdropBlur="64px"
                  p={1}
                >
                  {authUser?.mystery}
                </Text>
                <Button
                  onClick={() => {
                    updateUser({ isApplicationSubmitted: false }).then(() =>
                      navigate(ROUTES.REGISTRATION)
                    );
                  }}
                  size={"lg"}
                  borderWidth={"2px"}
                  borderColor={"black"}
                  bg={"white"}
                  color={"black"}
                  id="editProfile"
                >
                  Change my answers
                </Button>
                <Center>
                  <Button
                    leftIcon={<ArrowBackIcon />}
                    colorScheme="black"
                    variant="ghost"
                    size={"md"}
                    onClick={() => {
                      logout();
                    }}
                    position={"fixed"}
                    bottom={20}
                    backdropFilter="auto"
                    backdropBlur="64px"
                    id="logout"
                    borderWidth={"1px"}
                    borderRadius={"10px"}
                  >
                    {"LOG OUT"}
                  </Button>
                </Center>
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </DarkMode>
  );
};
