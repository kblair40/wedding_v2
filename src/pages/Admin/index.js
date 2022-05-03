import React, { useState, useEffect } from "react";

// import InviteList from 'components/InviteList';

import FetchedInviteList from "components/AdminUtils/FetchedInviteList";
import CSVInput from "components/AdminUtils/CSVInput";
import PageContainer from "components/containers/PageContainer";
import AuthModal from "./AuthModal";

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
    <PageContainer>
      <AuthModal
        isOpen={!authenticated}
        onClose={() => setAuthenticated(true)}
        handleSubmit={handleSubmit}
      />

      {authenticated && (
        <>
          <CSVInput />
          <FetchedInviteList />
        </>
      )}
    </PageContainer>
  );
};

export default Admin;
