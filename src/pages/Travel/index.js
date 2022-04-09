import React from "react";
import {
  Heading,
  Box,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaPlane, FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineCar } from "react-icons/ai";

import PageContainer from "components/containers/PageContainer";
import Paper from "components/containers/Paper";

const Travel = () => {
  return (
    <Flex justify="center">
      {/* <Box></Box> */}
      {/* <Heading textAlign="center">Travel</Heading> */}
      <Box maxW={{ base: "480px", md: "600px" }}>
        <Flex
          mt="32px"
          direction={{ base: "column", md: "row" }}
          // alignItems="start"
          alignItems="center"
          border="1px solid #ccc"
        >
          <Paper w="50%">
            <VStack alignItems="center" spacing="1rem">
              <Icon
                as={FaPlaneDeparture}
                boxSize="48px"
                color="neutral.black"
              />
              <Heading
                fontSize="4xl"
                // fontWeight="500"
                //
              >
                By Plane
              </Heading>
              <VStack>
                <Text fontSize="sm">
                  Orlando Int'l Airport (ORL) is predominantly served by
                  Southwest and Delta, although you'll be able to find flights
                  from all major airlines. Alternatively, Orlando-Sanford (SFB)
                  Int'l Airport offers flights mostly from Allegiant.
                </Text>
                <Text fontSize="sm">
                  The drive from either airport to Winter Park is roughly 30
                  minutes. Taxi and rideshare services (Uber, Lyft) are
                  available at both airports
                </Text>
              </VStack>
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
            <Text
              //
              mx="4px"
              fontSize="2xl"
              fontWeight="600"
              whiteSpace="nowrap"
            >
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
                <Text fontSize="sm">
                  Orlando Int'l Airport (ORL) is predominantly served by
                  Southwest and Delta, although you'll be able to find flights
                  from all major airlines. Alternatively, Orlando-Sanford (SFB)
                  Int'l Airport offers flights mostly from Allegiant.
                </Text>
                <Text fontSize="sm">
                  The drive from either airport to Winter Park is roughly 30
                  minutes. Taxi and rideshare services (Uber, Lyft) are
                  available at both airports
                </Text>
              </VStack>
            </VStack>
          </Paper>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Travel;
