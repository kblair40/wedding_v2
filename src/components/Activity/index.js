import React from "react";
import {
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

// import { ExternalLink } from "components/Links";

const Activity = ({ label, url, priceLevel }) => {
  return (
    <VStack w="100%" spacing={{ base: 0, md: "4px" }}>
      <HStack w="100%" align="center" justify="space-between">
        <HStack align="end">
          <Heading fontWeight="600" fontSize="xl" d="inline">
            {label || "Name"}
            <Text fontWeight="600" ml="4px" d="inline">
              {"$".repeat(priceLevel)}
            </Text>
          </Heading>
        </HStack>
        <Link href={url} isExternal>
          <IconButton
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            icon={<Icon as={BsArrowRight} boxSize="24px" />}
          />
        </Link>
      </HStack>
      <Text lineHeight="20px" textAlign="left" alignSelf="start">
        Culpa mollit Lorem pariatur minim velit non. Veniam irure laborum est ut
        ad.
      </Text>
    </VStack>
  );
};

export default Activity;
