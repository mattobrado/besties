import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { content } from "../../lib/content";
import { Link as ReactRouterLink } from "react-router-dom";

export const AuthHeading = ({
  title,
  callToAction,
  link,
}: AuthHeadingPropsType) => (
  <Stack spacing={{ base: "1", md: "3" }} textAlign="center">
    <Heading fontSize={"6xl"}>{content.logo}</Heading>
    <Heading size={{ base: "xs", md: "sm" }}>{title}</Heading>
    <Text>
      {callToAction}{" "}
      <Link as={ReactRouterLink} to={link.to}>
        <u>{link.label}</u>
      </Link>
    </Text>
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
