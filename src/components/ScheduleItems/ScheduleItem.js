import React from "react";
import { Text, Flex, Heading, Button, Icon } from "@chakra-ui/react";

import { fontSizes, colors } from "utils/custom-theme";

const ScheduleItem = ({ heading, time, who, dressCode, locationName }) => {
  const textStyles = {
    fontSize: fontSizes.lgt,
    fontWeight: "500",
  };

  return (
    <Flex direction="column" mb="40px" w="100%" maxW="600px">
      <Flex align="center" justifyContent="space-between" w="100%" mb="12px">
        <Heading mr="4px" fontSize="30.38px" fontWeight="700">
          {heading}
        </Heading>
        <Text {...textStyles}>{time}</Text>
      </Flex>
      <Flex justifyContent="space-between" w="100%" alignItems="flex-start">
        <Flex direction="column">
          <Text {...textStyles}>{who}</Text>
          <Text {...textStyles}>Dress: {dressCode}</Text>
        </Flex>

        <Button
          color={colors.neutral.black}
          variant="link"
          fontSize="lg"
          textDecoration="underline"
          fontWeight="500"
        >
          {locationName}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ScheduleItem;

const InfoIcon = ({ boxSize = "26px" }) => {
  return (
    <Icon width={boxSize} height={boxSize} viewBox="0 0 26 26" fill="none">
      <g clipPath="url(#clip0_312_5)">
        <path
          d="M13.1433 0.521118C6.45596 0.521118 1.03394 5.94509 1.03394 12.6305C1.03394 19.3198 6.45596 24.7399 13.1433 24.7399C19.8307 24.7399 25.2527 19.3198 25.2527 12.6305C25.2527 5.94509 19.8307 0.521118 13.1433 0.521118ZM13.1433 5.89221C14.2759 5.89221 15.1941 6.81038 15.1941 7.94299C15.1941 9.07561 14.2759 9.99377 13.1433 9.99377C12.0107 9.99377 11.0925 9.07561 11.0925 7.94299C11.0925 6.81038 12.0107 5.89221 13.1433 5.89221ZM15.8777 18.2946C15.8777 18.6181 15.6153 18.8805 15.2917 18.8805H10.9949C10.6713 18.8805 10.4089 18.6181 10.4089 18.2946V17.1227C10.4089 16.7991 10.6713 16.5367 10.9949 16.5367H11.5808V13.4117H10.9949C10.6713 13.4117 10.4089 13.1494 10.4089 12.8258V11.6539C10.4089 11.3303 10.6713 11.068 10.9949 11.068H14.1199C14.4435 11.068 14.7058 11.3303 14.7058 11.6539V16.5367H15.2917C15.6153 16.5367 15.8777 16.7991 15.8777 17.1227V18.2946Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_312_5">
          <rect
            width="25"
            height="25"
            fill="white"
            transform="translate(0.643311 0.130493)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};
