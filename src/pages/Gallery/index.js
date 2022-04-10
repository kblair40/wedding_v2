import React from "react";
import { Box } from "@chakra-ui/react";

import PageContainer from "components/containers/PageContainer";
import GalleryImages from "components/GalleryImages";
import GalleryImageCarousel from "components/GalleryImageCarousel";

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

const Gallery = () => {
  const imagesArray = [
    one,
    two,
    three,
    four,
    six,
    seven,
    eight,
    nine,
    shan_one,
    shan_two,
    shan_three,
    shan_four,
    shan_five,
    shan_six,
    shan_seven,
    shan_eight,
    shan_nine,
    shan_ten,
    shan_eleven,
  ];

  return (
    <PageContainer center px={{ base: "16px", md: "24px" }}>
      {/* css for react-slick (GalleryImageCarousel) */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <GalleryImages imagesArray={imagesArray} />
      <GalleryImageCarousel imagesArray={imagesArray} />
    </PageContainer>
  );
};

export default Gallery;
