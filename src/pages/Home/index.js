import React from "react";
import { Image, Center, Text } from "@chakra-ui/react";

// import bw_hor_img from "assets/images/bw_dock.jpg";
// import color_hor_img from "assets/images/color_dock2.jpg";
import color_hor_img from "assets/images/dock_kiss2.jpg";
// import Auth from "components/Auth";
import Invitation from "components/Invitation";
import { getAllInvitees } from "api/api";
import CountdownClock from "components/CountdownClock";
import PageContainer from "components/containers/PageContainer";

const Home = () => {
  const fetchGuests = () => {
    //
    getAllInvitees();
  };
  return (
    <PageContainer center>
      {/* <Auth getGuest={getGuest} /> */}
      <Center>
        <Image src={color_hor_img} borderRadius="4px" maxW="100%" />
      </Center>
      {/* <Center>
        <Invitation />
      </Center> */}
      {/* <Button onClick={getAllInvitees}>fetch</Button> */}
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
    </PageContainer>
  );
};

export default Home;
