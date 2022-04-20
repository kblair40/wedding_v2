import React from "react";
import {
  Heading,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import { FaPlane, FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";

import AnimatedCheckbox from "components/Animated/AnimatedCheckbox";
// import { MAX_WIDTHS } from "utils/constants";
import Paper from "components/containers/Paper";

const paperStyles = {
  flex: 1,
  w: "100%",
  maxW: { base: "350px", sm: "375px", md: "350px", lg: "350px" },
  bg: "white",
  shadow: "none",
  // border: "1px solid #ccc",
};

const textStyles = {
  fontWeight: "400",
  lineHeight: "20px",
  textAlign: "center",
  fontSize: "15px",
};

const TravelInfo = () => {
  return (
    <Box minW="350px">
      {/* <AnimatedCheckbox /> */}

      <Heading textAlign="center" fontSize="5xl" fontWeight="500">
        by plane / by car
      </Heading>

      <Flex
        mt="20px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        px="16px"
      >
        <Paper {...paperStyles}>
          <VStack alignItems="center" spacing="1rem">
            <Icon as={FaPlaneDeparture} boxSize="48px" color="neutral.black" />
            <Heading fontSize="4xl" fontWeight="500">
              by plane
            </Heading>
            <VStack>
              <Text {...textStyles}>
                Orlando Int'l Airport (ORL) is predominantly served by Southwest
                and Delta, although you'll be able to find flights from all
                major airlines. Alternatively, Orlando-Sanford (SFB) Int'l
                Airport offers flights mostly from Allegiant.
              </Text>
              <Text {...textStyles}>
                The drive from either airport to Winter Park is roughly 30
                minutes. Taxi and rideshare services (Uber, Lyft) are available
                at both airports
              </Text>
            </VStack>
            <Box
              //
              pt="8px"
              w="100%"
            >
              <Link
                isExternal
                href="https://www.google.com/flights"
                textDecoration="none"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Button
                  w="100%"
                  bg="white"
                  transition=".25s ease-in-out"
                  border="1px solid"
                  borderColor="neutral.black"
                  variant="outline"
                  fontWeight="600"
                  _hover={{
                    bg: "neutral.black",
                    color: "neutral.white",
                  }}
                  _active={{ bg: "text.secondary" }}
                >
                  Search Flights
                </Button>
              </Link>
            </Box>
          </VStack>
        </Paper>

        <Paper
          {...paperStyles}
          ml={{ base: "0", md: "1rem" }}
          mt={{ base: "1rem", md: 0 }}
        >
          <VStack alignItems="center" spacing="1rem">
            <Icon as={AiOutlineCar} boxSize="48px" color="neutral.black" />
            <Heading fontSize="4xl" fontWeight="500">
              by car
            </Heading>
            <VStack>
              <Text {...textStyles}>
                Orlando Int'l Airport (ORL) is predominantly served by Southwest
                and Delta, although you'll be able to find flights from all
                major airlines. Alternatively, Orlando-Sanford (SFB) Int'l
                Airport offers flights mostly from Allegiant.
              </Text>
              <Text {...textStyles}>
                The drive from either airport to Winter Park is roughly 30
                minutes. Taxi and rideshare services (Uber, Lyft) are available
                at both airports
              </Text>
            </VStack>
            <Box
              //
              pt="8px"
              w="100%"
            >
              <Button
                w="100%"
                bg="white"
                transition=".25s ease-in-out"
                border="1px solid"
                borderColor="neutral.black"
                fontWeight="600"
                variant="outline"
                _hover={{
                  bg: "neutral.black",
                  color: "neutral.white",
                }}
                _active={{ bg: "text.secondary" }}
              >
                Get Directions
              </Button>
            </Box>
          </VStack>
        </Paper>
      </Flex>
    </Box>
  );
};

export default TravelInfo;
