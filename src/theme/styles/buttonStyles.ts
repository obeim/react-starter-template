import { Button } from "@mantine/core";

export default Button.extend({
  defaultProps: {
    radius: "md",
    variant: "outline",
    fw: "bold",
    size: "lg",
  },
  classNames: {
    root: "text-white border-2 border-dark-grey2  rounded-lg focus:outline-none focus:border-primary",
    label: "text-base",
  },

  styles(_theme, { variant }) {
    return {
      root: {
        ...(variant?.includes("primary") && {
          borderColor: _theme.colors.blue[1],
          backgroundColor: _theme.colors.blue[6],
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "8px",
          ...(variant?.includes("Outline") && {
            backgroundColor: "transparent",
            color: _theme.colors.blue[6],
            borderColor: _theme.colors.blue[6],
          }),
        }),
        ...(variant?.includes("Fixed") && { height: "60px" }),
        ...(variant?.includes("Long") && { minWidth: "230px" }),
      },
    };
  },
});
