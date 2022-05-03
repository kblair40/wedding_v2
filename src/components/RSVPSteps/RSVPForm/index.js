import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Divider,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import RSVPSuccessModal from "components/RSVPSteps/RSVPSuccessModal";

const RSVPForm = ({
  guest,
  relatedGuests,
  checkedGuests,
  handleSubmit,
  startOver,
  step,
}) => {
  // console.log("\n\n\nSTEP:", step, "\n\n\n");
  const [respondingGuests, setRespondingGuests] = useState([]);
  const [respondingGuestNames, setRespondingGuestNames] = useState([]);
  const [multipleRespondants, setMultipleRespondants] = useState(null);
  const [attendingNames, setAttendingNames] = useState([]);
  const [formData, setFormData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [showNextButton, setShowNextButton] = useState(false);

  const navigate = useNavigate("/");

  const anythingElseRef = useRef();

  const formatName = (fn, ln) => {
    return `${fn} ${ln}`;
  };

  useEffect(() => {
    if (!guest) return;

    let respondants = [guest];
    if (checkedGuests && checkedGuests.length) {
      for (let idx of checkedGuests) {
        respondants.push(relatedGuests[idx]);
      }
    }
    // console.log("RESPONDING GUESTS:", respondants);
    setRespondingGuests(respondants);

    let guestNames = respondants.map((respondant) =>
      formatName(respondant.first_name, respondant.last_name)
    );

    setRespondingGuestNames(guestNames);
    let multipleRespondants = respondants.length > 1;
    setMultipleRespondants(multipleRespondants);
    const blankFormData = {
      attending: undefined,
      dinner_selection: "",
      dinner_selection_notes: "",
    };

    if (multipleRespondants) {
      let blankDataObjects = {};

      for (let name of guestNames) {
        blankDataObjects[name] = blankFormData;
      }

      // console.log("\n\nBLANK OBJECTS:", blankDataObjects);
      setFormData(blankDataObjects);
    } else {
      setFormData({ [guestNames[0]]: blankFormData });
    }
  }, [relatedGuests, checkedGuests]);

  const handleChangeAttendance = (val, name) => {
    // console.log("CHANGE ATTENDANCE:", { val, name });
    setFormData({
      ...formData,
      [name]: { ...formData[name], attending: val },
    });

    if (val === "yes") {
      if (!attendingNames.includes(name)) {
        setAttendingNames([...attendingNames, name]);
      }
    } else if (val === "no") {
      if (attendingNames.includes(name)) {
        setAttendingNames([...attendingNames].filter((n) => n !== name));
      }
    }
  };

  const handleChangeMeal = (val, name, field) => {
    setFormData({
      ...formData,
      [name]: { ...formData[name], [field]: val },
    });
  };

  const sendFormData = async () => {
    let res = await handleSubmit(
      {
        ...formData,
        special_requests: anythingElseRef.current.value,
      },
      respondingGuests
    );

    if (res) {
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    startOver();
    // navigate("/");
  };

  return (
    <Box maxW="580px" borderRadius="4px" p="8px">
      {/* <Button
        onClick={startOver}
        position="absolute"
        top="1rem"
        left=".5rem"
        // size="sm"
        zIndex={10000}
        variant="ghost"
      >
        Reset
      </Button> */}
      <Box mb="16px" px="16px" py="16px" maxH="100%">
        {respondingGuests && respondingGuests.length > 1 && (
          <React.Fragment>
            <Text color="text.secondary">
              Replying for {`${respondingGuestNames.join(", ")}`}
            </Text>
            <Divider my="16px" />
          </React.Fragment>
        )}

        <Box overflowY="hidden" flex={1}>
          <FormControl>
            {!multipleRespondants ? (
              <React.Fragment>
                <FormLabel fontWeight="500">Can you make it?</FormLabel>

                <RadioGroup
                  onChange={(val) =>
                    handleChangeAttendance(val, respondingGuestNames[0])
                  }
                >
                  <HStack spacing="16px" flexWrap="wrap">
                    <Radio value="yes">I'll be there!</Radio>
                    <Radio value="no">Regretfully decline</Radio>
                  </HStack>
                </RadioGroup>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FormLabel fontWeight="500" mb="1rem">
                  Please let us know who can and cannot make it
                </FormLabel>
                {respondingGuestNames.map((name, i) => {
                  return (
                    <RadioGroup
                      key={i}
                      mb="16px"
                      onChange={(val) => handleChangeAttendance(val, name)}
                    >
                      <Box>
                        <Text fontWeight="700">{name}</Text>
                        <HStack spacing="16px">
                          <Radio value="yes">I'll be there!</Radio>
                          <Radio value="no">Regretfully decline</Radio>
                        </HStack>
                      </Box>
                    </RadioGroup>
                  );
                })}
              </React.Fragment>
            )}
          </FormControl>

          <Divider my="16px" />

          {!multipleRespondants ? (
            <HStack alignItems="flex-end">
              <FormControl w="50%">
                <FormLabel fontWeight="500" whiteSpace="nowrap">
                  Please select a dinner entree
                </FormLabel>

                <RadioGroup
                  onChange={(val) =>
                    handleChangeMeal(
                      val,
                      respondingGuestNames[0],
                      "dinner_selection"
                    )
                  }
                >
                  <HStack spacing="16px" flexWrap="wrap">
                    <Radio value="chicken">Chicken</Radio>
                    <Radio value="beef">Beef</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <Input
                position="relative"
                top="2px"
                focusBorderColor="text.tertiary"
                w="50%"
                placeholder="Any allergies? (optional)"
                _placeholder={{ color: "text.tertiary" }}
                size="sm"
                onChange={(e) =>
                  handleChangeMeal(
                    e.target.value,
                    `${guest.first_name} ${guest.last_name}`,
                    "dinner_selection_notes"
                  )
                }
              />
            </HStack>
          ) : (
            <FormControl>
              <FormLabel fontWeight="500">
                Please select a dinner entree for each guest
              </FormLabel>

              {respondingGuestNames.map((name, i) => {
                return (
                  <HStack
                    key={i}
                    justifyContent="flex-start"
                    spacing="24px"
                    mb="16px"
                    alignItems="flex-start"
                    h="100%"
                  >
                    <RadioGroup
                      h="100%"
                      onChange={(val) =>
                        handleChangeMeal(val, name, "dinner_selection")
                      }
                      isDisabled={formData[name]["attending"] === "no"}
                    >
                      <Box>
                        <Text fontWeight="700">{name}</Text>
                        <HStack>
                          <Radio value="chicken">Chicken</Radio>
                          <Radio value="beef">Beef</Radio>
                        </HStack>
                      </Box>
                    </RadioGroup>

                    <Box flex={1}>
                      <Text>Any allergies? (optional)</Text>
                      <Input
                        size="sm"
                        fontSize="md"
                        onChange={(e) =>
                          handleChangeMeal(
                            e.target.value,
                            name,
                            "dinner_selection_notes"
                          )
                        }
                      />
                    </Box>
                  </HStack>
                );
              })}
            </FormControl>
          )}

          <Divider my="12px" />

          <FormControl>
            <FormLabel>Anything else we should know? (optional)</FormLabel>
            <Textarea focusBorderColor="text.tertiary" ref={anythingElseRef} />
          </FormControl>
        </Box>

        <HStack pt="16px" pb="8px" justifyContent="flex-end">
          <Button onClick={startOver} zIndex={10000} variant="ghost">
            Reset
          </Button>

          <Button onClick={sendFormData}>Submit</Button>
        </HStack>
      </Box>
      <RSVPSuccessModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        respondingGuestNames={respondingGuestNames}
      />
    </Box>
  );
};

export default RSVPForm;

// return (
//   <Box maxW="580px">
//     <Transition in={step === 3} timeout={500}>
//       {(state) => (
//         <Box
//           mb="16px"
//           px="16px"
//           py="16px"
//           maxH="100%"
//           style={{
//             ...defaultStyle,
//             ...fadeInStyles[state],
//           }}
//         >
//           {respondingGuests && respondingGuests.length > 1 && (
//             <React.Fragment>
//               <Text color="text.secondary">
//                 Replying for {`${respondingGuestNames.join(", ")}`}
//               </Text>
//               <Divider my="16px" />
//             </React.Fragment>
//           )}

//           <Box overflowY="hidden" flex={1}>
//             <FormControl>
//               {!multipleRespondants ? (
//                 <React.Fragment>
//                   <FormLabel fontWeight="500">Can you make it?</FormLabel>

//                   <RadioGroup
//                     onChange={(val) =>
//                       handleChangeAttendance(val, respondingGuestNames[0])
//                     }
//                   >
//                     <HStack spacing="16px" flexWrap="wrap">
//                       <Radio value="yes">I'll be there!</Radio>
//                       <Radio value="no">Regretfully decline</Radio>
//                     </HStack>
//                   </RadioGroup>
//                 </React.Fragment>
//               ) : (
//                 <React.Fragment>
//                   <FormLabel fontWeight="500">
//                     Please let us know who can and cannot make it
//                   </FormLabel>
//                   {respondingGuestNames.map((name, i) => {
//                     return (
//                       <RadioGroup
//                         key={i}
//                         mb="16px"
//                         onChange={(val) => handleChangeAttendance(val, name)}
//                       >
//                         <Box>
//                           <Text>{name}</Text>
//                           <HStack spacing="16px">
//                             <Radio value="yes">I'll be there!</Radio>
//                             <Radio value="no">Regretfully decline</Radio>
//                           </HStack>
//                         </Box>
//                       </RadioGroup>
//                     );
//                   })}
//                 </React.Fragment>
//               )}
//             </FormControl>

//             <Divider my="16px" />

//             {!multipleRespondants ? (
//               <HStack alignItems="flex-end">
//                 <FormControl w="50%">
//                   <FormLabel fontWeight="500" whiteSpace="nowrap">
//                     Please select a dinner entree
//                   </FormLabel>

//                   <RadioGroup
//                     onChange={(val) =>
//                       handleChangeMeal(
//                         val,
//                         respondingGuestNames[0],
//                         "dinner_selection"
//                       )
//                     }
//                   >
//                     <HStack spacing="16px" flexWrap="wrap">
//                       <Radio value="chicken">Chicken</Radio>
//                       <Radio value="beef">Beef</Radio>
//                     </HStack>
//                   </RadioGroup>
//                 </FormControl>

//                 <Input
//                   position="relative"
//                   top="2px"
//                   focusBorderColor="text.tertiary"
//                   w="50%"
//                   placeholder="Special requests?"
//                   _placeholder={{ color: "text.tertiary" }}
//                   size="sm"
//                   fontSize="md"
//                   onChange={(e) =>
//                     handleChangeMeal(
//                       e.target.value,
//                       `${guest.first_name} ${guest.last_name}`,
//                       "dinner_selection_notes"
//                     )
//                   }
//                 />
//                 {/* </Box> */}
//               </HStack>
//             ) : (
//               <FormControl>
//                 <FormLabel fontWeight="500">
//                   Please select a dinner entree for each guest
//                 </FormLabel>

//                 {respondingGuestNames.map((name, i) => {
//                   return (
//                     <HStack
//                       key={i}
//                       justifyContent="flex-start"
//                       spacing="24px"
//                       mb="16px"
//                       alignItems="flex-start"
//                       h="100%"
//                     >
//                       <RadioGroup
//                         h="100%"
//                         onChange={(val) =>
//                           handleChangeMeal(val, name, "dinner_selection")
//                         }
//                         isDisabled={formData[name]["attending"] === "no"}
//                       >
//                         <Box>
//                           <Text>{name}</Text>
//                           <HStack>
//                             <Radio value="chicken">Chicken</Radio>
//                             <Radio value="beef">Beef</Radio>
//                           </HStack>
//                         </Box>
//                       </RadioGroup>

//                       <Box flex={1}>
//                         <Text>Special requests? (optional)</Text>
//                         <Input
//                           size="sm"
//                           fontSize="md"
//                           onChange={(e) =>
//                             handleChangeMeal(
//                               e.target.value,
//                               name,
//                               "dinner_selection_notes"
//                             )
//                           }
//                         />
//                       </Box>
//                     </HStack>
//                   );
//                 })}
//               </FormControl>
//             )}
//             <Divider my="12px" />
//             <FormControl>
//               <FormLabel>Anything else we should know? (optional)</FormLabel>
//               <Textarea
//                 focusBorderColor="text.tertiary"
//                 ref={anythingElseRef}
//               />
//             </FormControl>
//           </Box>
//           <HStack pt="16px" pb="8px" justifyContent="flex-end">
//             <Button
//               onClick={sendFormData}
//               // onClick={() => {
//               //   handleSubmit(
//               //     {
//               //       ...formData,
//               //       special_requests: anythingElseRef.current.value,
//               //     },
//               //     respondingGuests
//               //   );
//               // }}
//             >
//               Submit
//             </Button>
//           </HStack>
//         </Box>
//       )}
//     </Transition>
//     <RSVPSuccessModal
//       isOpen={modalIsOpen}
//       onClose={handleCloseModal}
//       respondingGuestNames={respondingGuestNames}
//     />
//   </Box>
// );
