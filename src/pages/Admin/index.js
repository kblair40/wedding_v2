import React from "react";

// import InviteList from 'components/InviteList';

import FetchedInviteList from "components/AdminUtils/FetchedInviteList";
import CSVInput from "components/AdminUtils/CSVInput";
import PageContainer from "components/containers/PageContainer";

const Admin = () => {
  return (
    <PageContainer>
      <CSVInput />
      <FetchedInviteList />
    </PageContainer>
  );
};

export default Admin;
