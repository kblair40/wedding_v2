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
} from "@chakra-ui/react";

import { FaPlane, FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";

// import { MAX_WIDTHS } from "utils/constants";
import Paper from "components/containers/Paper";

const TravelInfo = () => {
  return (
    <Flex
      mt="32px"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Paper w="50%">
        <VStack alignItems="center" spacing="1rem">
          <Icon as={FaPlaneDeparture} boxSize="48px" color="neutral.black" />
          <Heading fontSize="4xl">By Plane</Heading>
          <VStack>
            <Text
              lineHeight="20px"
              fontWeight="600"
              //
            >
              Orlando Int'l Airport (ORL) is predominantly served by Southwest
              and Delta, although you'll be able to find flights from all major
              airlines. Alternatively, Orlando-Sanford (SFB) Int'l Airport
              offers flights mostly from Allegiant.
            </Text>
            <Text
              lineHeight="20px"
              fontWeight="600"
              //
            >
              The drive from either airport to Winter Park is roughly 30
              minutes. Taxi and rideshare services (Uber, Lyft) are available at
              both airports
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
              fontSize="lg"
              transition=".25s ease-in-out"
              border="1px solid"
              borderColor="transparent"
              _hover={{
                borderColor: "neutral.200",
                bg: "neutral.50",
              }}
              _active={{ bg: "neutral.200" }}
            >
              Search Flights
            </Button>
          </Box>
        </VStack>
      </Paper>

      <Flex
        mx={{ base: 0, md: "16px" }}
        my={{ base: "16px", md: 0 }}
        alignItems="center"
      >
        <Text fontSize="2xl" fontWeight="600" whiteSpace="nowrap">
          And
        </Text>
        <Text mx="4px" fontSize="2xl" fontWeight="600" whiteSpace="nowrap">
          /
        </Text>
        <Text fontSize="2xl" fontWeight="600" whiteSpace="nowrap">
          Or
        </Text>
      </Flex>

      <Paper w="50%">
        <VStack alignItems="center" spacing="1rem">
          <Icon as={AiOutlineCar} boxSize="48px" color="neutral.black" />
          <Heading fontSize="4xl">By Car</Heading>
          <VStack>
            <Text lineHeight="20px" fontWeight="600">
              Orlando Int'l Airport (ORL) is predominantly served by Southwest
              and Delta, although you'll be able to find flights from all major
              airlines. Alternatively, Orlando-Sanford (SFB) Int'l Airport
              offers flights mostly from Allegiant.
            </Text>
            <Text lineHeight="20px" fontWeight="600">
              The drive from either airport to Winter Park is roughly 30
              minutes. Taxi and rideshare services (Uber, Lyft) are available at
              both airports
            </Text>
          </VStack>
          <Box
            //
            pt="8px"
            w="100%"
          >
            <HStack>
              <Button
                w="100%"
                bg="white"
                fontSize="lg"
                transition=".25s ease-in-out"
                border="1px solid"
                borderColor="transparent"
                _hover={{
                  borderColor: "neutral.200",
                  bg: "neutral.50",
                }}
                _active={{ bg: "neutral.200" }}
              >
                Search Car Rentals
              </Button>
              <Button
                w="100%"
                bg="white"
                fontSize="lg"
                transition=".25s ease-in-out"
                border="1px solid"
                borderColor="transparent"
                _hover={{
                  borderColor: "neutral.200",
                  bg: "neutral.50",
                }}
                _active={{ bg: "neutral.200" }}
              >
                Get Directions
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Paper>
      {/*  */}
    </Flex>
  );
};

export default TravelInfo;
