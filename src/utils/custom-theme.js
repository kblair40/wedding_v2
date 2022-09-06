export const fontSizes = {
  mdt: "16px",
  lgt: "18px",
  xlt: "20.25px",
  "2xlt": "22.78px",
  "3xl": "30.78px",
};

export const colors = {
  primary: {
    50: "#e6ebf2",
    100: "#bfcddf",
    300: "#6e8eb4",
    400: "#4b75a6",
    900: "#00326d",
  },
  neutral: {
    black: "#344148",
    50: "#e9edef",
    100: "#d2dadf",
    700: "#546975",
    800: "#44555e",
    900: "#344148",
  },
  error: {
    50: "#ffffff",
    100: "#ffdede",
    200: "#ffbebd",
    300: "#ff9d9c",
    400: "#ff7c7b",
    500: "#B50100",
    700: "#910100",
  },
  darkScheme: {
    50: "#999",
    100: "#888",
    200: "#777",
    300: "#666",
    400: "#555",
    500: "#444",
    600: "#333",
    700: "#2d2d2d",
    800: "#1b1b1b",
    900: "#0d0d0d",
  },
  text: {
    primary: "rgba(52, 65, 72, 1)",
    secondary: "rgba(52, 65, 72, .78)",
    tertiary: "rgba(52, 65, 72, .51)",
  },
};

const theme = {
  fonts: {
    heading: "Cormorant Garamond",
    body: "Cabin",
  },
  breakpoints: {
    xs: "26em", // 416px
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
};

const components = {
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
};
