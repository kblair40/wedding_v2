import React from "react";
import { Box, Checkbox, Flex, Wrap, WrapItem } from "@chakra-ui/react";

const availableLayers = ["venue", "hotels", "airports", "food", "drinks"];

const CustomLayerControl = ({
  handleAddActiveLayers,
  handleRemoveActiveLayers,
  activeLayers,
}) => {
  const handleChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      handleAddActiveLayers(value);
    } else {
      handleRemoveActiveLayers(value);
    }
  };

  return (
    <Box borderRadius="4px">
      <Flex p=".25rem .5rem">
        <Wrap spacing="1.25rem">
          {availableLayers.map((lyr, i) => {
            return (
              <WrapItem>
                <Checkbox
                  key={i}
                  value={lyr}
                  textTransform="capitalize"
                  onChange={handleChange}
                  isChecked={activeLayers.includes(lyr)}
                >
                  {lyr}
                </Checkbox>
              </WrapItem>
            );
          })}
        </Wrap>
      </Flex>
    </Box>
  );
};

export default CustomLayerControl;
