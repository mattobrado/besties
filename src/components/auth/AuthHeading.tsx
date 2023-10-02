import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { CONTENT } from "../../lib/constants";

export const AuthHeading = ({
  title,
  callToAction,
  link,
}: AuthHeadingPropsType) => (
  <Stack spacing="6">
    <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
      <Heading>{CONTENT.heartEmoji}</Heading>
      <Heading size={{ base: "xs", md: "sm" }}>{title}</Heading>
      <Text color="fg.muted">
        {callToAction} <Link href={link.href}>{link.label}</Link>
      </Text>
    </Stack>
  </Stack>
);

export type AuthHeadingPropsType = {
  title: string;
  callToAction: string;
  link: {
    href: string;
    label: string;
  };
};
