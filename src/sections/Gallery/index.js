import React, { useState } from "react";
import {
  Flex,
  Modal,
  ModalContent,
  ModalCloseButton,
  Box,
  Text,
} from "@chakra-ui/react";

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
  const [showCarousel, setShowCarousel] = useState(false);
  const [startingSlideIdx, setStartingSlideIdx] = useState();

  const imagesArray = [
    one,
    shan_five,
    two,
    shan_eight,
    shan_one,
    three,
    shan_two,
    four,
    shan_nine,
    shan_three,
    shan_seven,
    eight,
    shan_six,
    six,
    shan_ten,
    shan_four,
    seven,
    shan_eleven,
    nine,
  ];

  const openCarousel = (imgIdx) => {
    console.log("IMG IDX:", imgIdx);
    setStartingSlideIdx(imgIdx);
    setShowCarousel(true);
  };

  {
    /* css for react-slick (GalleryImageCarousel) */
  }
  return (
    <React.Fragment>
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

      <Flex
        direction="column"
        alignItems="center"
        bg="white"
        pt="24px"
        pb="32px"
      >
        <Flex direction="column" alignItems="center">
          <Text
            fontSize={{ base: "3xl", sm: "48px" }}
            textAlign="center"
            fontWeight="500"
            w="100%"
            mt="32px"
            letterSpacing="2px"
          >
            GALLERY
          </Text>
          <Box h="3px" w="50px" bg="neutral.800" mb="24px" />
        </Flex>

        <Box className="fade-in-immediate">
          <GalleryImages imagesArray={imagesArray} onClick={openCarousel} />

          {showCarousel && (
            <Modal
              isCentered
              isOpen={showCarousel}
              onClose={() => setShowCarousel(false)}
              size="full"
            >
              <ModalContent bg="rgba(0, 0, 0, .7)" px="8px" overflow="hidden">
                <ModalCloseButton
                  right="8px"
                  zIndex={1}
                  bg="neutral.black"
                  transition=".3s ease-in-out"
                  color="neutral.white"
                />
                <Flex alignItems="center" h="100vh">
                  <GalleryImageCarousel
                    imagesArray={imagesArray}
                    startingSlideIdx={startingSlideIdx}
                  />
                </Flex>
              </ModalContent>
            </Modal>
          )}
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Gallery;
