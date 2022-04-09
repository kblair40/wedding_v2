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
import alfond from "assets/images/alfond1.jpeg";
import hgi_lobby from "assets/images/hgi_lobby.jpeg";

const Accommodations = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      // alignItems="center"
      //
    >
      <Heading fontSize="4xl">ACCOMMODATIONS</Heading>
      <Text mt="8px">
        Voluptate adipisicing quis velit consequat non do consectetur est ipsum
        laboris. Adipisicing tempor culpa cillum cillum eu commodo nulla officia
        do aute. Nulla laborum sunt fugiat consectetur nulla est Lorem.
        Excepteur ipsum dolore velit incididunt commodo sint pariatur ex
        proident tempor anim. Commodo incididunt Lorem ea et enim proident Lorem
        et. Dolore officia duis elit adipisicing labore elit ullamco consectetur
        nisi labore nulla. Est est anim deserunt laboris veniam qui est sit do
        eiusmod pariatur.
      </Text>

      <Flex
        justify="space-between"
        // px="16px"
        mb="32px"
      >
        <Paper
          w="100%"
          mt="16px"
          h="200px"
          // h="400px"
          p={0}
          position="relative"
          overflow="hidden"
        >
          <Flex
            alignItems="center"
            direction="column"
            justifyContent="center"
            bgImage={hgi_lobby}
            bgSize="cover"
            bgPosition="center center"
            h="100%"
            zIndex={1}
          >
            <Box
              cursor="pointer"
              position="absolute"
              boxSize="100%"
              bg="neutral.black"
              opacity=".5"
              zIndex={2}
              transition=".25s ease-in-out"
              _hover={{
                opacity: 0,
              }}
            />
            <Text
              textAlign="center"
              color="neutral.white"
              fontWeight="700"
              fontSize="4xl"
              zIndex={2}
            >
              Garden Inn
            </Text>
          </Flex>
        </Paper>
        <Paper
          w="100%"
          mt="16px"
          h="200px"
          mx="16px"
          p={0}
          position="relative"
          overflow="hidden"
        >
          <Flex
            alignItems="center"
            direction="column"
            justifyContent="center"
            bgImage={alfond}
            bgSize="cover"
            bgPosition="center center"
            h="100%"
            zIndex={1}
          >
            <Box
              cursor="pointer"
              position="absolute"
              boxSize="100%"
              bg="neutral.black"
              opacity=".5"
              zIndex={2}
              transition=".25s ease-in-out"
              _hover={{
                opacity: 0,
              }}
            />
            <Text
              textAlign="center"
              color="neutral.white"
              fontWeight="700"
              fontSize="4xl"
              zIndex={2}
            >
              The Alfond
            </Text>
            {/* <Image
              position="absolute"
              src={alfond}
              // borderRadius="4px"
            /> */}
          </Flex>
        </Paper>
        <Paper
          w="100%"
          mt="16px"
          h="200px"
          // h="400px"
        >
          <Flex justify="center">
            <Text fontSize="lg" fontWeight="700">
              Other Hotel
            </Text>
          </Flex>
        </Paper>
      </Flex>
    </Flex>
  );
};

export default Accommodations;
