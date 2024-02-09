import { withDefaultStyles } from "chakra-ui-bottom-navigation";

const bottomNavigationTheme = withDefaultStyles({
  parts: ["Box", "container", "item", "label", "icon"],
  baseStyle: {
    container: {
      position: "fixed",
      display: "flex",
      justifyContent: "space-between",
    },
    item: {
      flex: 1,
      opacity: 1,
      _selected: {
        opacity: 1,
      },
    },
  },
});

export default bottomNavigationTheme;
