import React, { useState, useEffect } from "react";
import {
  Flex,
  Modal,
  ModalContent,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import { MdClose } from "react-icons/md";

import GalleryImages from "components/GalleryImages";
import GalleryImageCarousel from "components/GalleryImageCarousel";
import SectionLabel from "components/SectionLabel";

import one from "assets/galleryImages/sydney/one.webp";
import seven from "assets/galleryImages/sydney/seven.webp";

import shan_seven from "assets/galleryImages/shannon/shan_seven.webp";
import shan_eight from "assets/galleryImages/shannon/shan_eight.webp";
import shan_nine from "assets/galleryImages/shannon/shan_nine.webp";
import shan_eleven from "assets/galleryImages/shannon/shan_eleven.webp";

import newone from "assets/galleryImages/newone.webp";
import newtwo from "assets/galleryImages/newtwo.jpg";
import newthree from "assets/galleryImages/newthree.jpg";
import newfive from "assets/galleryImages/newfive.jpg";
import newsix from "assets/galleryImages/newsix.jpg";
import newseven from "assets/galleryImages/newseven.jpg";
import neweight from "assets/galleryImages/neweight.jpg";
import newnine from "assets/galleryImages/newnine.webp";
import newten from "assets/galleryImages/newten.webp";
import neweleven from "assets/galleryImages/neweleven.jpg";

// new pics from Caitlin
import caitone from "assets/galleryImages/caitlin/caitone.webp";
import caittwo from "assets/galleryImages/caitlin/caittwo.webp";

const Gallery = ({ setInView }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [startingSlideIdx, setStartingSlideIdx] = useState();

  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    // console.log("GALLERY IN VIEW:", inView);
    if (inView) {
      setInView("gallery");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // 2-column & 3-column layout
  const images = [
    one,
    neweight,
    caitone,
    newone,
    shan_seven,
    newtwo,
    newseven,
    newthree,
    caittwo,
    shan_eight,
    neweleven,
    shan_eleven,
    seven,
    newten,
    newfive,
    shan_nine,
    newsix,
    newnine,
  ];

  // 4-column layout
  const images4 = [
    neweight,
    one,
    caitone,
    newone,
    shan_seven,
    newtwo,
    newthree,
    newseven,
    shan_eight,
    caittwo,
    neweleven,
    shan_eleven,
    seven,
    newfive,
    newten,
    newnine,
    newsix,
    shan_nine,
  ];

  const imagesArray = useBreakpointValue({
    base: images,
    xl: images4,
  });

  const openCarousel = (imgIdx) => {
    setStartingSlideIdx(imgIdx);
    setShowCarousel(true);
  };

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

      <Flex direction="column" alignItems="center" bg="#f7f5f1" pb="24px">
        <SectionLabel label="gallery" />
        <Box ref={inViewRef} />

        <Box className="fade-in-immediate">
          <GalleryImages imagesArray={imagesArray} onClick={openCarousel} />

          {showCarousel && (
            <Modal
              isCentered
              isOpen={showCarousel}
              onClose={() => setShowCarousel(false)}
              size="full"
              scrollBehavior="inside"
            >
              <ModalContent bg="rgba(0, 0, 0, .7)" px="8px" h="100vh">
                <IconButton
                  zIndex={10000}
                  onClick={() => setShowCarousel(false)}
                  position="absolute"
                  left={{ base: "16px", sm: "24px" }}
                  top={{ base: "8px", sm: "16px" }}
                  _hover={{ bg: "#2d2d2d" }}
                  _active={{ bg: "neutral.black" }}
                  bg="neutral.black"
                  icon={<MdClose fill="white" size={24} />}
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
