import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

import PaymentForm from "components/PaymentForm";

const RegistryItemModal = ({ isOpen, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cardNumber = elements.getElement(CardNumberElement);
    const cardExp = elements.getElement(CardExpiryElement);
    const cardCvc = elements.getElement(CardCvcElement);
    console.log("\n\nVALUES:", { cardNumber, cardExp, cardCvc });

    cardExp.clear();
    cardNumber.clear();
    cardCvc.clear();

    // handlePaymentSubmit(e);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Trip to Hawaii</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="2rem">
            Stuff about the trip Nostrud eiusmod ad commodo cupidatat mollit
            nisi qui elit irure. Consequat nulla consequat ea qui sit ea laboris
            non veniam. Qui fugiat esse ex ex.
          </Text>

          <PaymentForm handleSubmit={handleSubmit} />
        </ModalBody>

        {/* <ModalFooter>
          <Button variant="ghost">Close</Button>
          <Button
            mr={3}
            onClick={handleSubmit}
            isDisabled={!stripe || !elements}
          >
            Buy
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default RegistryItemModal;
