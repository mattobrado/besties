import { Stack, Heading, Text, Link } from "@chakra-ui/react";
import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import ContentContext from "../layout/ContentProvider";

export const AuthHeading = ({
  title,
  callToAction,
  link,
}: AuthHeadingPropsType) => {
  const content = useContext(ContentContext);
  return (
    <Stack>
      {content.loginLogo && (
        <Heading fontSize={"6xl"}>{content.loginLogo}</Heading>
      )}
      <Heading size={{ base: "2xl", md: "md" }}>{title}</Heading>
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
};

export type AuthHeadingPropsType = {
  title?: string;
  callToAction?: string;
  link?: {
    to: string;
    label: string;
  };
};
