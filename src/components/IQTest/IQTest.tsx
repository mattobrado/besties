import { Button, Center, Heading, Stack, Text } from "@chakra-ui/react";

const IQTest = () => {
  return (
    <Stack py={5} spacing={5}>
      <Center>
        <Text fontSize={"3xl"}>IQ Test</Text>
      </Center>
      <Center>
        <Heading size={"2xl"}>Are you a Genius?</Heading>
      </Center>
      <Center>
        <Button>Take the Test</Button>
      </Center>
      <Center p={5}>
        <iframe
          width="335"
          height="188"
          src="https://www.youtube.com/embed/enijgkRpsE4?si=z5HIO_BCP594gvXi"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </Center>
    </Stack>
  );
};

export default IQTest;
