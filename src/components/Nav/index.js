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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import "./index.css";
import { NAV_ITEMS } from "utils/constants";

const Nav = ({ handleChangeSection, sectionInView }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      minHeight="50px"
      className="fade-in-immediate"
      justify="center"
      position="fixed"
      top="0"
      w="100%"
      bg="#fff"
      zIndex={10}
      shadow="sm"
    >
      <Box position="relative" w="100%">
        <Flex py="8px" justify="center" align="center" w="100%" h="50px">
          <Box display={{ base: "flex", md: "none" }} w="100%" h="50px">
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <IconButton
                position="absolute"
                left={{ base: "8px" }}
                top="4px"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                position="absolute"
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
              <OurNamesHorizontal />
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

        <Box bg="white" shadow="sm">
          <Collapse in={isOpen} animateOpacity>
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
    <Stack display={{ md: "none" }} spacing="4px" w="100%" p="16px">
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
  const headingSize = useBreakpointValue({ base: "lg", sm: "3xl" });
  const style = {
    fontSize: headingSize,
    letterSpacing: "2px",
    fontWeight: "500",
  };

  return (
    <Flex w="100%" justifyContent="center" alignItems="start">
      <Heading {...style}>Shannon</Heading>
      <Heading {...style} mx="8px">
        &
      </Heading>
      <Heading {...style}>Kevin</Heading>
    </Flex>
  );
};
