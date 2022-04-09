import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  Heading,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { NAV_ITEMS } from "utils/constants";
import NavLink from "./NavLink";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box maxH="50px">
      <Flex
        py="8px"
        px={{ base: 0, sm: "16px" }}
        // p={{ base: "8px 0px", sm: "8px 16px", md: "8px 16px" }}
        justify="center"
        align="center"
        w="100%"
        maxW={{ base: "800px", md: "100vw" }}
        h="50px"
        // h="100%"
      >
        <Box
          display={{ base: "flex", md: "none" }}
          position="absolute"
          top={0}
          w="100%"
          h="50px"
          // h="100%"
        >
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <IconButton
              position="absolute"
              left={{ base: 0, md: "4px" }}
              top="4px"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              position="absolute"
              left={{ base: 0, sm: "8px" }}
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
          flex={1}
          display={{ base: "none", md: "flex" }}
          justify="center"
          w="100%"
          backgroundColor="rgba(0,0,0,0)"
        >
          <Stack
            direction={"row"}
            justify="space-between"
            w="100%"
            maxW={{ md: "768px" }}
            backgroundColor="rgba(0,0,0,0)"
          >
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label} backgroundColor="rgba(0,0,0,0)">
                <NavLink to={navItem.href}>{navItem.label}</NavLink>
              </Box>
            ))}
          </Stack>
        </Flex>
      </Flex>

      <Box
        // py={isOpen ? "8px" : 0}
        bg="white"
        // border="1px solid #000"
      >
        <Collapse
          in={isOpen}
          // position="absolute"
          animateOpacity
        >
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;

const MobileNav = () => {
  return (
    <Stack
      display={{ md: "none" }}
      spacing="2px"
      w="100%"
      p="16px"
      // border="1px solid #000"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack
      w="100%"
      // bg="white"
      onClick={onToggle}
      justifyContent="center"
      h="100%"
      // border="1px solid #ccc"
      // mb="4px"
      // px="8px"
      // position="relative"
      // top="40px"
    >
      <Flex
        // mb="4px"
        // border="1px solid #ccc"
        borderRadius="4px"
        py="8px"
        as={Link}
        href={href ?? "#"}
        alignItems="center"
        justifyContent="center"
        transition=".25s ease-in-out"
        _hover={{
          textDecoration: "none",
          bg: "neutral.100",
        }}
      >
        <Text
          // fontFamily="Cormorant Garamond"
          fontWeight={600}
          fontSize="lg"
          color="text.primary"
          textAlign="center"
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const OurNamesHorizontal = () => {
  const headingSize = useBreakpointValue({ base: "lg", sm: "3xl", md: "6xl" });
  const subHeadingSize = useBreakpointValue({
    base: "sm",
    sm: "lg",
    md: "3xl",
  });
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="start"
      // border="1px solid red"
    >
      <Heading size={headingSize} letterSpacing="1.5px">
        Shannon
      </Heading>
      {/* <Heading size={subHeadingSize} mx="6px"> */}
      <Heading size={headingSize} mx="8px">
        &
      </Heading>
      <Heading size={headingSize} letterSpacing="1.5px">
        Kevin
      </Heading>
    </Flex>
  );
};
