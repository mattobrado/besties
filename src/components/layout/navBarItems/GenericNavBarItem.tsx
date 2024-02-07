import { Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useLogout } from "../../../hooks/authHooks";

const GenericNavBarItem = ({
  label,
  to,
  isLogout,
  state,
}: {
  label: string;
  to?: string;
  isLogout?: boolean;
  state?: {
    [key: string]: string;
  };
}) => {
  const { logout } = useLogout();
  // const navigation = useNavigation();

  // const toComponentB = () => {
  //   navigate(to ?? "", { state: { id: 1, name: "sabaoon" } });
  // };

  return (
    <Button
      as={ReactRouterLink}
      to={to}
      state={state}
      onClick={isLogout ? logout : () => {}}
      variant="ghost"
      size={"sm"}
    >
      {label}
    </Button>
  );
};

export default GenericNavBarItem;
