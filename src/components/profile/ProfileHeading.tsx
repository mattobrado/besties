import { Center, Heading, Divider } from "@chakra-ui/react";

export const ProfileHeading = ({ text }: { text: string }) => (
  <>
    <Center>
      <Heading size={"lg"}>
        <i>{text}</i>
      </Heading>
    </Center>
    <Divider />
  </>
);
