import React from "react";
import { Text, Box } from "@chakra-ui/react";

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
        h={{ base: "25vh", sm: "67vh" }}
        bgPosition={{ base: "center 80%", md: "center 55%" }}
        bgAttachment="fixed"
        bgRepeat="no-repeat"
      />
      <CountdownClock />
      <Text
        mt="8px"
        mb="24px"
        fontSize="42px"
        fontFamily="Great Vibes"
        textAlign="center"
      >
        until we celebrate!
      </Text>
      <Box h="1000px" />
    </PageContainer>
  );
};

export default Home;
