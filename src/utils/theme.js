import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Radio: {
      baseStyle: {
        container: {
          borderColor: "gray.700",
          _checked: {
            borderColor: "#000",
          },
        },
        control: {
          transition: "background 0.3s",
          _hover: {
            bg: "gray.300",
          },
          _checked: {
            bg: "gray.700",
            borderColor: "gray.700",
            _hover: {
              borderColor: "gray.700",
              bg: "gray.700",
            },
            _before: {
              bg: "gray.200",
            },
          },
        },
      },
      defaultProps: {
        colorScheme: undefined,
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
