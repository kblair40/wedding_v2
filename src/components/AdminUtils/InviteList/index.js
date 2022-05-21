import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import uniqueRandom from "unique-random";
import { addGuest } from "api/api";
import ManageGuestModal from "./ManageGuestModal";

const rowLabels = [
  "full_name",
  "aliases",
  "significant_other",
  "other_family",
  "replied",
  "attending",
  "plus_one",
  "dinner_selection",
  "dinner_selection_notes",
  "age_range",
  "email",
  "phone_number",
  "side",
  "special_requests",
  "pk",
];

const InviteList = ({ data }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [selectedRow, setSelectedRow] = useState(null);
  console.log("\n\nINVITE LIST DATA:", data);
  const [localData, setLocalData] = useState();

  useEffect(() => {
    if (data) {
      console.log("DATA TYPE:", typeof data, "isArray?", Array.isArray(data));
      for (let d of data) {
        console.log("DATA POINT:", d);
      }
      setLocalData(data);
    }
  }, [data]);

  const getHeader = () => {
    return (
      <Tr>
        {rowLabels.map((label, i) => (
          <Th textAlign={i > 0 ? "center" : undefined}>{label}</Th>
        ))}

        <Th>Manage</Th>
      </Tr>
    );
  };

  const getBody = () => {
    return localData.slice(1).map((row, idx) => {
      return (
        <Tr key={idx}>
          {rowLabels.map((label, i) => {
            let res = row[label];
            if (["other_family", "aliases"].includes(label)) {
              res = res.join(", ");
            }

            return <Td textAlign={i === 0 ? "left" : "center"}>{res}</Td>;
          })}
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
        full_name: row[0],
        // first_name: row[0].split(" ")[0],
        // last_name: row[0].split(" ")[1] || "",
        aliases: row[1],
        replied: row[2],
        significant_other: row[3],
        other_family: row[4],
        dinner_selection: row[5],
        dinner_selection_notes: row[13],
        age_range: row[6],
        special_requests: row[7],
        plus_one: row[8],
        attending: row[9],
        email: row[10],
        phone_number: row[11],
        side: row[12],
      };

      if (guestData.significant_other) {
        console.log("GUEST DATA:", guestData);
      }

      try {
        await addGuest(guestData);
        console.log("\n\nSUCCESS\n\n");
      } catch (err) {
        console.log(`FAILED - ${i}`);
      }
      i += 1;
    }
    console.log("RANDOM NUMBERS:", randomNums);
  };

  if (!localData) {
    return null;
  }

  return (
    <React.Fragment>
      <Button size="sm" onClick={uploadGuests} my="8px" w="min-content">
        Upload Guests
      </Button>

      <TableContainer>
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

//
//
//
// VERSIONS THAT WORKED WITH FIREBASE
// const getHeader = () => {
//   return (
//     <Tr>
//       {localData[0].map((label, i) => (
//         <Th textAlign={i > 0 ? "center" : undefined}>{label}</Th>
//       ))}

//       <Th>Manage</Th>
//     </Tr>
//   );
// };

// const getBody = () => {
//   return localData.slice(1).map((row, idx) => {
//     return (
//       <Tr>
//         {row.map((text, i) => (
//           <Td textAlign={i > 0 ? "center" : undefined} key={i}>
//             {text}
//           </Td>
//         ))}
//         <Td>
//           <Button
//             bg={idx % 2 ? "white" : "#EDF2F7"}
//             onClick={() => {
//               setSelectedRow(row);
//               onOpen();
//             }}
//           >
//             Manage
//           </Button>
//         </Td>
//       </Tr>
//     );
//   });
// };
