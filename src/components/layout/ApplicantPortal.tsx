import {
  Text,
  Avatar as ChakraAvatar,
  Flex,
  Box,
  Stack,
  Center,
  Button,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth, useLogout, useUpdateUser } from "src/hooks";
import { ROUTES, TOAST_PROPS, schoolSubjects } from "src/lib/constants";

const ApplicantPortal = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();
  const { logout } = useLogout();
  const toast = useToast();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.APPLICANT)) {
      if (!authUser?.isApplicationSubmitted) {
        toast({
          title:
            "You must pass the Genius IQ Test before you can access members-only content",
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.IQ_TEST);
      } else {
        toast({
          title: "Your application is under review.",
          status: "success",
          ...TOAST_PROPS,
        });
      }
    }
  }, [pathname, authUser?.isApplicationSubmitted, isLoading]);
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
    <Flex
      flexWrap="wrap"
      justifyContent="space-evenly"
      layerStyle={"white"}
      minHeight="100vh"
    >
      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles}>
          <Stack p={4} spacing={1} w={"100%"}>
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
              <Text fontSize={"2xl"}>
                Talented{" "}
                <Text as="b" style={{ color: authUser?.favoriteColor }}>
                  {schoolSubjects
                    .find((item) => item.subject === authUser?.fieldOfExpertise)
                    ?.profession.toLowerCase()}
                </Text>
              </Text>
            </Center>
            <Center>
              <Text fontSize={"lg"}>Presenting on:</Text>
            </Center>
            <Text
              border={"2px"}
              borderRadius={"10px"}
              w={"100%"}
              minHeight={28}
              style={innerBoxStyles}
            >
              {authUser?.mystery}
            </Text>
            <Button
              onClick={() => {
                updateUser({ isApplicationSubmitted: false }).then(() =>
                  navigate(ROUTES.IQ_TEST)
                );
              }}
              size={"lg"}
              borderWidth={"4px"}
              borderColor={"black"}
            >
              Change my answers
            </Button>
            <Center>
              <Button
                leftIcon={<ArrowBackIcon />}
                colorScheme="black"
                variant="ghost"
                size={"sm"}
                onClick={() => {
                  logout();
                }}
                position={"fixed"}
                bottom={16}
                backdropFilter="auto"
              >
                {"LOG OUT"}
              </Button>
            </Center>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ApplicantPortal;
