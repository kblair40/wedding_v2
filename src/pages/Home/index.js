import React from "react";
import { Box, Text, Image, AspectRatio, Center } from "@chakra-ui/react";

import bw_hor_img from "assets/images/bw_dock.jpg";
// import color_hor_img from "assets/images/color_dock2.jpg";
import Auth from "components/Auth";
import Invitation from "components/Invitation";
import {getGuest} from 'api/api'

const Home = () => {
  return (
    <Box px="24px">
      {/* <Text>Home</Text> */}
      <Auth getGuest={getGuest} />
      <AspectRatio maxH="400px">
        <Image src={bw_hor_img} borderRadius="4px" w="100%" />
        {/* <Image src={color_hor_img} borderRadius="8px" /> */}
        {/* <Image src={bw_hor_img} borderRadius="8px" /> */}
      </AspectRatio>
      <Center>
        <Invitation />
      </Center>
    </Box>
  );
};

export default Home;
