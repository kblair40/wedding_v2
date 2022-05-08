export const glass = {
  backdropFilter: "blur(16px) saturate(180%)",
  webkitBackdropFilter: "blur(16px) saturate(180%)",
  bg: "rgba(255, 255, 255, 0.75)",
  borderRadius: "12px", // keep
  // bg: "white",
};

export const outlineButton = {
  px: "32px",
  bg: "white",
  transition: ".2s ease-in-out",
  border: "1px solid",
  borderColor: "neutral.black",
  variant: "outline",
  fontWeight: "600",
  _hover: {
    bg: "neutral.900",
    color: "#fff",
  },
  _active: { bg: "text.secondary" },
};
