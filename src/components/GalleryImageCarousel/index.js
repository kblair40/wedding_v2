import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

// Slider settings
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const GalleryImageCarousel = ({ imagesArray }) => {
  // reference variable to change the state of custom buttons
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

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
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
      // mb="16px"
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
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {imagesArray.map((url, index) => (
          <Box
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
