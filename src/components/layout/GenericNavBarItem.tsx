import { Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useLogout } from "src/hooks";

export const GenericNavBarItem = ({
  label,
  to,
  isLogout,
  state,
  onClick,
  variant,
}: {
  label: string;
  to?: string;
  isLogout?: boolean;
  state?: {
    [key: string]: string;
  };
  variant?: string;
  onClick?: () => void;
}) => {
  const { logout } = useLogout();

  return (
    <Button
      as={ReactRouterLink}
      to={to ?? ""}
      state={state}
      onClick={
        onClick
          ? isLogout
            ? () => {
                onClick();
                logout();
              }
            : onClick
          : () => {}
      }
      variant={variant ?? "ghost"}
      size={"sm"}
    >
      {label.toUpperCase()}
    </Button>
  );
};
