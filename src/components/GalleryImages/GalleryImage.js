import React from "react";
import { Box } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryImage = ({ src, onClick, scrollPosition }) => {
  return (
    <Box onClick={onClick} cursor="pointer" position="relative">
      <LazyLoadImage
        src={src}
        threshold={3000}
        scrollPosition={scrollPosition}
        afterLoad={() => console.log("\n", `${src} LOADED!`)}
      />
    </Box>
  );
};

export default GalleryImage;
