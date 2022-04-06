import React, { useRef } from "react";
import { Box, VStack, Text, HStack, Input } from "@chakra-ui/react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const elements = useElements();

  const fnRef = useRef();
  const lnRef = useRef();

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
          fontSize: "14px",
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
        <HStack>
          <Box>
            <Text fontSize="sm" fontWeight="700" w="200px">
              First Name
            </Text>
            <Input size="xs" ref={fnRef} />
          </Box>
          <Box>
            <Text fontSize="sm" fontWeight="700" w="200px">
              Last Name
            </Text>
            <Input size="xs" ref={lnRef} />
          </Box>
        </HStack>
        <HStack mt="8px" spacing="16px" flexWrap="wrap">
          <Box>
            <Text fontSize="sm" fontWeight="700" w="200px">
              Card Number
            </Text>
            <Box border="1px solid #cdcdcd" p="2px">
              <CardNumberElement options={baseStyles} />
            </Box>
          </Box>

          <HStack spacing="16px">
            <Box>
              <Text fontSize="sm" fontWeight="700">
                Exp Date
              </Text>
              <Box w="72px" border="1px solid #cdcdcd" py="2px" px="1px">
                <CardExpiryElement options={baseStyles} />
              </Box>
            </Box>

            <Box w="72px">
              <Text fontSize="sm" fontWeight="700">
                CVC
              </Text>
              <Box border="1px solid #cdcdcd" py="2px" px="1px">
                <CardCvcElement options={baseStyles} />
              </Box>
            </Box>
          </HStack>
        </HStack>
      </form>
    </Box>
  );
};

export default PaymentForm;
