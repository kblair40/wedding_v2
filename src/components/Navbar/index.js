import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useInView } from "react-intersection-observer";

import { NAV_ITEMS } from "utils/constants";
import NavLink from "components/NavLink";
import OurNames from "components/OurNames";

import "./index.css";

const Navbar = () => {
  const [navBG, setNavBG] = useState("#fff");
  const [pinned, setPinned] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const { isOpen, onToggle } = useDisclosure();

  // const stickyRef = useRef();

  const {
    ref: stickyRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 1,
  });

  useEffect(() => {
    console.log("\n\nIN VIEW:", inView, "\n\n");
  }, [inView]);

  return (
    <Box
      h="60px"
      ref={stickyRef}
      // bg={navBG}
      bg={inView ? "white" : "transparent"}
      transition=".75s ease-in-out"
      zIndex={10000}
      mt={{ base: 0, md: "8px" }}
      // border="1px solid red"
      // bg="transparent"
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        top: "-1px",
      }}
    >
      <Flex
        mx="auto"
        // minH="60px"
        p={{ base: "8px 0px", sm: "8px 16px", md: pinned ? 0 : "8px 16px" }}
        justify="center"
        align="center"
        w="100%"
        maxW={{ base: "800px", md: "100vw" }}
        // border="1px solid blue"
        bg="transparent"
      >
        <Flex
          w="100%"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          position="relative"
          justifyContent="center"
          bg="transparent"
          // border="1px solid blue"
        >
          <IconButton
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            position="absolute"
            left={{ base: 0, sm: "8px" }}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          <OurNames />
        </Flex>

        <Flex
          flex={1}
          display={{ base: "none", md: "flex" }}
          justify="center"
          w="100%"
        >
          <Stack
            direction={"row"}
            justify="space-between"
            w="100%"
            maxW={{ md: "768px" }}
          >
            {NAV_ITEMS.map((navItem) => (
              <Box key={navItem.label} border="1px solid #ccc">
                <NavLink
                  to={navItem.href}
                  pinned={pinned}
                  textColor={inView ? "text.primary" : "white"}
                  //
                >
                  {navItem.label}
                </NavLink>
              </Box>
            ))}
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;

const MobileNav = () => {
  return (
    <Stack
      px="36px"
      py="16px"
      display={{ md: "none" }}
      spacing={0}
      // border="1px solid blue"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={onToggle} justifyContent="center">
      <Flex
        py="8px"
        as={Link}
        href={href ?? "#"}
        align={"center"}
        justifyContent="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontFamily="Josefin Sans"
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
