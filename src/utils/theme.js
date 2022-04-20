import { extendTheme } from "@chakra-ui/react";
// https://colordesigner.io/

const theme = extendTheme({
  colors: {
    primary: {
      main: "#F8EEF1", // current
      50: "#FFFFFF",
      100: "#fefdfe",
      200: "#fefcfc",
      300: "#fdfafb",
      400: "#fcf8f9",
      500: "#F8EEF1",
      600: "#eaccd5",
      700: "#dca9b8",
      800: "#cd879c",
      900: "#bf6480",
    },
    secondary: {
      main: "#EC9A98", // pink
      50: "#FFFFFF",
      100: "#fdf5f5",
      200: "#fbebea",
      300: "#f9e1e0",
      400: "#f7d7d6",
      500: "#EC9A98",
      600: "#e67a77",
      700: "#e05a56",
      800: "#da3a36",
      900: "#c52824",
    },
    neutral: {
      black: "#344148",
      main: "#344148",
      white: "#f8eef1",
      50: "#e9edef",
      100: "#d2dadf",
      200: "#bcc8ce",
      300: "#a5b6be",
      400: "#8fa3ae",
      500: "#79919e",
      600: "#657e8b",
      700: "#546975",
      800: "#44555e",
      900: "#344148",
    },
    error: {
      main: "#B50100",
      50: "#ffffff",
      100: "#ffdede",
      200: "#ffbebd",
      300: "#ff9d9c",
      400: "#ff7c7b",
      500: "#B50100",
      600: "#a30100",
      700: "#910100",
      800: "#7f0100",
      900: "#6d0100",
    },

    text: {
      primary: "rgba(52, 65, 72, 1)",
      secondary: "rgba(52, 65, 72, .78)",
      tertiary: "rgba(52, 65, 72, .51)",
      muted: "rgba(52, 65, 72 .38)",
    },
    // colorScheme for use with Radio and Checkbox components
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
  },
  components: {
    Radio: {
      defaultProps: {
        colorScheme: "darkScheme",
      },
    },
    Checkbox: {
      defaultProps: {
        colorScheme: "darkScheme",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: 500,
        color: "neutral.black",
      },
    },
    // Input: {},
    Text: {
      sizes: {
        "2xs": { fontSize: "10px" },
        xs: { fontSize: "12px" },
        sm: { fontSize: "14px" },
        md: { fontSize: "16px" },
        lg: { fontSize: "22px" },
        xl: { fontSize: "24px" },
        "2xl": { fontSize: "26px" },
        "3xl": { fontSize: "28px" },
      },
      defaultProps: {
        fontSize: "md",
      },
      baseStyle: {
        color: "neutral.black",
        fontWeight: "400",
      },
    },
    Heading: {
      sizes: {
        xs: { fontSize: "14px" },
        sm: { fontSize: "18px" },
        md: { fontSize: "22px" },
        lg: { fontSize: "24px" },
        xl: { fontSize: "26px" },
        "2xl": { fontSize: "28px" },
        "3xl": { fontSize: "30px" },
        "4xl": { fontSize: "32px" },
        "5xl": { fontSize: "34px" },
        "6xl": { fontSize: "36px" },
      },
      defaultProps: {
        size: "md",
      },
      baseStyle: {
        color: "neutral.black",
        fontWeight: "300",
      },
    },
  },
  fonts: {
    heading: "Cormorant Garamond",
    body: "Open Sans",
    mono: "Josefin Slab",
  },
});

export default theme;
