import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    neutral: {
      black: "#2D2D2D",
      white: "#FAFAFA",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#343A40",
      tertiary: "#6C757D",
    },
    creme: {
      main: "#DEBFB8",
    },
    gold: {
      main: "#DCCAAA",
    },
  },
  components: {
    Text: {
      sizes: {
        xs: { fontSize: "12px" },
        sm: { fontSize: "14px" },
        md: { fontSize: "16px" },
        lg: { fontSize: "18px" },
        xl: { fontSize: "20px" },
      },
      defaultProps: {
        size: "md",
      },
      baseStyle: {
        color: "#2d2d2d",
        fontWeight: "500",
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
    //   Button: {
    //     // 1. We can update the base styles
    //     baseStyle: {
    //       fontWeight: 'bold', // Normally, it is "semibold"
    //     },
    //     // 2. We can add a new button size or extend existing
    //     sizes: {
    //       xl: {
    //         h: '56px',
    //         fontSize: 'lg',
    //         px: '32px',
    //       },
    //     },
    //     // 3. We can add a new visual variant
    //     variants: {
    //       'with-shadow': {
    //         bg: 'red.400',
    //         boxShadow: '0 0 2px 2px #efdfde',
    //       },
    //       // 4. We can override existing variants
    //       solid: (props) => ({
    //         bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    //       }),
    //     },
    //   },
  },
  fonts: {
    // heading: "Josefin Sans",
    heading: "EB Garamond",
    // heading: "Sawarbe Mincho",
    body: "Josefin Slab",
    mono: "Josefin Slab",
  },
});

export default theme;
