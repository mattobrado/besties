import { Center, Heading, Divider } from "@chakra-ui/react";
import { COLORS } from "../../theme/colors";

const ProfileHeading = ({ text }: { text: string }) => (
  <>
    <Center>
      <Heading color={COLORS.BRAND} size={"lg"}>
        <i>{text}</i>
      </Heading>
    </Center>
    <Divider />
  </>
);

export default ProfileHeading;
