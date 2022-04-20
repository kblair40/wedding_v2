import React from "react";
import { Box } from "@chakra-ui/react";

import WeddingParty from "components/WeddingParty";
import PageContainer from "components/containers/PageContainer";

const WeddingPartyPage = () => {
  return (
    <PageContainer center>
      <Box className="fade-in-immediate">
        <WeddingParty />
      </Box>
    </PageContainer>
  );
};

export default WeddingPartyPage;
