import React from "react";
import { Box, Image, Collapse, Text } from "@chakra-ui/react";

const GalleryImage = ({ src, onClick }) => {
  return (
    <Box onClick={onClick} cursor="pointer" position="relative">
      <Image src={src} maxWidth="100%" />
    </Box>
  );
};

export default GalleryImage;

// const Description = ({ open, src }) => {
//   return (
//     <Collapse in={open} startingHeight={0}>
//       <Box
//         w="100%"
//         p="4px 8px"
//         bg="rgba(30,30,30,0.7)"
//         position="absolute"
//         bottom={0}
//         left={0}
//         right={0}
//       >
//         <Text color="neutral.white">{src}</Text>
//       </Box>
//     </Collapse>
//   );
// };
