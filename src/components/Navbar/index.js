import React, { useRef, useEffect } from "react";
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

import { NAV_ITEMS } from "utils/constants";
import NavLink from "components/NavLink";
import OurNames from "components/OurNames";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const stickyRef = useRef();

  useEffect(() => {
    console.log("new current:", stickyRef.current);
    const el = stickyRef.current;

    const observer = new IntersectionObserver(
      ([e]) => {
        const ratio = e.intersectionRatio;
        console.log("\nE:", ratio);
        if (ratio < 1) {
          console.log("LESS THAN 1\n");
        } else {
          console.log("GREATER THAN OR EQUAL TO 1");
        }
      },
      // {
      // if (e.intersectionRatio < 1) {
      //   console.log("PINNED");
      // }
      // e.target.classList.toggle("is-pinned", e.intersectionRatio < 1);
      // },
      { threshold: [1] }
    );
    // const observer = new IntersectionObserver(
    //   ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    //   { threshold: [1] }
    // );

    observer.observe(el);
  }, [stickyRef.current]);

  return (
    <Box
      ref={stickyRef}
      zIndex={10000}
      bg="white"
      mt={{ base: 0, md: "8px" }}
      // mb="16px"
      shadow="sm"
      // border="1px solid #eee"
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        // top: "0",
        top: "-1px",
      }}
    >
      <Flex
        mx="auto"
        minH="60px"
        // p="8px 16px"
        p={{ base: "8px 0px", sm: "8px 16px" }}
        justify="center"
        align="center"
        w="100%"
        maxW={{ base: "800px", md: "100vw" }}
        // border="1px solid red"
      >
        <Flex
          w="100%"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          position="relative"
          justifyContent="center"
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

        <Flex flex={1} justify="center">
          <Flex display={{ base: "none", md: "flex" }} justify="center">
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing="2px">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink to={navItem.href}>{navItem.label}</NavLink>
        </Box>
      ))}
    </Stack>
  );
};

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
