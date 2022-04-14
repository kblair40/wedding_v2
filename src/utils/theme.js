import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    neutral: {
      black: "#2D2D2D",

      white: "#FAFAFA",
      50: "#FAFAFA",
      100: "#F7F5F0",
      200: "#F0F0F0",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#343A40",
      // secondary: "rgba(0, 0, 0, 0.92)",
      tertiary: "#6C757D",
    },
    creme: {
      main: "#DEBFB8",
    },
    gold: {
      main: "#DCCAAA",
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
    Text: {
      sizes: {
        "2xs": { fontSize: "10px" },
        xs: { fontSize: "12px" },
        sm: { fontSize: "14px" },
        md: { fontSize: "16px" },
        lg: { fontSize: "22px" },
        xl: { fontSize: "25px" },
      },
      defaultProps: {
        size: "md",
      },
      baseStyle: {
        color: "#2d2d2d",
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
        color: "#2d2d2d",
        fontWeight: "300",
      },
    },
  },
  fonts: {
    // heading: "Josefin Sans",
    // heading: "EB Garamond",
    heading: "Cormorant Garamond",
    // body: "Josefin Slab",
    // body: "Cormorant Garamond",
    body: "Poppins",
    mono: "Josefin Slab",
  },
});

export default theme;
