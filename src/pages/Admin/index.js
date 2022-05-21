import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, Input, Button } from "@chakra-ui/react";
// import InviteList from 'components/InviteList';

import FetchedInviteList from "components/AdminUtils/FetchedInviteList";
import CSVInput from "components/AdminUtils/CSVInput";
import PageContainer from "components/containers/PageContainer";
import AuthModal from "./AuthModal";
import APIButtons from "./APIButtons";
import api from "apifast";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [apiGuestData, setApiGuestData] = useState();

  const inputRef = useRef();

  const handleSubmit = (password) => {
    if (password === "0326") {
      setAuthenticated(true);
    }
  };

  const getAllGuests = (guests) => {
    setApiGuestData(guests);
  };

  useEffect(() => {
    //
  }, []);

  return (
    <Box px="24px" marginTop="4rem">
      {/* <Flex mb="8px" display="none">
        <Input
          size="sm"
          placeholder="new guest full name"
          w="140px"
          ref={inputRef}
        />
        <Button ml="4px" size="sm" onClick={handleSubmitName}>
          Submit
        </Button>
      </Flex> */}

      <Box>
        <CSVInput apiGuestData={apiGuestData} />
        <APIButtons getAllGuests={getAllGuests} />
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
