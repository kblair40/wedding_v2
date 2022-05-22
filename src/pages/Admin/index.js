import React, { useState, useEffect } from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
// import InviteList from 'components/InviteList';

import FetchedInviteList from "components/AdminUtils/FetchedInviteList";
import CSVInput from "components/AdminUtils/CSVInput";
import PageContainer from "components/containers/PageContainer";
import AuthModal from "./AuthModal";
import APIButtons from "./APIButtons";
import api from "apifast";

const Admin = () => {
  // const [authenticated, setAuthenticated] = useState(false);
  const [apiGuestData, setApiGuestData] = useState();

  // const handleSubmit = (password) => {
  //   if (password === "0326") {
  //     setAuthenticated(true);
  //   }
  // };

  const getAllGuests = (guests) => {
    setApiGuestData(guests);
  };

  // useEffect(() => {
  //
  // }, []);

  return (
    <Box px="24px" marginTop="4rem">
      <Box>
        <APIButtons getAllGuests={getAllGuests} />
        <CSVInput apiGuestData={apiGuestData} />
      </Box>
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
