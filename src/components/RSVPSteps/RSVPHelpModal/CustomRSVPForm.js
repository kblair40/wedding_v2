import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const CustomRSVPForm = ({ onSubmit, onClose }) => {
  const [dinnerSelection, setDinnerSelection] = useState("");
  const [attending, setAttending] = useState("");
  const [missingFields, setMissingFields] = useState([]);
  const [sending, setSending] = useState(false);
  const [sendingAndAdding, setSendingAndAdding] = useState(false);

  const firstName = useRef();
  const lastName = useRef();
  const dinnerSelectionNotes = useRef();
  const email = useRef();

  const inputStyles = {
    borderColor: "text.tertiary",
    _focus: { borderColor: "text.secondary" },
    _hover: { borderColor: "text.secondary" },
    _placeholder: {
      color: "text.tertiary",
      fontSize: { base: "xs", sm: "md" },
    },
    size: "sm",
  };

  const handleSubmit = async (addAnother = false) => {
    let formData = {
      first_name: firstName.current.value,
      last_name: lastName.current.value,
      dietary_restrictions: dinnerSelectionNotes.current.value,
      email_address: email.current.value,
      dinner_selection: dinnerSelection,
      attending: attending,
    };
    // console.log("FORM DATA:", formData);

    const requiredFields = ["first_name", "last_name", "attending"];

    let isAttending = attending === "yes";

    if (isAttending) {
      requiredFields.push("dinner_selection");
    }

    if (!validateForm(formData, requiredFields)) {
      // console.log("\n", { valid: true });
      return;
    }

    if (addAnother) {
      setSendingAndAdding(true);
    } else {
      setSending(true);
    }

    await onSubmit(formData);

    if (addAnother) {
      setSendingAndAdding(false);
      // reset form values and do not close modal
      firstName.current.value = "";
      lastName.current.value = "";
      dinnerSelectionNotes.current.value = "";
      email.current.value = "";
      setDinnerSelection("");
      setAttending("");
    } else {
      setSending(false);
      onClose();
    }
  };

  const validateForm = (data, fields) => {
    // console.log({ data, fields });
    let isValid = true;
    let missingFields = [];
    for (let field of fields) {
      if (!data[field]) {
        // console.log("FAILED ON", field);
        isValid = false;
        missingFields.push(field);
      }
    }

    if (missingFields.length) {
      // console.log({ missingFields });

      setMissingFields(missingFields);
    }

    return isValid;
  };

  const clearErrors = () => {
    if (missingFields.length) {
      setMissingFields([]);
    }
  };

  return (
    <React.Fragment>
      <ModalBody>
        <Text mb="4px" fontSize="sm" fontWeight="500">
          Please fill this out instead...
        </Text>
        <Text mb="24px" fontSize="sm" fontWeight="500">
          If you are replying for more than just yourself, please click the
          'Send and Add Another' option at the bottom
        </Text>

        <Box>
          <HStack spacing="1rem">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input {...inputStyles} ref={firstName} onFocus={clearErrors} />
              {missingFields.includes("first_name") && (
                <Text mt="2px" fontSize="sm" color="red.500">
                  Please enter your first name
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input {...inputStyles} ref={lastName} onFocus={clearErrors} />
              {missingFields.includes("last_name") && (
                <Text mt="2px" fontSize="sm" color="red.500">
                  Please enter your last name
                </Text>
              )}
            </FormControl>
          </HStack>

          <Box mt="24px">
            <Text mb="8px" fontWeight="500">
              Will you be attending?
            </Text>

            <RadioGroup
              onChange={(val) => {
                clearErrors();
                setAttending(val);
              }}
              value={attending}
            >
              <HStack spacing="16px">
                <Radio value="yes">Yes!</Radio>

                <Radio value="no">Unfortunately not</Radio>
              </HStack>
            </RadioGroup>
            {missingFields.includes("attending") && (
              <Text mt="2px" fontSize="sm" color="error.500">
                Please choose an option!
              </Text>
            )}
          </Box>

          <Box mt="24px">
            <Text mb="8px" fontWeight="500">
              Pick a dinner entree
            </Text>
            <RadioGroup
              onChange={(val) => {
                clearErrors();
                setDinnerSelection(val);
              }}
              value={dinnerSelection}
            >
              <HStack spacing="24px">
                <HStack spacing="16px">
                  <Radio value="chicken">Chicken</Radio>
                  <Radio value="beef">Beef</Radio>
                </HStack>
                <Input
                  {...inputStyles}
                  placeholder="Any dietary restrictions?"
                  ref={dinnerSelectionNotes}
                />
              </HStack>
            </RadioGroup>
            {missingFields.includes("dinner_selection") && (
              <Text mt="2px" fontSize="sm" color="red.500">
                Please choose an option!
              </Text>
            )}
          </Box>
        </Box>

        <FormControl mt="24px" mb="16px">
          <FormLabel>
            Your email address (optional)
            <Text fontSize="sm">
              If you provide this, we'll send you an email to confirm that we
              got your response
            </Text>
          </FormLabel>
          <Input {...inputStyles} ref={email} />
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button variant="ghost" mr="16px" onClick={onClose}>
          Cancel
        </Button>
        <Button
          isLoading={sendingAndAdding}
          variant="ghost"
          mr="16px"
          onClick={() => handleSubmit(true)}
        >
          Send and Add Another
        </Button>
        <Button isLoading={sending} onClick={() => handleSubmit(false)}>
          Send
        </Button>
      </ModalFooter>
    </React.Fragment>
  );
};

export default CustomRSVPForm;
