import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { CONTENT } from "../../lib/content";
import { Link as ReactRouterLink } from "react-router-dom";

export const AuthHeading = ({
  title,
  callToAction,
  link,
}: AuthHeadingPropsType) => (
  <Stack spacing="6">
    <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
      <Heading>{CONTENT.AUTH.heartEmoji}</Heading>
      <Heading size={{ base: "xs", md: "sm" }}>{title}</Heading>
      <Text color="fg.muted">
        {callToAction}{" "}
        <Link as={ReactRouterLink} to={link.to}>
          {link.label}
        </Link>
      </Text>
    </Stack>
  </Stack>
);

export type AuthHeadingPropsType = {
  title: string;
  callToAction: string;
  link: {
    to: string;
    label: string;
  };
};
