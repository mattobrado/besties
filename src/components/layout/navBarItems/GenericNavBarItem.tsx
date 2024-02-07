import { Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useAuth, useLogout } from "../../../hooks/authHooks";
import { ROUTES } from "../../../lib/constants";

const GenericNavBarItem = ({
  label,
  to,
  isLogout,
  state,
  color,
  onClick,
}: {
  label: string;
  to?: string;
  isLogout?: boolean;
  state?: {
    [key: string]: string;
  };
  color?: string;
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
      variant="ghost"
      size={"sm"}
      color={color}
    >
      {label.toUpperCase()}
    </Button>
  );
};

export default GenericNavBarItem;
