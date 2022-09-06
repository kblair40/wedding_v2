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
import { colors } from "utils/custom-theme";

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
              // color="neutral.black"
              color={colors.neutral.black}
              transform="rotate(-90deg)"
            />
            <Heading fontWeight="600">by plane</Heading>
            <VStack h={{ base: "auto", md: "200px" }}>
              <Text {...textStyles}>
                Orlando Int'l Airport (ORL) is predominantly served by Southwest
                and Delta, although you'll be able to find flights from all
                major airlines. Alternatively, Orlando-Sanford (SFB) Int'l
                Airport offers flights mostly from Allegiant.
              </Text>
              <Text {...textStyles}>
                The drive from either airport to Winter Park is roughly 30
                minutes. Taxi and rideshares (Uber, Lyft) are available at both
                airports
              </Text>
            </VStack>
            <Box pt="8px" w="100%">
              <Link
                isExternal
                href="https://www.google.com/flights"
                textDecoration="none"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Button {...outlineButton} mt="16px" w="100%">
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
            <Icon
              as={AiOutlineCar}
              boxSize="48px"
              color={colors.neutral.black}
            />
            <Heading fontWeight="600">by car</Heading>
            <VStack h={{ base: "auto", md: "200px" }}>
              <Text {...textStyles}>
                If you'll be driving in, Winter Park is located just Northeast
                of Orlando.
              </Text>
            </VStack>
            <Box pt="8px" w="100%">
              <Link
                isExternal
                href="https://www.google.com/maps/dir//Winter+Park,+FL/@28.6002182,-81.3823086,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7701bdba629c5:0xc63f82952cf5ee20!2m2!1d-81.3392352!2d28.5999998!3e0"
                textDecoration="none"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Button {...outlineButton} mt="16px" w="100%">
                  Get Directions
                </Button>
              </Link>
            </Box>
          </VStack>
        </Paper>
      </Flex>
    </Box>
  );
};

export default TravelInfo;
