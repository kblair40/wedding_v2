import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react";

import Paper from "components/containers/Paper";
import OverlayCard from "components/containers/OverlayCard";
import alfond from "assets/images/alfond1.jpeg";
import hgi_lobby from "assets/images/hgi_lobby.jpeg";

const Accommodations = () => {
  return (
    <Flex w="100%" direction="column" px="16px" minW="350px">
      <Heading textAlign="center" fontSize="4xl" fontWeight="600">
        accommodations
      </Heading>

      <Text mt="16px">
        Voluptate adipisicing quis velit consequat non do consectetur est ipsum
        laboris. Adipisicing tempor culpa cillum cillum eu commodo nulla officia
        do aute. Nulla laborum sunt fugiat consectetur nulla est Lorem.
        Excepteur ipsum dolore velit incididunt commodo sint pariatur ex
        proident tempo.
      </Text>

      <Flex mt="16px" justify="space-between" mb="32px">
        <OverlayCard imageURL={hgi_lobby} label="Hilton Garden Inn" />
        <OverlayCard ml="16px" imageURL={alfond} label="The Alfond Inn" />
      </Flex>
    </Flex>
  );
};

export default Accommodations;
