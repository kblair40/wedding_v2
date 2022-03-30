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
} from "@chakra-ui/react";

const InviteList = ({ data }) => {
  console.log(data);

  const getHeader = () => {
    return data[0].map((label, i) => (
      <Th textAlign={i > 0 ? "center" : undefined}>{label}</Th>
    ));
  };

  const getBody = () => {
    return data.slice(1).map((row) => {
      return (
        <Tr>
          <Td>{row[0]}</Td>
          <Td textAlign="center">{row[1]}</Td>
          <Td textAlign="center">{row[2]}</Td>
        </Tr>
      );
    });
  };

  return (
    <TableContainer mt="24px">
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>{getHeader()}</Tr>
        </Thead>
        <Tbody>{getBody()}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default InviteList;
