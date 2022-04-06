import React, { useState } from "react";
// import { Box } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import RegistryItem from "components/RegistryItem";
import RegistryItemModal from "components/RegistryItemModal";
import PageContainer from "components/containers/PageContainer";

const stripePromise = loadStripe(
  "pk_test_51KlN8AIJ60ukkYZAjzSTRzDzHIRXlAuqlBHDJ0ySro9NkmW1DK2rZ3f7Vy03XKDGN2d5RA9ZwxaztC8yRXNZezIf00yztmqaGR"
);

const Registry = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageContainer center>
      <Elements stripe={stripePromise}>
        <RegistryItem onClick={() => setOpen(true)} />

        {open && (
          <RegistryItemModal isOpen={open} onClose={() => setOpen(false)} />
        )}
      </Elements>
    </PageContainer>
  );
};

export default Registry;
