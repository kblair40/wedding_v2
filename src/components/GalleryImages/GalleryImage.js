import React, { useState } from "react";
import { Box, Image, Collapse, Text } from "@chakra-ui/react";

const GalleryImage = ({ src }) => {
  const [descOpen, setDescOpen] = useState(false);
  return (
    <Box
      cursor="pointer"
      onMouseOver={() => setDescOpen(true)}
      onMouseOut={() => setDescOpen(false)}
      position="relative"
    >
      <Image src={src} maxWidth="100%" />
      <Description open={descOpen} />
    </Box>
  );
};

export default GalleryImage;

const description = "Aliqua nulla Lorem est consequat";
const Description = ({ open }) => {
  return (
    <Collapse in={open} startingHeight={0}>
      <Box
        w="100%"
        p="4px 8px"
        bg="rgba(30,30,30,0.7)"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
      >
        <Text color="neutral.white">{description}</Text>
      </Box>
    </Collapse>
  );
};
