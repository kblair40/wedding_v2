import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const WhenAndWhere = () => {
  const headerStyles = {
    fontSize: "40px",
    fontWeight: "600",
    textAlign: "center",
  };

  const detailStyles = {
    fontSize: "xlt",
    fontWeight: "400",
    textAlign: "center",
  };

  return (
    <Flex
      py="32px"
      bg="#fff"
      direction={{ base: "column", sm: "row" }}
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Text {...headerStyles}>WHEN</Text>
        <Box h="3px" w="60px" bg="neutral.800" mb="16px" />
        <Text {...detailStyles}>
          Saturday
          <br />
          January 21, 2023
        </Text>
      </Flex>
      <Flex
        mt={{ base: "24px", sm: 0 }}
        alignItems="center"
        flexDirection="column"
        ml={{ base: 0, sm: "4rem", md: "8rem" }}
        // border="1px solid #ccc"
      >
        <Text {...headerStyles}>WHERE</Text>
        <Box h="3px" w="60px" bg="neutral.800" mb="16px" />
        <Text {...detailStyles}>
          Casa Feliz
          <br />
          Winter Park, FL
        </Text>
      </Flex>
    </Flex>
  );
};

export default WhenAndWhere;
