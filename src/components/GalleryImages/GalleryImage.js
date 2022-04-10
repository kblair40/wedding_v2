import React, { useState } from "react";
import { Box, Image, Collapse } from "@chakra-ui/react";

const GalleryImage = ({ src }) => {
  const [descOpen, setDescOpen] = useState(false);
  return (
    <Box
      onMouseOver={() => setDescOpen(true)}
      onMouseOut={() => setDescOpen(false)}
    >
      <Image src={src} maxWidth="100%" />
      <Description open={descOpen} />
    </Box>
  );
};

export default GalleryImage;

const description = "Aliqua nulla Lorem est consequat";
const Description = ({ open }) => {
  <Collapse in={false}>
    <Box w="100%" p="4px" bg="rgba(30,30,30,0.7)">
      <Text>{description}</Text>
    </Box>
  </Collapse>;
};
