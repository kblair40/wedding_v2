import React from "react";
import {
  Box,
  useBreakpointValue,
  Flex,
  Text,
  Link,
  useDisclosure,
  Heading,
  Stack,
  Collapse,
  IconButton,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdClose } from "react-icons/md";

import "./index.css";
import { NAV_ITEMS } from "utils/constants";

const Nav = ({ handleChangeSection, sectionInView }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      h="50px"
      className="fade-in-immediate"
      justifyContent="center"
      position="fixed"
      top="0"
      w="100%"
      bg="#fff"
      bg={{ base: "rgba(0,0,0,0)", md: "#fff" }}
      zIndex={10}
      shadow={{ md: "sm" }}
    >
      <Box position="relative" w="100%">
        <Flex py="8px" justify="center" align="center" w="100%" h="100%">
          <Box display={{ base: "flex", md: "none" }} w="100%" h="100%">
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <IconButton
                position="absolute"
                my="auto"
                left={{ base: "8px" }}
                size="lg"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                position="absolute"
                onClick={onToggle}
                color="#fff"
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={8} h={8} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
          </Box>

          <Flex
            display={{ base: "none", md: "flex" }}
            justify="center"
            w="100%"
          >
            <Stack
              direction={"row"}
              justify="center"
              w="100%"
              maxW={{ md: "768px" }}
            >
              {NAV_ITEMS.map((navItem) => (
                <Box
                  key={navItem.label}
                  onClick={() => handleChangeSection(navItem.section)}
                  cursor="pointer"
                  className={
                    sectionInView === navItem.section
                      ? "link-active"
                      : undefined
                  }
                >
                  <Box
                    className={
                      sectionInView !== navItem.section
                        ? "link-wrapper"
                        : undefined
                    }
                    borderRadius="4px"
                  >
                    <Flex
                      borderRadius="4px"
                      py="4px"
                      alignItems="center"
                      px="12px"
                      transition=".2s ease-in-out"
                    >
                      <Text
                        color="text.primary"
                        fontWeight="400"
                        whiteSpace="nowrap"
                        // fontSize="lg"
                        textTransform="uppercase"
                        letterSpacing="1px"
                      >
                        {navItem.label}
                      </Text>
                    </Flex>
                  </Box>
                  {/* <NavLink to="#">{navItem.label}</NavLink> */}
                  {/* <NavLink to={navItem.href}>{navItem.label}</NavLink> */}
                </Box>
              ))}
            </Stack>
          </Flex>
        </Flex>

        <Box
          bg="rgba(255, 255, 255, 0.95)"
          shadow="sm"
          // border="1px solid red"
          position="absolute"
          top={0}
          w="100vw"
        >
          <Collapse in={isOpen} animateOpacity>
            <IconButton
              onClick={onToggle}
              position="relative"
              top="8px"
              left="8px"
              icon={<MdClose size="24" />}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
            />

            <MobileNav />
          </Collapse>
        </Box>
      </Box>
    </Flex>
  );
};

export default Nav;

const MobileNav = () => {
  return (
    <Stack
      display={{ md: "none" }}
      spacing="4px"
      w="100%"
      // p="16px"
      p="0 16px 16px"
      // border="1px solid red"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Flex
      borderRadius="full"
      as={Link}
      href={href ?? "#"}
      alignItems="center"
      justifyContent="center"
      transition=".3s ease-in-out"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Text
        borderRadius="full"
        fontSize="lg"
        color="text.primary"
        textAlign="center"
        lineHeight="100%"
        py="8px"
        w="100%"
        _hover={{
          textDecoration: "none",
          bg: "neutral.50",
        }}
      >
        {label}
      </Text>
    </Flex>
  );
};

const OurNamesHorizontal = () => {
  const headingSize = useBreakpointValue({ base: "2xl", sm: "3xl" });
  const style = {
    fontSize: headingSize,
    letterSpacing: "2px",
    fontWeight: "600",
  };

  return (
    <Flex direction="column" alignItems="center">
      <Flex w="100%" justifyContent="center" alignItems="start">
        <Heading {...style}>Shannon</Heading>
        <Heading {...style} mx="8px">
          &
        </Heading>
        <Heading {...style}>Kevin</Heading>
      </Flex>

      <Flex w="100%" justifyContent="center">
        <Text fontWeight="300" fontSize="sm" mr="8px">
          01.21.23
        </Text>
        <Text fontWeight="300" fontSize="sm">
          Winter Park, FL
        </Text>
      </Flex>
    </Flex>
  );
};
