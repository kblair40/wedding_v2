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

  const inputRef = useRef();

  const handleSubmit = (password) => {
    if (password === "0326") {
      setAuthenticated(true);
    }
  };

  const handleSubmitName = async () => {
    if (!inputRef.current) return;

    let { value: name } = inputRef.current;
    console.log("NAME:", name);

    let response = await api.post("/guest", {
      full_name: name,
    });

    console.log("RESPONSE:", response);
  };

  useEffect(() => {
    //
  }, []);

  return (
    <Box
      px="24px"
      marginTop="4rem"
      // w="100vw"
    >
      <Flex mb="8px">
        <Input
          size="sm"
          placeholder="new guest full name"
          w="140px"
          ref={inputRef}
        />
        <Button ml="4px" size="sm" onClick={handleSubmitName}>
          Submit
        </Button>
      </Flex>

      <Box
      // w="100vw"
      >
        <CSVInput />
        <APIButtons />
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
