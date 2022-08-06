import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  FormLabel,
  Input,
  Select,
  FormControl,
  Text,
  Heading,
  RadioGroup,
  Radio,
  Button,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

const PatchForm = ({ data }) => {
  const [formData, setFormData] = useState();
  const [repliedValue, setRepliedValue] = useState();
  const [attendingValue, setAttendingValue] = useState();

  const fullNameRef = useRef();

  useEffect(() => {
    if (data) {
      // console.log("\nPATCH FORM DATA:", data, "\n");
      setFormData(data);

      setRepliedValue(data["replied"] === "FALSE" ? "no" : "yes");
      setAttendingValue(data["attending"] === "yes" ? "yes" : "no");
    }
  }, [data]);

  const handleSubmit = () => {
    let data = {
      full_name: fullNameRef.current.value,
      attending: attendingValue,
      replied: repliedValue,
    };

    // console.log("DATA:", data);
  };

  if (!formData) {
    return null;
  }

  return (
    <React.Fragment>
      <ModalBody>
        <Box>
          <FormControl>
            <FormLabel>full_name</FormLabel>
            <Input defaultValue={formData["full_name"]} ref={fullNameRef} />
          </FormControl>

          <Flex justifyContent="space-between" mt="20px">
            <FormControl>
              <FormLabel>attending</FormLabel>
              <RadioGroup onChange={setAttendingValue} value={attendingValue}>
                <Flex alignItems="center">
                  <Radio value="yes">yes</Radio>
                  <Radio value="no" ml="12px">
                    no
                  </Radio>
                </Flex>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>replied</FormLabel>
              <RadioGroup onChange={setRepliedValue} value={repliedValue}>
                <Flex alignItems="center">
                  <Radio value="yes">yes</Radio>
                  <Radio value="no" ml="12px">
                    no
                  </Radio>
                </Flex>
              </RadioGroup>
            </FormControl>
          </Flex>
        </Box>
      </ModalBody>

      <ModalFooter>
        <Button variant="ghost" mr="8px">
          Cancel
        </Button>
        <Button>Submit</Button>
      </ModalFooter>
    </React.Fragment>
  );
};

export default PatchForm;
