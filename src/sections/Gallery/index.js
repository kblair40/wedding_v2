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

import one from "assets/galleryImages/sydney/one.jpg";
import seven from "assets/galleryImages/sydney/seven.jpg";

import shan_five from "assets/galleryImages/shannon/shan_five.jpg";
import shan_seven from "assets/galleryImages/shannon/shan_seven.jpg";
import shan_eight from "assets/galleryImages/shannon/shan_eight.jpg";
import shan_nine from "assets/galleryImages/shannon/shan_nine.jpg";
import shan_eleven from "assets/galleryImages/shannon/shan_eleven.jpg";

import newone from "assets/galleryImages/newone.jpg";
import newtwo from "assets/galleryImages/newtwo.jpg";
import newthree from "assets/galleryImages/newthree.jpg";
import newfour from "assets/galleryImages/newfour.jpg";
import newfive from "assets/galleryImages/newfive.jpg";
import newsix from "assets/galleryImages/newsix.jpg";
import newseven from "assets/galleryImages/newseven.jpg";
import neweight from "assets/galleryImages/neweight.jpg";
import newnine from "assets/galleryImages/newnine.jpg";
import newten from "assets/galleryImages/newten.jpg";
import neweleven from "assets/galleryImages/neweleven.jpg";

// new pics from Caitlin
import caitone from "assets/galleryImages/caitlin/caitone.jpg";
import caittwo from "assets/galleryImages/caitlin/caittwo.jpg";
import caitthree from "assets/galleryImages/caitlin/caitthree.jpg";
import caitfour from "assets/galleryImages/caitlin/caitfour.jpg";

const Gallery = ({ setInView }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [startingSlideIdx, setStartingSlideIdx] = useState();

  const [inViewRef, inView] = useInView({ threshold: 0.01 });

  useEffect(() => {
    // console.log("GALLERY IN VIEW:", inView);
    if (inView) {
      setInView("gallery");
    }
  }, [inView]);

  // 2-column layout
  const images = [
    one,
    neweight,
    shan_five,
    caitone,
    newone,
    newtwo,
    newthree,
    shan_seven, // 7
    caittwo, // 8
    shan_eight,
    shan_eleven, // 10
    neweleven,
    caitthree, // 12
    newfour, // 13
    seven,
    caitfour, // 15
    newseven, // 16
    newfive, // 17
    newten, // 18
    newnine, // 19
    shan_nine, // 20
    newsix, // 21
  ];

  const imagesThree = () => {
    images[7] = caittwo;
    images[8] = shan_seven;
    images[10] = newsix;
    images[11] = shan_eleven;
    images[12] = neweleven;
    images[13] = caitthree;
    images[14] = newfour;
    images[15] = seven;
    images[18] = shan_nine;
    images[19] = newten;
    images[20] = newnine;
    images[21] = caitfour;

    return images
  };



  const imagesFour = () => ([
    neweight,
    newthree,
    one,
    shan_seven,
    caittwo,
    shan_eight,
    shan_eleven, 
    neweleven,
    seven,
    shan_nine, 
    caitthree, 
    newfour, 
    newsix, 
    caitfour, 
    newseven, 
    newfive, 
    newten, 
    newnine, 
    newone,
    shan_five,
    caitone,
    newtwo,
  ]);

  const imagesArray = useBreakpointValue({
    base: images,
    md: imagesThree(),
    xl: imagesFour(),
  });

  const openCarousel = (imgIdx) => {
    // console.log("IMG IDX:", imgIdx);
    setStartingSlideIdx(imgIdx);
    setShowCarousel(true);
  };

  /* css for react-slick (GalleryImageCarousel) */

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
          {/* <GalleryImages imagesArray={imagesArray} onClick={openCarousel} /> */}
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
                    // imagesArray={imagesArray}
                    imagesArray={images}
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
