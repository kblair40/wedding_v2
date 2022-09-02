import React from "react";
import { Box } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryImage = ({ src, onClick, scrollPosition }) => {
  // const [showImage, setShowImage] = useState(false);
  return (
    <Box onClick={onClick} cursor="pointer" position="relative">
      <LazyLoadImage
        src={src}
        // visibleByDefault={true}
        threshold={3000}
        effect="blur"
        scrollPosition={scrollPosition}
        // afterLoad={() => {
        //   console.log("\n", `${src} LOADED!`);
        //   setShowImage(true);
        // }}
      />
    </Box>
  );
};

export default GalleryImage;
