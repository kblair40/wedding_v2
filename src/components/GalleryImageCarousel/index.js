import React, { useState } from "react";
import { Box, IconButton, Image, Flex } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

export const GalleryImageCarousel = ({ imagesArray, startingSlideIdx }) => {
  // reference variable to change the state of custom buttons
  const [slider, setSlider] = useState(null);

  // Slider settings
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    initialSlide: startingSlideIdx,
    centerMode: true,
    centerPadding: "16px",
    className: "slick-slider",
    adaptiveHeight: true,
  };

  const arrowBtnStyles = {
    borderRadius: "full",
    position: "absolute",
    top: "50%",
    zIndex: 2,
    transform: "translate(0%, -50%)",
  };

  return (
    <Box
      position="relative"
      height="90vh"
      width="100%"
      overflow="hidden"
      pt="12px"
    >
      <IconButton
        aria-label="left-arrow"
        left={{ base: "8px", sm: "16px" }}
        onClick={() => (slider ? slider.slickPrev() : undefined)}
        {...arrowBtnStyles}
      >
        <BiLeftArrowAlt fontSize="24px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        right={{ base: "8px", sm: "16px" }}
        onClick={() => slider?.slickNext()}
        {...arrowBtnStyles}
      >
        <BiRightArrowAlt fontSize="24px" />
      </IconButton>

      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {imagesArray.map((url, index) => (
          <Flex justifyContent="center" w="100%" alignItems="center" h="100%">
            <Image
              mx="auto"
              src={url}
              key={index}
              maxH="80vh"
              maxW="100%"
              borderRadius="4px"
            />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default GalleryImageCarousel;
