import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Masonry from "react-masonry-css";

import one from "assets/galleryImages/sydney/one.jpg";
import two from "assets/galleryImages/sydney/two.jpg";
import three from "assets/galleryImages/sydney/three.jpg";
import four from "assets/galleryImages/sydney/four.jpg";
import six from "assets/galleryImages/sydney/six.jpg";
import seven from "assets/galleryImages/sydney/seven.jpg";
import eight from "assets/galleryImages/sydney/eight.jpg";
import nine from "assets/galleryImages/sydney/nine.jpg";

import shan_one from "assets/galleryImages/shannon/shan_one.jpg";
import shan_two from "assets/galleryImages/shannon/shan_two.jpg";
import shan_three from "assets/galleryImages/shannon/shan_three.jpg";
import shan_four from "assets/galleryImages/shannon/shan_four.jpg";
import shan_five from "assets/galleryImages/shannon/shan_five.jpg";
import shan_six from "assets/galleryImages/shannon/shan_six.jpg";
import shan_seven from "assets/galleryImages/shannon/shan_seven.jpg";
import shan_eight from "assets/galleryImages/shannon/shan_eight.jpg";
import shan_nine from "assets/galleryImages/shannon/shan_nine.jpg";
import shan_ten from "assets/galleryImages/shannon/shan_ten.jpg";
import shan_eleven from "assets/galleryImages/shannon/shan_eleven.jpg";

import GalleryImage from "./GalleryImage";

const GalleryImages = () => {
  return (
    <Box
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
        breakpointCols={3}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        <GalleryImage src={shan_ten} maxW="100%" />
        <GalleryImage src={one} maxW="100%" />
        <GalleryImage src={shan_six} maxW="100%" />
        <GalleryImage src={two} maxW="100%" />
        <GalleryImage src={shan_two} maxW="100%" />
        <GalleryImage src={three} maxW="100%" />
        <GalleryImage src={shan_eight} maxW="100%" />
        <GalleryImage src={four} maxW="100%" />
        <GalleryImage src={shan_seven} maxW="100%" />
        <GalleryImage src={shan_four} maxW="100%" />
        <GalleryImage src={six} maxW="100%" />
        <GalleryImage src={shan_five} maxW="100%" />
        <GalleryImage src={shan_nine} maxW="100%" />
        <GalleryImage src={seven} maxW="100%" />
        <GalleryImage src={shan_eleven} maxW="100%" />
        <GalleryImage src={eight} maxW="100%" />
        <GalleryImage src={shan_three} maxW="100%" />
        <GalleryImage src={shan_one} maxW="100%" />
        <GalleryImage src={nine} maxW="100%" />
      </Masonry>

      {/* IN ORDER */}
      {/* <Masonry
        breakpointCols={3}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        <GalleryImage src={one} maxW="100%" />
        <GalleryImage src={two} maxW="100%" />
        <GalleryImage src={three} maxW="100%" />
        <GalleryImage src={four} maxW="100%" />
        <GalleryImage src={six} maxW="100%" />
        <GalleryImage src={seven} maxW="100%" />
        <GalleryImage src={eight} maxW="100%" />
        <GalleryImage src={nine} maxW="100%" />

        <GalleryImage src={shan_one} maxW="100%" />
        <GalleryImage src={shan_two} maxW="100%" />
        <GalleryImage src={shan_three} maxW="100%" />
        <GalleryImage src={shan_four} maxW="100%" />
        <GalleryImage src={shan_five} maxW="100%" />
        <GalleryImage src={shan_six} maxW="100%" />
        <GalleryImage src={shan_seven} maxW="100%" />
        <GalleryImage src={shan_eight} maxW="100%" />
        <GalleryImage src={shan_nine} maxW="100%" />
        <GalleryImage src={shan_ten} maxW="100%" />
        <GalleryImage src={shan_eleven} maxW="100%" />
      </Masonry> */}
    </Box>
  );
};

// const GalleryImage = ({ src }) => {
//   return (
//     <Box borderRadius="2px" overflow="hidden">
//       <Image src={src} maxWidth="100%" />
//     </Box>
//   );
// };

export default GalleryImages;
