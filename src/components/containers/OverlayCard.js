import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Paper from "components/containers/Paper";

const OverlayCard = ({ imageURL, children, label, ...rest }) => {
  return (
    <Paper
      w="100%"
      h="200px"
      p={0}
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Flex
        className="wrapper"
        zIndex={5}
        alignItems="center"
        direction="column"
        justifyContent="center"
        bgImage={imageURL}
        bgSize="cover"
        bgPosition="center center"
        h="100%"
        sx={{
          ".label": {
            bg: "rgba(0, 0, 0, 0)",
          },
        }}
        _hover={{
          ".label": {
            bg: "rgba(0, 0, 0, 0.35)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur('6px')",
            "-webkit-backdrop-filter": "blur('6px')",
            borderRadius: "10px",
            // border: "1px solid rgba(255, 255, 255, 0.18)",
          },
        }}
      >
        <Box
          cursor="pointer"
          position="absolute"
          boxSize="100%"
          bg="neutral.black"
          opacity=".5"
          transition=".15s ease-in-out"
          className="overlay"
          _hover={{
            opacity: 0,
          }}
        />
        <Text
          className="label"
          lineHeight="36px"
          transition=".25s"
          px="8px"
          borderRadius="4px"
          pointerEvents="none"
          textAlign="center"
          color="neutral.white"
          fontWeight="700"
          fontSize="4xl"
          zIndex={1}
        >
          {label}
        </Text>
      </Flex>
    </Paper>
  );
};

export default OverlayCard;
