import React from "react";
import {
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import ScheduleItems from "components/ScheduleItems";

const Schedule = () => {
  const tabStyles = {
    color: "neutral.900",
    fontSize: "30px",
    borderBottom: "3px solid",
    borderColor: "neutral.100",
    p: 0,
    _selected: {
      color: "neutral.900",
      borderColor: "secondary.600",
    },
  };

  const panelStyles = {
    // border: "1px solid #ccc",
    pt: "24px",
  };

  return (
    <Flex
      bg="neutral.100"
      border="1px solid #ccc"
      p="32px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Text
        fontSize={{ base: "3xl", sm: "48px" }}
        textAlign="center"
        fontWeight="500"
        // border="1px solid green"
        w="100%"
        mt="32px"
        letterSpacing="2px"
      >
        SCHEDULE
      </Text>
      <Box h="3px" w="50px" bg="neutral.800" mb="16px" />

      <Tabs w="100%" d="flex" flexDirection="column" alignItems="center">
        <TabList
          w="375px"
          BorderBottom="3px solid"
          borderColor="neutral.100"
          display="flex"
          justifyContent="space-between"
          // border="none"
        >
          <Tab {...tabStyles}>FRIDAY</Tab>
          <Tab {...tabStyles}>SATURDAY</Tab>
        </TabList>

        <TabPanels>
          <TabPanel {...panelStyles}>
            {/* <Text>Friday Stuff</Text> */}
            <ScheduleItems />
          </TabPanel>
          <TabPanel {...panelStyles}>
            <Text>Saturday Stuff</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Schedule;
