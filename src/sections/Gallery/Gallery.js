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

import GalleryImages from "components/GalleryImages";
import GalleryImageCarousel from "components/GalleryImageCarousel";
import SectionLabel from "components/SectionLabel";
import { CloseIcon } from "components/Icons";
import { colors } from "utils/custom-theme";

import one from "assets/images/gallery/sydney/one.webp";
import one_sm from "assets/images/gallery/sydney/one_sm.webp";
import seven from "assets/images/gallery/sydney/seven.webp";
import seven_sm from "assets/images/gallery/sydney/seven_sm.webp";

import shan_seven from "assets/images/gallery/shannon/shan_seven.webp";
import shan_eight from "assets/images/gallery/shannon/shan_eight.webp";
import shan_eight_sm from "assets/images/gallery/shannon/shan_eight_sm.webp";
import shan_nine from "assets/images/gallery/shannon/shan_nine.webp";
import shan_nine_sm from "assets/images/gallery/shannon/shan_nine_sm.webp";
import shan_eleven from "assets/images/gallery/shannon/shan_eleven.webp";
import shan_eleven_sm from "assets/images/gallery/shannon/shan_eleven_sm.webp";

import newone from "assets/images/gallery/newone.webp";
import newtwo from "assets/images/gallery/newtwo.webp";
import newtwo_sm from "assets/images/gallery/newtwo_sm.webp";
import newthree from "assets/images/gallery/newthree.webp";
import newthree_sm from "assets/images/gallery/newthree_sm.webp";
import newfive from "assets/images/gallery/newfive.webp";
import newfive_sm from "assets/images/gallery/newfive_sm.webp";
import newsix from "assets/images/gallery/newsix.webp";
import newsix_sm from "assets/images/gallery/newsix_sm.webp";
import newseven from "assets/images/gallery/newseven.webp";
import newseven_sm from "assets/images/gallery/newseven_sm.webp";
import neweight from "assets/images/gallery/neweight.webp";
import neweight_sm from "assets/images/gallery/neweight_sm.webp";
import newnine from "assets/images/gallery/newnine.webp";
import newten from "assets/images/gallery/newten.webp";
import newten_sm from "assets/images/gallery/newten_sm.webp";
import neweleven from "assets/images/gallery/neweleven.webp";
import neweleven_sm from "assets/images/gallery/neweleven_sm.webp";

// new pics from Caitlin
import caitone from "assets/images/gallery/caitlin/caitone.webp";
import caittwo from "assets/images/gallery/caitlin/caittwo.webp";
import caittwo_sm from "assets/images/gallery/caitlin/caittwo_sm.webp";

const Gallery = ({ setInView }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [startingSlideIdx, setStartingSlideIdx] = useState();

  const smallImages = {
    seven: seven_sm,
    shan_nine: shan_nine_sm,
    shan_eleven: shan_eleven_sm,
    newtwo: newtwo_sm,
    newthree: newthree_sm,
    newfive: newfive_sm,
    neweight: neweight_sm, // good
    newten: newten_sm,
    neweleven: neweleven_sm,
    // NEW BELOW
    newseven: newseven_sm,
    newsix: newsix_sm,
    shan_eight: shan_eight_sm,
    caittwo: caittwo_sm,
    one: one_sm,
  };

  const largeImages = {
    seven,
    shan_nine,
    shan_eleven,
    newtwo,
    newthree,
    newfive,
    neweight,
    newten,
    neweleven,
    // NEW BELOW
    newseven,
    newsix,
    shan_eight,
    caittwo,
    one,
  };

  const responsiveImages = useBreakpointValue({
    base: smallImages,
    xs: largeImages,
  });

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
    // one,
    responsiveImages.one,
    // neweight,
    responsiveImages.neweight,
    caitone,
    newone,
    shan_seven,
    // newtwo,
    responsiveImages.newtwo,
    // newseven,
    responsiveImages.newseven,
    // newthree,
    responsiveImages.newthree,
    // caittwo,
    responsiveImages.caittwo,
    // shan_eight,
    responsiveImages.shan_eight,
    // neweleven,
    responsiveImages.neweleven,
    // shan_eleven,
    responsiveImages.shan_eleven,
    // seven,
    responsiveImages.seven,
    // newten,
    responsiveImages.newten,
    // newfive,
    responsiveImages.newfive,
    // shan_nine,
    responsiveImages.shan_nine,
    // newsix,
    responsiveImages.newsix,
    newnine,
  ];

  // 4-column layout
  const images4 = [
    // neweight,
    responsiveImages.neweight,
    // one,
    responsiveImages.one,
    caitone,
    newone,
    shan_seven,
    // newtwo,
    responsiveImages.newtwo,
    // newthree,
    responsiveImages.newthree,
    // newseven,
    responsiveImages.newseven,
    // shan_eight,
    responsiveImages.shan_eight,
    // caittwo,
    responsiveImages.caittwo,
    // neweleven,
    responsiveImages.neweleven,
    // shan_eleven,
    responsiveImages.shan_eleven,
    // seven,
    responsiveImages.seven,
    // newfive,
    responsiveImages.newfive,
    // newten,
    responsiveImages.newten,
    newnine,
    // newsix,
    responsiveImages.newsix,
    // shan_nine,
    responsiveImages.shan_nine,
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
                  // _active={{ bg: "neutral.black" }}
                  _active={{ bg: colors.neutral.black }}
                  // bg="neutral.black"
                  bg={colors.neutral.black}
                  // icon={<MdClose fill="white" size={24} />}
                  icon={<CloseIcon fill="white" />}
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
