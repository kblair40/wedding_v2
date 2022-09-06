import { Box, Text, Flex } from "@chakra-ui/react";

import { SadTearIcon, CheckCircleOutlineIcon } from "components/Icons";

const CustomToast = ({ isAttending, title, description }) => {
  return (
    <Flex
      p={description ? "8px 24px" : "8px 16px"}
      borderRadius="8px"
      bg={isAttending ? "primary.400" : "error.400"}
      w="min-content"
      alignItems={!description ? "center" : "flex-start"}
    >
      {!isAttending ? (
        // <Icon as={SadTearIcon} color="white" boxSize="24px" />
        <SadTearIcon />
      ) : (
        // <Icon as={MdCheckCircle} color="white" boxSize="24px" />
        <CheckCircleOutlineIcon />
      )}

      <Box ml="16px">
        <Text
          whiteSpace="nowrap"
          color="white"
          fontWeight="700"
          fontSize="lg"
          lineHeight="18px"
          mb={description ? "8px" : "0"}
        >
          {title}
        </Text>
        <Text
          whiteSpace="nowrap"
          color="white"
          fontWeight="500"
          lineHeight="16px"
        >
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default CustomToast;
