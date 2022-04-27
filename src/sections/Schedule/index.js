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
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";

import ScheduleItems from "components/ScheduleItems";

const Schedule = () => {
  const theme = useTheme();
  console.log("\n\n\n\n\n\n\n\nTHEME:", theme);

  const tabStyles = {
    color: "neutral.900",
    fontSize: useBreakpointValue({ base: "xl", sm: "2xl" }),
    borderBottom: "3px solid",
    borderColor: "#f7f5f1",
    p: 0,
    _selected: {
      color: "neutral.900",
      borderColor: "secondary.200",
    },
  };

  const panelStyles = {
    pt: "24px",
  };

  return (
    <Flex
      bg="#f7f5f1"
      pt="32px"
      w="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Text
        fontSize={{ base: "3xl", sm: "48px" }}
        textAlign="center"
        fontWeight="500"
        w="100%"
        letterSpacing="2px"
      >
        SCHEDULE
      </Text>
      <Box h="3px" w="60px" bg="neutral.800" mb="24px" />

      <Tabs w="100%" d="flex" flexDirection="column" alignItems="center">
        <TabList
          w={{ base: "325px", sm: "375px" }}
          borderBottom="3px solid"
          borderColor="#f7f5f1"
          display="flex"
          justifyContent="space-between"
        >
          <Tab {...tabStyles}>FRIDAY</Tab>
          <Tab {...tabStyles}>SATURDAY</Tab>
        </TabList>

        <TabPanels>
          <TabPanel {...panelStyles}>
            <ScheduleItems day="friday" />
          </TabPanel>
          <TabPanel {...panelStyles}>
            <ScheduleItems day="saturday" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Schedule;
