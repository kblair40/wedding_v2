import React from "react";
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

import casa1 from "assets/images/casa/casa_1.webp";
import { glass } from "utils/styles";
import ScheduleItems from "components/ScheduleItems";
import SectionLabel from "components/SectionLabel";

const Schedule = () => {
  const tabStyles = {
    color: "text.primary",
    fontWeight: "500",
    fontSize: useBreakpointValue({ base: "xlt", sm: "2xlt" }),
    borderBottom: "none",
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
        loading="lazy"
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

        <Tabs
          defaultIndex={1}
          w="100%"
          d="flex"
          flexDirection="column"
          alignItems="center"
        >
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
              {/* <ScheduleItems day="friday" /> */}
              <Text
                fontWeight="600"
                letterSpacing="1px"
                textAlign="center"
                mt="16px"
                fontSize="5xl"
              >
                TBD
              </Text>
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
