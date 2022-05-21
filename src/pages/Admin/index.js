import React, { useState, useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";
// import InviteList from 'components/InviteList';

import FetchedInviteList from "components/AdminUtils/FetchedInviteList";
import CSVInput from "components/AdminUtils/CSVInput";
import PageContainer from "components/containers/PageContainer";
import AuthModal from "./AuthModal";
import APIButtons from "./APIButtons";
import api from "apifast";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSubmit = (password) => {
    if (password === "0326") {
      setAuthenticated(true);
    }
  };

  useEffect(() => {
    //
  }, []);

  return (
    <Box px="24px">
      <Flex marginTop="4rem">
        <APIButtons />
      </Flex>
    </Box>
  );
};

export default Admin;

// return (
//   <PageContainer>
//     <AuthModal
//       isOpen={!authenticated}
//       onClose={() => setAuthenticated(true)}
//       handleSubmit={handleSubmit}
//     />

//     {authenticated && (
//       <>
//         <CSVInput />
//         <FetchedInviteList />
//       </>
//     )}
//   </PageContainer>
// );
