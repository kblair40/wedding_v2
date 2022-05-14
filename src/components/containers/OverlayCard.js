import React from "react";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

import Paper from "components/containers/Paper";

const OverlayCard = ({ imageURL, children, label, to, ...rest }) => {
  return (
    <Link
      {...rest}
      w="100%"
      href={to}
      _hover={{ textDecoration: "none" }}
      isExternal
    >
      <Paper h="200px" p={0} position="relative" overflow="hidden">
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
              webkitBackdropFilter: "blur('6px')",
              borderRadius: "10px",
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
            fontSize={{ base: "xl", md: "2xl" }}
            zIndex={1}
          >
            {label}
          </Text>
        </Flex>
      </Paper>
    </Link>
  );
};

export default OverlayCard;
