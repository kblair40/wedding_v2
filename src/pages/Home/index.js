import React from "react";
import { Box, Icon, Flex, Text } from "@chakra-ui/react";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { BsArrowDownLeft } from "react-icons/bs";

import color_hor_img from "assets/images/dock_kiss.jpg";
import CountdownClock from "components/CountdownClock";
import PageContainer from "components/containers/PageContainer";
import OurNames from "components/OurNames";

import Travel from "pages/Travel";
import LogoText from "components/LogoText";
import WhenAndWhere from "pages/WhenAndWhere";
// import Schedule from "pages/Schedule";
import ToDoToEat from "pages/ToDoToEat";
// import WeddingPartyPage from "pages/WeddingPartyPage";

import "./index.css";

const Home = () => {
  return (
    <PageContainer px={0} center>
      <Box
        position="relative"
        // border="1px solid green"
        display="flex"
        justifyContent="center"
      >
        <Box
          className="fade-in-immediate"
          zIndex={-1}
          position="relative"
          bgImage={color_hor_img}
          w="100vw"
          h={{ base: "100vh" }}
          bgPosition={{ base: "center 70%", md: "center 60%" }}
          bgAttachment="fixed"
          bgRepeat="no-repeat"
          filter="grayscale(.6) "
          // border="1px solid red"
        />

        <Box position="absolute" top="96px" left="0" boxSize="100%" zIndex={-1}>
          <OurNames />
        </Box>

        <ArrowDown />
      </Box>

      {/* <Box>
        <WhenAndWhere />
      </Box> */}

      <Box>
        <Travel />
      </Box>

      {/* <Box>
        <Schedule />
      </Box> */}

      <Box>
        <ToDoToEat />
      </Box>

      {/* <Box>
        <WeddingPartyPage />
      </Box> */}

      {/* <Box className="fade-in-immediate">
        <CountdownClock />
      </Box> */}
    </PageContainer>
  );
};

export default Home;

const ArrowDown = () => (
  <Flex
    direction="column"
    alignItems="center"
    position="absolute"
    bottom="8px"
    mx="auto"
  >
    <Text fontSize="xl" letterSpacing="2.5px" color="#fff" fontWeight="500">
      SCROLL FOR MORE
    </Text>
    <Icon
      as={BsArrowDownLeft}
      transform="rotate(-45deg)"
      h="100px"
      color="#fff"
      w="60px"
    />
  </Flex>
);
