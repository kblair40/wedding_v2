export const glass = {
  backdropFilter: "blur(16px) saturate(180%)",
  bg: "rgba(255, 255, 255, 0.75)",
  borderRadius: "12px", // keep
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
    bg: "gray.700",
    color: "#fff",
  },
  _active: { bg: "text.secondary" },
};
