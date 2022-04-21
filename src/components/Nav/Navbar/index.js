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

import { NAV_ITEMS, MAX_WIDTHS } from "utils/constants";
import NavLink from "./NavLink";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="relative" w="100%">
      <Flex py="8px" justify="center" align="center" w="100%" h="50px">
        <Box display={{ base: "flex", md: "none" }} w="100%" h="50px">
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            position="relative"
            // border="1px solid #ccc"
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

        <Flex display={{ base: "none", md: "flex" }} justify="center" w="100%">
          <Stack
            direction={"row"}
            justify="center"
            w="100%"
            maxW={{ md: "768px" }}
          >
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label}>
                <NavLink to={navItem.href}>{navItem.label}</NavLink>
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
  );
};

export default Navbar;

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
  const { onToggle } = useDisclosure();

  return (
    <Flex
      // border="1px solid #ccc"
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
        // fontWeight={500}
        fontSize="lg"
        color="text.primary"
        textAlign="center"
        // border="1px solid #ccc"
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
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="start"
      // border="1px solid red"
    >
      <Heading {...style}>Shannon</Heading>
      {/* <Heading size={subHeadingSize} mx="6px"> */}
      <Heading {...style} mx="8px">
        &
      </Heading>
      <Heading {...style}>Kevin</Heading>
    </Flex>
  );
};
