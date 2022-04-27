import { extendTheme } from "@chakra-ui/react";
// https://colordesigner.io/

const theme = extendTheme({
  colors: {
    primary: {
      main: "#6e8eb4", // current
      50: "#e6ebf2",
      100: "#bfcddf",
      200: "#97adca",
      300: "#6e8eb4",
      400: "#4b75a6",
      500: "#085e9f",
      600: "#005695",
      700: "#004c8a",
      800: "#00437f",
      900: "#00326d",
    },
    // 6e8eb4 - nice shade of blue that should pair well with secondary.600
    secondary: {
      main: "#b4946e", // pink
      50: "#fdecd0",
      100: "#e9d0b2",
      200: "#d0b291",
      300: "#b4946e",
      400: "#9f7d52",
      500: "#896637",
      600: "#7e5c31",
      700: "#6f4f27",
      800: "#624120",
      900: "#533216",
    },
    neutral: {
      black: "#344148",
      main: "#344148",
      // black: "#14230C",
      // main: "#14230C",
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
        fontWeight: 400,
        color: "neutral.black",
      },
    },
    // Input: {},
    Text: {
      sizes: {
        "2xs": { fontSize: "11.24px" },
        xs: { fontSize: "12.64px" },
        sm: { fontSize: "14.22px" },
        md: { fontSize: "16px" },
        lg: { fontSize: "18px" },
        xl: { fontSize: "20.25px" },
        "2xl": { fontSize: "22.78px" },
        "3xl": { fontSize: "25.63px" },
        "4xl": { fontSize: "28.83px" },
      },
      defaultProps: {
        size: "md",
      },
      baseStyle: {
        color: "neutral.black",
        fontWeight: "400",
        fontSize: "md",
      },
    },
    Heading: {
      sizes: {
        xs: { fontSize: "16.86px" },
        sm: { fontSize: "18.96px" },
        md: { fontSize: "21.33px" },
        lg: { fontSize: "24px" },
        xl: { fontSize: "27px" },
        "2xl": { fontSize: "30.38px" },
        "3xl": { fontSize: "34.17px" },
        "4xl": { fontSize: "38.44px" },
        "5xl": { fontSize: "43.25px" },
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
    body: "Cabin",
    mono: "Josefin Slab",
  },
});

export default theme;
