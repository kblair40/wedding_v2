import React from "react";
import {
  Heading,
  Box,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaPlane, FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";

import { MAX_WIDTHS } from "utils/constants";
import PageContainer from "components/containers/PageContainer";
import Paper from "components/containers/Paper";

const Travel = () => {
  return (
    <Flex justify="center">
      <Box maxW={MAX_WIDTHS()} w="100%">
        <Flex
          mt="32px"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          // border="1px solid #ccc"
        >
          <Paper w="50%">
            <VStack
              // justifyContent="space-between"
              alignItems="center"
              spacing="1rem"
            >
              <Icon
                as={FaPlaneDeparture}
                boxSize="48px"
                color="neutral.black"
              />
              <Heading fontSize="4xl">By Plane</Heading>
              <VStack>
                <Text
                  lineHeight="20px"
                  fontWeight="600"
                  //
                >
                  Orlando Int'l Airport (ORL) is predominantly served by
                  Southwest and Delta, although you'll be able to find flights
                  from all major airlines. Alternatively, Orlando-Sanford (SFB)
                  Int'l Airport offers flights mostly from Allegiant.
                </Text>
                <Text
                  lineHeight="20px"
                  fontWeight="600"
                  //
                >
                  The drive from either airport to Winter Park is roughly 30
                  minutes. Taxi and rideshare services (Uber, Lyft) are
                  available at both airports
                </Text>
              </VStack>
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
                  Orlando Int'l Airport (ORL) is predominantly served by
                  Southwest and Delta, although you'll be able to find flights
                  from all major airlines. Alternatively, Orlando-Sanford (SFB)
                  Int'l Airport offers flights mostly from Allegiant.
                </Text>
                <Text lineHeight="20px" fontWeight="600">
                  The drive from either airport to Winter Park is roughly 30
                  minutes. Taxi and rideshare services (Uber, Lyft) are
                  available at both airports
                </Text>
              </VStack>
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
            </VStack>
          </Paper>
          {/*  */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Travel;
