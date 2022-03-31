import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  HStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { addGuest } from "api/api";
import ManageGuestModal from "./ManageGuestModal";

const InviteList = ({ data }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [selectedRow, setSelectedRow] = useState(null);
  console.log(data);

  const getHeader = () => {
    return (
      <Tr>
        {data[0].map((label, i) => (
          <Th textAlign={i > 0 ? "center" : undefined}>{label}</Th>
        ))}

        <Th>Manage</Th>
      </Tr>
    );
  };

  const getBody = () => {
    return data.slice(1).map((row) => {
      return (
        <Tr>
          {row.map((text, i) => (
            <Td textAlign={i > 0 ? "center" : undefined} key={i}>
              {text}
            </Td>
          ))}
          <Td>
            <Button
              onClick={() => {
                setSelectedRow(row);
                onOpen();
              }}
            >
              Manage
            </Button>
          </Td>
        </Tr>
      );
    });
  };

  const uploadGuests = async () => {
    //
    // addGuest();
    for (let row of data) {
      let guestData = {
        first_name: row[0].split(" ")[0],
        last_name: row[0].split(" ")[1],
        priority: row[1],
        att_exp: row[2],
        replied: row[3],
        dinner_selection: row[4],
        age_range: row[5],
        special_requests: row[6],
        plus_one: row[7],
        response: row[8],
        email: row[9],
        phone_number: row[10],
        side: row[11],
      };
      // console.log("row:", row);
      console.log("\nGUEST DATA:", guestData);
      // let [first_name, last_name] = row[0].split(' ')
      // guestData.first_name = first_name;
      // guestData.last_name = last_name;

      // guestData.priority = row[1]
      // guestData.att_exp = row[2]
      // guestData.replied = row[3]
      // guestData.dinner_selection = row[4]
      // guestData.age_range = row[5]
      // guestData.
    }
  };

  // {
  //   first_name,
  //   last_name,
  //   priority,
  //   att_exp,
  //   replied,
  //   dinner_selection,
  //   age_range,
  //   special_requests,
  //   plus_one,
  //   reponse,
  //   email,
  //   phone_number,
  //   side,
  //   timestamp: Timestamp.now(),
  // }

  return (
    <React.Fragment>
      <Button onClick={uploadGuests} mt="1rem" w="min-content">
        Upload Guests
      </Button>
      <TableContainer mt="24px">
        <Table size="sm" variant="striped">
          <Thead>{getHeader()}</Thead>
          <Tbody>{getBody()}</Tbody>
        </Table>
      </TableContainer>
      <ManageGuestModal
        isOpen={isOpen}
        onClose={onClose}
        selectedRow={selectedRow}
      />
    </React.Fragment>
  );
};

export default InviteList;
