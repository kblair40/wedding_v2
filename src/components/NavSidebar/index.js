import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { NAV_ITEMS } from "utils/constants";
import NavLink from "components/NavLink";
import OurNames from "components/OurNames";

const Nav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box mt={{ base: 0, md: "8px" }} mb="16px">
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
            position="absolute"
            left={0}
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

export default Nav;

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
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
    </Stack>
  );
};
