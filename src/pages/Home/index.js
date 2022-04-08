import React from "react";
import { Text, Box } from "@chakra-ui/react";

// import bw_hor_img from "assets/images/bw_dock.jpg";
// import color_hor_img from "assets/images/color_dock2.jpg";
// import Auth from "components/Auth";
// import Invitation from "components/Invitation";
// import { getAllInvitees } from "api/api";
import color_hor_img from "assets/images/dock_kiss.jpg";
import CountdownClock from "components/CountdownClock";
import PageContainer from "components/containers/PageContainer";

const Home = () => {
  return (
    <PageContainer px={0} center>
      <Box
        bgImage={color_hor_img}
        w="100vw"
        h="80vh"
        bgSize="cover"
        bgPosition="center center"
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
