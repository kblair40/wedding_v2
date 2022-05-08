import React from "react";
import {
  Heading,
  Flex,
  VStack,
  Icon,
  Text,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import { IoAirplaneOutline } from "react-icons/io5";
import { AiOutlineCar } from "react-icons/ai";

import { outlineButton } from "utils/styles";
import Paper from "components/containers/Paper";

const paperStyles = {
  flex: 1,
  w: "100%",
  maxW: { base: "350px", sm: "375px", md: "350px", lg: "350px" },
  bg: "white",
  shadow: "none",
};

const textStyles = {
  fontWeight: "400",
  lineHeight: "20px",
  textAlign: "center",
};

const buttonStyles = {
  w: "100%",
  bg: "white",
  transition: ".2s ease-in-out",
  border: "1px solid",
  borderColor: "neutral.black",
  variant: "outline",
  fontWeight: "600",
  _hover: {
    // bg: "primary.50",
    // borderColor: "primary.900",
    // color: "primary.900",
    bg: "neutral.900",
    // borderColor: ''
    color: "#fff",
  },
  _active: { bg: "text.secondary" },
};

const TravelInfo = () => {
  return (
    <Box minW="350px">
      <Flex
        mt="20px"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        px="16px"
      >
        <Paper {...paperStyles}>
          <VStack alignItems="center" spacing="1rem">
            <Icon
              as={IoAirplaneOutline}
              boxSize="48px"
              color="neutral.black"
              transform="rotate(-90deg)"
            />
            <Heading fontSize="3xl" fontWeight="600">
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
                <Button {...outlineButton} mt="24px" w="100%">
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
            <Heading fontSize="3xl" fontWeight="600">
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
              <Button {...outlineButton} mt="24px" w="100%">
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
