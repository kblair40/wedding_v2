import React from "react";
import { Box } from "@chakra-ui/react";

import MainBackground from "components/MainBackground";
import Travel from "sections/Travel";
import Activities from "sections/Activities";
import Schedule from "sections/Schedule";
import WeddingParty from "sections/WeddingParty";
import Gallery from "sections/Gallery";
import WhenAndWhere from "sections/WhenAndWhere";

const Main = () => {
  return (
    <Box>
      <MainBackground />

      <WhenAndWhere />
      <Travel />
      <Schedule />
      <Activities />
      <WeddingParty />
      <Gallery />
    </Box>
  );
};

export default Main;
