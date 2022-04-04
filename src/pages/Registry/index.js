import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import RegistryItem from "components/RegistryItem";
import RegistryItemModal from "components/RegistryItemModal";

const Registry = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box px="24px">
      <Box>
        <RegistryItem onClick={() => setOpen(true)} />
      </Box>

      {open && (
        <RegistryItemModal isOpen={open} onClose={() => setOpen(false)} />
      )}
    </Box>
  );
};

export default Registry;
