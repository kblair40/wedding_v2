import React from "react";
import { Box } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryImage = ({ src, onClick, scrollPosition }) => {
  return (
    <Box onClick={onClick} cursor="pointer" position="relative">
      <LazyLoadImage
        src={src}
        threshold={3000}
        effect="blur"
        scrollPosition={scrollPosition}
      />
    </Box>
  );
};

export default GalleryImage;
