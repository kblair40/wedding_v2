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
          {row.map((text) => (
            <Td>{text}</Td>
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

  return (
    <React.Fragment>
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
