import React, { useState } from "react";
import { Box, VStack, Text, HStack, Input } from "@chakra-ui/react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  // const [focusedEl, setFocusedEl] = useState();

  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExp = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);

    cardExp.clear();
    cardNumber.clear();
    cardCvc.clear();

    // handlePaymentSubmit(e);
  };

  const baseStyles = {
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#2d2d2d",
        fontWeight: "500",
        fontFamily: "Josefin Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          fontFamily: "Josefin Sans, Segoe UI, sans-serif",
          color: "#7B868C",
        },
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#f00",
      },
    },
  };

  return (
    <Box w="100%">
      <form style={{ width: "100%" }}>
        <HStack mt="8px" spacing="16px">
          <Box>
            <Text fontSize="sm" fontWeight="700" w="200px">
              Card Number
            </Text>
            <Box>
              <CardNumberElement options={baseStyles} />
            </Box>
          </Box>
          <HStack spacing="16px">
            <Box w="64px">
              <Text fontSize="sm" fontWeight="700">
                Exp Date
              </Text>
              <Box w="64px">
                <CardExpiryElement options={baseStyles} />
              </Box>
            </Box>

            <Box w="64px">
              <Text fontSize="sm" fontWeight="700">
                CVC
              </Text>
              <Box>
                <CardCvcElement
                  options={baseStyles}
                  onFocus={() => {
                    console.log("CVC Focus");
                    // setFocusedEl("cvc");
                  }}
                />
              </Box>
            </Box>
          </HStack>
        </HStack>
      </form>
    </Box>
  );
};

export default PaymentForm;
