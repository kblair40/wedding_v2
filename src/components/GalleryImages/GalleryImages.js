import React from "react";
import { Box } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import { trackWindowScroll } from "react-lazy-load-image-component";

import GalleryImage from "./GalleryImage";

const GalleryImages = ({ imagesArray, onClick, scrollPosition }) => {
  const colBreakpoints = {
    default: 4,
    768: 2,
    1280: 3,
  };

  return (
    <Box
      px="8px"
      mt="32px"
      sx={{
        ".masonry-grid": {
          display: "flex",
          marginLeft: "-1rem" /* gutter size offset */,
          width: "auto",
        },
        ".masonry-grid_column": {
          paddingLeft: "1rem",
          backgroundClip: "padding-box",
        },
        ".masonry-grid_column > div": {
          background: "gold.main",
          marginBottom: "1rem",
        },
      }}
    >
      <Masonry
        breakpointCols={colBreakpoints}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {imagesArray.map((img, i) => (
          <GalleryImage
            key={i}
            src={img}
            onClick={() => onClick(i)}
            scrollPosition={scrollPosition}
          />
        ))}
      </Masonry>
    </Box>
  );
};

export default trackWindowScroll(GalleryImages);
