import { createTheme } from "@mantine/core";
import buttonStyles from "./styles/buttonStyles";

const theme = createTheme({
  primaryColor: "mycolor",
  colors: {
    mycolor: [
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
      "#fffff",
    ],
  },
  components: {
    Button: buttonStyles,
  },
});
export default theme;
