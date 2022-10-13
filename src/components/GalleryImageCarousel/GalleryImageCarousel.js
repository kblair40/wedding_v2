import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  Image,
  Flex,
  useOutsideClick,
} from "@chakra-ui/react";
import Slider from "react-slick";

import { ArrowLeftIcon, ArrowRightIcon } from "components/Icons";

export const GalleryImageCarousel = ({
  imagesArray,
  startingSlideIdx,
  onClose,
}) => {
  // reference variable to change the state of custom buttons
  const [slider, setSlider] = useState(null);

  const keysDisabled = useRef(false);
  const outsideClickRef = useRef();

  const handleOutsideClick = (e) => {
    // ignore if... (1) e.target.type === 'button', (2) e.target.classList.includes("dontclick")
    const hasClassList = Boolean(e.target.classList);
    let classList;
    if (hasClassList) classList = e.target.classList;

    if (
      e.target.type === "button" ||
      (hasClassList && classList.contains("dontclick"))
    ) {
      return;
    }
    onClose();
  };

  useOutsideClick({
    ref: outsideClickRef,
    handler: handleOutsideClick,
  });

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (keysDisabled.current) {
        return;
      }

      if (e.key === "ArrowRight") {
        slider.slickNext();
      } else if (e.key === "ArrowLeft") {
        slider.slickPrev();
      }

      keysDisabled.current = true;
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", enableKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", enableKeyPress);
    };
  }, [slider]);

  const enableKeyPress = () => {
    if (keysDisabled.current) {
      keysDisabled.current = false;
    }
  };

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
      width="100%"
      overflow="hidden"
      pt="12px"
      // ref={outsideClickRef}
    >
      <IconButton
        className="dontclose"
        aria-label="left-arrow"
        left={{ base: "8px", sm: "16px" }}
        onClick={() => (slider ? slider.slickPrev() : undefined)}
        {...arrowBtnStyles}
      >
        <ArrowLeftIcon className="dontclose" />
      </IconButton>

      <IconButton
        className="dontclose"
        aria-label="right-arrow"
        right={{ base: "8px", sm: "16px" }}
        // onClick={() => slider?.slickNext()}
        onClick={(e) => {
          e.stopPropagation();
          slider?.slickNext();
        }}
        {...arrowBtnStyles}
      >
        <ArrowRightIcon className="dontclose" />
      </IconButton>

      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {imagesArray.map((url, index) => (
          <Flex
            justifyContent="center"
            w="100%"
            alignItems="center"
            h="100%"
            key={index}
          >
            <Image
              mx="auto"
              src={url}
              maxH="80vh"
              maxW="100%"
              borderRadius="2px"
              ref={outsideClickRef}
            />
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

export default GalleryImageCarousel;
