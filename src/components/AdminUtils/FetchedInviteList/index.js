import React, { useState, useEffect } from "react";
import {
  Box,
  Icon,
  Text,
  IconButton,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { getAllInvitees } from "api/api";

const FetchedInviteList = () => {
  const [invitees, setInvitees] = useState();
  const [fetching, setFetching] = useState(false);

  // useEffect(() => {

  //   fetchGuests();
  // }, []);

  const fetchGuests = async () => {
    setFetching(true);
    let allInvitees = await getAllInvitees();
    console.log("ALL INVITEES:", allInvitees);
    setInvitees(allInvitees || []);
    setFetching(false);
  };

  // age_range: ""
  // att_exp: "1"
  // dinner_selection: ""
  // email: ""
  // first_name: "Jeff"
  // id: "00cCeCv1pvHkyWgOo88k"
  // last_name: "Walters"
  // other_family: ""
  // passcode: 7808
  // phone_number: ""
  // plus_one: ""
  // priority: "2"
  // replied: "FALSE"
  // response: ""
  // side: ""
  // significant_other: ""
  // special_requests: ""

  if (!invitees) {
    return (
      <Button mt="32px" isLoading={fetching} onClick={fetchGuests}>
        Fetch Guests
      </Button>
    );
  }

  const row = (guest) => {
    return (
      <Tr>
        <Td>{guest.first_name}</Td>
        <Td>{guest.last_name}</Td>
        <Td>{guest.replied}</Td>
        <Td>{guest.dinner_selection}</Td>
        <Td>{guest.side}</Td>
        <Td>{guest.other_family}</Td>
        <Td>{guest.signicant_other}</Td>
        <Td>{guest.id}</Td>
      </Tr>
    );
  };

  return (
    <Box>
      <TableContainer mt="32px">
        <Table>
          <Thead>
            <Tr>
              {/* {[].map(guest => )} */}
              <Th>first_name</Th>
              <Th>last_name</Th>
              <Th>replied</Th>
              <Th>dinner_selection</Th>
              <Th>side</Th>
              <Th>other_family</Th>
              <Th>significant_other</Th>
              <Th>id</Th>
            </Tr>
            {/* <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr> */}
          </Thead>
          <Tbody>
            {invitees.map((guest) => row(guest))}
            {/* <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr> */}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FetchedInviteList;
