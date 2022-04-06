import React, { useState } from "react";
// import { Box } from "@chakra-ui/react";

import RegistryItem from "components/RegistryItem";
import RegistryItemModal from "components/RegistryItemModal";
import PageContainer from "components/containers/PageContainer";

const Registry = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer center>
      <RegistryItem onClick={() => setOpen(true)} />

      {open && (
        <RegistryItemModal isOpen={open} onClose={() => setOpen(false)} />
      )}
    </PageContainer>
  );
};

export default Registry;
