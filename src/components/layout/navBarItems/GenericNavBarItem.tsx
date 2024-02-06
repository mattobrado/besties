import { Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useLogout } from "../../../hooks/authHooks";

const GenericNavBarItem = ({
  label,
  to,
  isLogout,
}: {
  label: string;
  to?: string;
  isLogout?: boolean;
}) => {
  const { logout } = useLogout();

  return (
    <Button
      as={ReactRouterLink}
      to={to}
      onClick={isLogout ? logout : () => {}}
      variant="ghost"
      size={"sm"}
    >
      {label}
    </Button>
  );
};

export default GenericNavBarItem;
