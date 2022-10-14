import React from "react";
import { Flex, Text, Link, Tooltip } from "@chakra-ui/react";

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
        <Tooltip label={label} openDelay={1500}>
          <Flex
            justifyContent="center"
            bgImage={imageURL}
            bgSize="cover"
            bgPosition="center center"
            h="100%"
          >
            <Flex
              align="center"
              justify="center"
              cursor="pointer"
              position="absolute"
              boxSize="100%"
              transition=".25s ease-in-out"
              className="overlay"
              bg="rgba(0,0,0,.35)"
              _hover={{
                opacity: 0,
              }}
            >
              <Text
                maxW={{ base: "92%", sm: undefined }}
                lineHeight={{ base: "32px", sm: "36px" }}
                borderRadius="8px"
                pointerEvents="none"
                textAlign="center"
                color="#f8eef1"
                fontWeight="700"
                fontSize={{ base: "xl", md: "2xl" }}
                bg="rgba(0,0,0,.5)"
                px="8px"
              >
                {label}
              </Text>
            </Flex>
          </Flex>
        </Tooltip>
      </Paper>
    </Link>
  );
};

export default OverlayCard;
