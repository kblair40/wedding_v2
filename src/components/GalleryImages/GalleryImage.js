import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryImage = ({ src, onClick, scrollPosition }) => {
  const rerenders = useRef(0);
  useEffect(() => {
    rerenders.current++;
    console.log("\n\nRERENDER COUNT:", rerenders.current);
  }, [scrollPosition]);

  return (
    <Box onClick={onClick} cursor="pointer" position="relative">
      <LazyLoadImage
        src={src}
        scrollPosition={scrollPosition}
        afterLoad={() => console.log("\n", `${src} LOADED!`)}
      />
    </Box>
  );
};

export default GalleryImage;
