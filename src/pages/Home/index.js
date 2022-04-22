import React from "react";
import { Box } from "@chakra-ui/react";

import color_hor_img from "assets/images/dock_kiss.jpg";
import CountdownClock from "components/CountdownClock";
import PageContainer from "components/containers/PageContainer";
import OurNames from "components/OurNames";

import Travel from "pages/Travel";
import WhenAndWhere from "pages/WhenAndWhere";
import Schedule from "pages/Schedule";
import ToDoToEat from "pages/ToDoToEat";
import WeddingPartyPage from "pages/WeddingPartyPage";

import "./index.css";

const Home = () => {
  return (
    <PageContainer px={0} center>
      <Box
        className="fade-in-immediate"
        zIndex={-1}
        position="relative"
        bgImage={color_hor_img}
        w="100vw"
        h={{ base: "calc(100vh - 58px)" }}
        bgPosition={{ base: "center 70%", md: "center 60%" }}
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        filter="grayscale(.2) "
      />

      <Box
        // position="absolute"
        // top="160px"
        // left="0"
        // boxSize="100%"
        zIndex={-1}
        // border="1px solid red"
      >
        {/* <OurNames /> */}
      </Box>

      <Box>
        <WhenAndWhere />
      </Box>

      <Box>
        <Travel />
      </Box>

      <Box>
        <Schedule />
      </Box>

      <Box>
        <ToDoToEat />
      </Box>

      <Box>
        <WeddingPartyPage />
      </Box>

      {/* <Box className="fade-in-immediate">
        <CountdownClock />
      </Box> */}
    </PageContainer>
  );
};

export default Home;
