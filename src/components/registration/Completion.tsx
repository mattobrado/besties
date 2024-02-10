import {
  Text,
  Avatar as ChakraAvatar,
  Flex,
  Box,
  Stack,
  Center,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/authHooks";
import { AddIcon } from "@chakra-ui/icons";
import { Link as ReactRouterLink } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

const Completion = () => {
  const { authUser } = useAuth();
  const outerBoxStyles = {
    w: "100%",
    background:
      "url(https://firebasestorage.googleapis.com/v0/b/myplace-618e9.appspot.com/o/assets%2F3UAP.gif?alt=media&token=c73a2e46-2566-4d48-b184-555cd77df963) center/cover no-repeat",
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
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropBlur="2px">
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
            <Text as="b" layerStyle={"black"} fontSize={"2xl"}>
              Your application is under review.
            </Text>
            <Button
              as={ReactRouterLink}
              to={ROUTES.HOME}
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

export default Completion;
