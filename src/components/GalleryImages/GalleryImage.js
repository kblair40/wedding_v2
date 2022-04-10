import React from "react";
import { Box, Image } from "@chakra-ui/react";

const GalleryImage = ({ src }) => {
  return (
    <Box>
      <Image src={src} maxWidth="100%" />
    </Box>
  );
};

export default GalleryImage;
