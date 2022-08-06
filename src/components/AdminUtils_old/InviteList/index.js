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

import uniqueRandom from "unique-random";
import { addGuest } from "api/api";
import ManageGuestModal from "./ManageGuestModal";

const InviteList = ({ data }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [selectedRow, setSelectedRow] = useState(null);
  // console.log(data);

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
    return data.slice(1).map((row, idx) => {
      return (
        <Tr>
          {row.map((text, i) => (
            <Td textAlign={i > 0 ? "center" : undefined} key={i}>
              {text}
            </Td>
          ))}
          <Td>
            <Button
              bg={idx % 2 ? "white" : "#EDF2F7"}
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
    const random = uniqueRandom(1000, 9999);
    const randomNums = [];
    //
    // addGuest();
    let i = 1;
    for (let row of data) {
      let num = random();
      while (true) {
        if (randomNums.includes(num)) {
          num = random();
        } else {
          randomNums.push(num);
          break;
        }
      }

      let guestData = {
        first_name: row[0].split(" ")[0],
        last_name: row[0].split(" ")[1] || "",
        priority: row[1],
        att_exp: row[2],
        replied: row[3],
        significant_other: row[4],
        other_family: row[5],
        dinner_selection: row[6],
        dinner_selection_notes: row[14],
        age_range: row[7],
        special_requests: row[8],
        plus_one: row[9],
        attending: row[10],
        email: row[11],
        phone_number: row[12],
        side: row[13],
        passcode: num,
      };
      if (guestData.significant_other) {
        // console.log("GUEST DATA:", guestData);
      }
      // console.log("row:", row);
      // console.log("\nGUEST DATA:", guestData);
      try {
        await addGuest(guestData);
        // console.log("\n\nSUCCESS\n\n");
      } catch (err) {
        console.error(`FAILED - ${i}:`, {guestData});
      }
      i += 1;
    }
    // console.log("RANDOM NUMBERS:", randomNums);
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
  //   response,
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
