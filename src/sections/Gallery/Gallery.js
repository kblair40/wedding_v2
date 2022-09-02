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

import one from "assets/images/gallery/sydney/one.webp"; // good
import seven from "assets/images/gallery/sydney/seven.webp"; // good

import shan_seven from "assets/images/gallery/shannon/shan_seven.webp"; // good
import shan_eight from "assets/images/gallery/shannon/shan_eight.webp";
import shan_nine from "assets/images/gallery/shannon/shan_nine.webp";
import shan_eleven from "assets/images/gallery/shannon/shan_eleven.webp"; // good

import newone from "assets/images/gallery/newone.webp"; // good
import newtwo from "assets/images/gallery/newtwo.webp"; // good
import newthree from "assets/images/gallery/newthree.webp"; // good
import newfive from "assets/images/gallery/newfive.webp"; // good
import newsix from "assets/images/gallery/newsix.webp"; // good
import newseven from "assets/images/gallery/newseven.webp"; // good
import neweight from "assets/images/gallery/neweight.webp"; // good
import newnine from "assets/images/gallery/newnine.webp"; // good
import newten from "assets/images/gallery/newten.webp"; // good
import neweleven from "assets/images/gallery/neweleven.webp";

// new pics from Caitlin
import caitone from "assets/images/gallery/caitlin/caitone.webp";
import caittwo from "assets/images/gallery/caitlin/caittwo.webp";

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
