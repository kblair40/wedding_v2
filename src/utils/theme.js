import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Radio: {
      baseStyle: {
        container: {
          borderColor: "neutral.800",
          _checked: {
            borderColor: "#000",
          },
        },
        control: {
          _hover: {
            bg: "primary.50",
          },
          _checked: {
            bg: "neutral.800",
            borderColor: "neutral.900",
            _hover: {
              borderColor: "neutral.900",
              bg: "neutral.800",
            },
            _before: {
              bg: "primary.50",
            },
          },
        },
      },
      defaultProps: {
        colorScheme: undefined,
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: "darkScheme",
      },
    },
    Button: {
      baseStyle: {
        color: "neutral.black",
      },
      variants: {
        main_filled: {
          fontWeight: 600,
          color: "#fff",
          bg: "primary.400",
          transition: ".2s",
          _hover: {
            bg: "primary.500",
          },
          _loading: {
            bg: "primary.300",
            _hover: { bg: "primary.300" },
          },
        },
        danger: {
          fontWeight: 600,
          color: "text.primary",
          bg: "error.100",
          transition: ".2s",
          _hover: { bg: "error.200" },
          _active: { bg: "error.300" },
        },
        ghost: {
          color: "primary.900",
          _hover: {
            bg: "primary.50",
          },
        },
      },
    },
  },
  breakpoints: {
    xs: "26em", // 416px
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;
