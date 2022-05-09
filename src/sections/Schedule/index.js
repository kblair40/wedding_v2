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
  Image,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react";

import casa1 from "assets/images/casa/casa_1.png";
import casa2 from "assets/images/casa/casa_2.png";
import casa3 from "assets/images/casa/casa_3.png";
import casa4 from "assets/images/casa/casa_4.png";
import casa5 from "assets/images/casa/casa5.png";
import casa6 from "assets/images/casa/casa6.png";
import casa7 from "assets/images/casa/casa7.png";
import casa8 from "assets/images/casa/casa8.png"; // NOT NEARLY HIGH ENOUGH - WILL TRY WITH REGISTRY
import ScheduleItems from "components/ScheduleItems";
import SectionLabel from "components/SectionLabel";
import { glass } from "utils/styles";

const Schedule = () => {
  const theme = useTheme();
  // console.log("\n\n\n\n\n\n\n\nTHEME:", theme);

  const tabStyles = {
    color: "text.primary",
    fontWeight: "500",
    fontSize: useBreakpointValue({ base: "xlt", sm: "2xlt" }),
    // borderBottom: "3px solid",
    borderBottom: "none",
    // borderColor: "#f7f5f1",
    p: 0,
    _selected: {
      color: "text.primary",
      borderBottom: "3px solid",
      borderColor: "neutral.700",
      fontWeight: "600",
    },
    _active: {
      bg: "transparent",
    },
  };

  const panelStyles = {
    pt: "24px",
  };

  return (
    <Flex
      w="100%"
      direction="column"
      alignItems="center"
      pb="24px"
      px={{ base: "16px" }}
      overflow="hidden"
      position="relative"
    >
      <Image
        src={casa1}
        w="100%"
        minW="900px"
        zIndex="-1"
        position="absolute"
      />
      <Flex
        mt="24px"
        p={{ base: "16px" }}
        shadow="md"
        justifyContent={{ base: "center" }}
        maxW={{ base: "350px", sm: "450px", md: "600px" }}
        flexDirection="column"
        alignItems="center"
        w="100%"
        {...glass}
      >
        <SectionLabel label="schedule" />

        <Tabs w="100%" d="flex" flexDirection="column" alignItems="center">
          <TabList
            w={{ base: "325px", sm: "375px" }}
            borderBottom="none"
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
      </Flex>
    </Flex>
  );
};

export default Schedule;
