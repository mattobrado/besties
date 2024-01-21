import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { content } from "../../lib/content/bestiesContent";
import { Link as ReactRouterLink } from "react-router-dom";

export const AuthHeading = ({
  title,
  callToAction,
  link,
}: AuthHeadingPropsType) => (
  <Stack textAlign="center">
    <Heading fontSize={"6xl"}>{content.logo}</Heading>
    <Heading size={{ base: "lg", md: "sm" }}>{title}</Heading>
    {callToAction && link && (
      <Text>
        {callToAction}
        <Link as={ReactRouterLink} to={link.to}>
          <u>{link.label}</u>
        </Link>
      </Text>
    )}
  </Stack>
);

export type AuthHeadingPropsType = {
  title: string;
  callToAction?: string;
  link?: {
    to: string;
    label: string;
  };
};
