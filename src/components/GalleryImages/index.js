import React from "react";
import { Box } from "@chakra-ui/react";
import Masonry from "react-masonry-css";

import GalleryImage from "./GalleryImage";

const GalleryImages = ({ imagesArray, onClick }) => {
  const colBreakpoints = {
    default: 2,
    768: 2,
    1280: 3,
  };

  return (
    <Box
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
          <GalleryImage src={img} onClick={() => onClick(i)} />
        ))}
      </Masonry>
    </Box>
  );
};

export default GalleryImages;
