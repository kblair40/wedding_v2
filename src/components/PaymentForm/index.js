import React from "react";
import { Box } from "@chakra-ui/react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  return (
    <Box>
      <form>
        <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement />
      </form>
    </Box>
  );
};

export default PaymentForm;
