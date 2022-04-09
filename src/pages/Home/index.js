import React from "react";
import { Box } from "@chakra-ui/react";

import color_hor_img from "assets/images/dock_kiss.jpg";
import CountdownClock from "components/CountdownClock";
import PageContainer from "components/containers/PageContainer";

const Home = () => {
  return (
    <PageContainer px={0} center>
      <Box
        zIndex={-1}
        position="relative"
        bgImage={color_hor_img}
        w="100vw"
        h={{ base: "50vh", sm: "60vh", lg: "67vh" }}
        bgPosition={{ base: "center 80%", md: "center 55%" }}
        bgAttachment="fixed"
        bgRepeat="no-repeat"
      />
      <CountdownClock />
    </PageContainer>
  );
};

export default Home;
