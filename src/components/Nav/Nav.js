import React from "react";
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  Stack,
  Collapse,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdClose } from "react-icons/md";
import { NAV_ITEMS } from "utils/constants";
import "./index.css";

const Nav = ({
  handleChangeSection,
  sectionInView,
  topInView,
  mainImgLoaded,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      h="52px"
      justifyContent="center"
      position="fixed"
      top="0"
      w={{
        md: "100%",
      }}
      bg={{ base: "rgba(0,0,0,0)", md: "rgba(255, 255, 255, 1)" }}
      zIndex={1000}
      shadow={{ md: "sm" }}
    >
      {mainImgLoaded && (
        <Box position="relative" w="100%" className="fade-in-immediate">
          <Flex py="8px" justify="center" align="center" w="100%" h="100%">
            <Box
              display={{ base: "flex", md: "none" }}
              h="100%"
              justifyContent="flex-start"
              alignItems="center"
            >
              <IconButton
                position="absolute"
                my="auto"
                left={{ base: "8px" }}
                size="lg"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
                onClick={onToggle}
                color={topInView ? "#fff" : "#000"}
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
            </Box>

            <Flex
              display={{ base: "none", md: "flex" }}
              position={{ base: "absolute", md: "block" }}
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
                          fontWeight="700"
                          whiteSpace="nowrap"
                          fontSize="smt"
                          textTransform="uppercase"
                          letterSpacing="1px"
                        >
                          {navItem.label}
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Flex>
          </Flex>

          <Box
            bg="rgba(255, 255, 255, 0.98)"
            shadow="sm"
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

              <MobileNav
                handleChangeSection={handleChangeSection}
                onToggle={onToggle}
              />
            </Collapse>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;

const MobileNav = ({ handleChangeSection, onToggle }) => {
  return (
    <Stack display={{ md: "none" }} spacing="4px" w="100%" p="0 16px 16px">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          onClick={() => {
            handleChangeSection(navItem.section);
            onToggle();
          }}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, onClick }) => {
  return (
    <Flex
      borderRadius="full"
      onClick={onClick}
      cursor="pointer"
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
