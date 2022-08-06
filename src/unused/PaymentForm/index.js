import React, { useRef, useState, useEffect } from "react";
import { Box, VStack, Text, HStack, Input, Button } from "@chakra-ui/react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const [paymentRequest, setPaymentRequest] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  const fnRef = useRef();
  const lnRef = useRef();

  useEffect(() => {
    const getStripe = async () => {
      if (stripe) {
        const pr = stripe.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            label: "Demo total",
            amount: 1099,
          },
          // requestPayerName: true,
          // requestPayerEmail: true,
        });

        // console.log("\n\nPR OBJECT:", pr);
        let cmp = await pr.canMakePayment();
        // console.log("Can make payment:", cmp);

        // Check the availability of the Payment Request API.
        pr.canMakePayment().then((result) => {
          if (result) {
            // console.log("SUCCESS RESULT:", result);
            setPaymentRequest(pr);
          } else {
            // console.log("FAILED RESULT:", result);
          }
        });
      }
    };
    getStripe();
  }, [stripe]);

  const handleSubmit = async (e) => {
    // console.log("SUBMITTING\n");
    e.preventDefault();

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExp = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);
    // console.log("\n\nVALUES:", { cardNumber, cardExp, cardCvc });

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/registry",
      },
    });

    if (result.error) {
      // console.log("\n\nPAYMENT ERROR:", result.error.message);
    } else {
      // console.log("PAYMENT SUCCESSFUL!");
    }

    // cardExp.clear();
    // cardNumber.clear();
    // cardCvc.clear();

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
        <HStack justifyContent="flex-end" mt="8px" py="8px">
          {paymentRequest && (
            <PaymentRequestButtonElement options={{ PaymentRequest }} />
          )}
          {/* <Button onClick={handleSubmit} size="sm" fontWeight="700" w="60px">
            Buy
          </Button> */}
        </HStack>
        {/* <PaymentRequestButtonElement /> */}
      </form>
    </Box>
  );
};

export default PaymentForm;
