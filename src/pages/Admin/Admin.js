import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

import CSVInput from "components/AdminUtils/CSVInput";
import APIButtons from "./APIButtons";

const Admin = () => {
  const [apiGuestData, setApiGuestData] = useState();

  const getAllGuests = (guests) => {
    setApiGuestData(guests);
  };

  return (
    <Box px=".5rem" marginTop="4rem">
      <Box>
        <APIButtons getAllGuests={getAllGuests} />
        <CSVInput apiGuestData={apiGuestData} />
      </Box>
    </Box>
  );
};

export default Admin;
