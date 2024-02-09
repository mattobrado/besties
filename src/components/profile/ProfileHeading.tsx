import { Center, Heading, Divider } from "@chakra-ui/react";

const ProfileHeading = ({ text }: { text: string }) => (
  <>
    <Center>
      <Heading size={"lg"}>
        <i>{text}</i>
      </Heading>
    </Center>
    <Divider />
  </>
);

export default ProfileHeading;
