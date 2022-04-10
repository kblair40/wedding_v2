import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

export const GalleryImageCarousel = ({ imagesArray, startingSlideIdx }) => {
  // reference variable to change the state of custom buttons
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // Slider settings
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    initialSlide: startingSlideIdx,
  };

  const arrowBtnStyles = {
    borderRadius: "full",
    position: "absolute",
    top: top,
    zIndex: 2,
    transform: "translate(0%, -50%)",
  };

  return (
    <Box
      position={"relative"}
      height="86vh"
      width={"full"}
      overflow={"hidden"}
      pt="12px"
    >
      <IconButton
        aria-label="left-arrow"
        left={side}
        onClick={() => (slider ? slider.slickPrev() : undefined)}
        {...arrowBtnStyles}
      >
        <BiLeftArrowAlt fontSize="24px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        right={side}
        onClick={() => slider?.slickNext()}
        {...arrowBtnStyles}
      >
        <BiRightArrowAlt fontSize="24px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {imagesArray.map((url, index) => (
          <Box
            borderRadius="8px"
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default GalleryImageCarousel;
