import React from "react";
import { Box } from "@chakra-ui/react";

import CodeInput from "components/Auth/CodeInput";

const Auth = ({ getGuest }) => {
  return (
    <Box>
      <CodeInput getGuest={getGuest} />
    </Box>
  );
};

export default Auth;
