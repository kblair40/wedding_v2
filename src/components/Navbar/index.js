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

  return (
    <Box
      zIndex={10000}
      bg="white"
      mt={{ base: 0, md: "8px" }}
      mb="16px"
      // shadow="sm"
      // border="1px solid #eee"
      sx={{
        position: "-webkit-sticky",
        /* Safari */ position: "sticky",
        top: "0",
      }}
    >
      <Flex
        mx="auto"
        minH="60px"
        p={{ base: "8px 32px", sm: "8px 16px" }}
        justify="center"
        align="center"
        w="100%"
        maxW={{ base: "800px", md: "100vw" }}
      >
        <Flex
          w="100%"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          position="relative"
          justifyContent="center"
        >
          <IconButton
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            position="absolute"
            left="8px"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          <OurNames size="small" />
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
    <Stack px="36px" py="16px" display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={700} color="text.primary">
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
