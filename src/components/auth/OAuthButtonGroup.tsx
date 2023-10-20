import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GoogleIcon, TwitterIcon } from "./ProviderIcons";
import { COLORS } from "../../theme/colors";

const providers = [
  { name: "Google", icon: <GoogleIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup outlineColor={COLORS.PRIMARY_FONT} variant="outline" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button key={name} flexGrow={1}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
