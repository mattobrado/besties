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
import { useAuth } from "../../hooks/authHooks";
import { AddIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES, TOAST_PROPS } from "../../lib/constants";
import { useEffect } from "react";
import { useUpdateUser } from "../../hooks/userHooks";

const ApplicantPortal = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authUser, isLoading } = useAuth();
  const toast = useToast();
  const { state } = useLocation();

  useEffect(() => {
    if (!isLoading && pathname.startsWith(ROUTES.APPLICANT)) {
      if (!authUser?.isApplicationSubmitted) {
        toast({
          title: state?.toastTitle,
          status: "error",
          ...TOAST_PROPS,
        });
        navigate(ROUTES.LOGIN);
      }
    }
  }, [pathname, authUser?.isApplicationSubmitted, isLoading]);
  const { updateUser } = useUpdateUser(authUser.id);

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
    fontSize: "20px",
  };
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-evenly"
      minHeight="100vh"
      layerStyle={"white"}
    >
      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles}>
          <Stack p={24}>
            <Center>
              <ChakraAvatar
                name={authUser?.fullName}
                src={authUser?.avatar}
                loading="lazy"
                size={"2xl"}
                icon={<AddIcon fontSize="1.5rem" />}
                borderColor={authUser?.favoriteColor}
                borderWidth={3}
              />
            </Center>
            <Text fontSize={"2xl"}>Your application is under review.</Text>
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
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ApplicantPortal;
