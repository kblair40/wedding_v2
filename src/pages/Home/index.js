import React from "react";
import { Box } from "@chakra-ui/react";

import color_hor_img from "assets/images/dock_kiss.jpg";
import CountdownClock from "components/CountdownClock";
import PageContainer from "components/containers/PageContainer";

import "./index.css";

const Home = () => {
  return (
    <PageContainer px={0} center>
      <Box
        className="bg-image-main"
        zIndex={-1}
        position="relative"
        bgImage={color_hor_img}
        w="100vw"
        // h={{ base: "50vh", sm: "60vh", lg: "67vh" }}
        h={{ base: "90vh", sm: "90vh", lg: "67vh" }}
        bgPosition={{ base: "center 70%", md: "center 60%" }}
        bgAttachment="fixed"
        bgRepeat="no-repeat"
      />
      <Box h="1000px" />

      <Box className="timer">
        <CountdownClock />
      </Box>
    </PageContainer>
  );
};

export default Home;
