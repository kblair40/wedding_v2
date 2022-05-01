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
import SectionLabel from "components/SectionLabel";

const Schedule = () => {
  const theme = useTheme();
  // console.log("\n\n\n\n\n\n\n\nTHEME:", theme);

  const tabStyles = {
    color: "neutral.900",
    fontWeight: "500",
    fontSize: useBreakpointValue({ base: "xlt", sm: "2xlt" }),
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
    <Box bg="#f7f5f1" w="100%">
      <SectionLabel label="schedule" />

      <Tabs w="100%" d="flex" flexDirection="column" alignItems="center">
        <TabList
          w={{ base: "325px", sm: "375px" }}
          borderBottom="3px solid"
          borderColor="#f7f5f1"
          display="flex"
          justifyContent="center"
        >
          <Tab {...tabStyles} mr="4rem">
            FRIDAY
          </Tab>
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
    </Box>
  );
};

export default Schedule;
