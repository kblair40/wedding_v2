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

// import { MAX_WIDTHS } from "utils/constants";
import Paper from "components/containers/Paper";

const paperStyles = {
  flex: 1,
  w: { base: "300px", sm: "350px", md: "300px", lg: "350px" },
};

const TravelInfo = () => {
  return (
    <React.Fragment>
      <Heading textAlign="center" fontSize="4xl">
        By Plane or By Car
      </Heading>

      <Flex
        mt="20px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        // border="1px solid black"
      >
        <Paper {...paperStyles}>
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
                and Delta, although you'll be able to find flights from all
                major airlines. Alternatively, Orlando-Sanford (SFB) Int'l
                Airport offers flights mostly from Allegiant.
              </Text>
              <Text
                lineHeight="20px"
                fontWeight="600"
                //
              >
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
              <Link isExternal href="https://www.google.com/flights">
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
              </Link>
            </Box>
          </VStack>
        </Paper>

        <Paper {...paperStyles} ml="1rem">
          <VStack alignItems="center" spacing="1rem">
            <Icon as={AiOutlineCar} boxSize="48px" color="neutral.black" />
            <Heading fontSize="4xl">By Car</Heading>
            <VStack>
              <Text lineHeight="20px" fontWeight="600">
                Orlando Int'l Airport (ORL) is predominantly served by Southwest
                and Delta, although you'll be able to find flights from all
                major airlines. Alternatively, Orlando-Sanford (SFB) Int'l
                Airport offers flights mostly from Allegiant.
              </Text>
              <Text lineHeight="20px" fontWeight="600">
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
                  Rent a Car
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
      </Flex>
    </React.Fragment>
  );
};

export default TravelInfo;
