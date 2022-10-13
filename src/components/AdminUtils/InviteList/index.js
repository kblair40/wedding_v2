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
  Flex,
} from "@chakra-ui/react";

import api from "apimongo";
import ManageGuestModal from "./ManageGuestModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { sortByLastName } from "utils/helpers";

const rowLabels = [
  "invite_label",
  "replied",
  "invited_names",
  "attending_names",
  "not_attending_names",
  "reply_method",
  "plus_one",
  "plus_one_attending",
  "special_requests",
  "email",
  "_id",
];

const repliedStyles = {
  bg: "rgba(20, 240, 20, 0.05)",
};

const notRepliedStyles = {
  bg: "rgba(240, 20, 20, 0.05)",
};

const InviteList = ({ data, dataFrom, uploadResults, uploading }) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: onDeleteModalOpen,
    isOpen: isDeleteModalOpen,
    onClose: onDeleteModalClose,
  } = useDisclosure();

  const [selectedRow, setSelectedRow] = useState(null);
  // console.log("\n\nINVITE LIST DATA:", data);
  const [localData, setLocalData] = useState();
  const [deleting, setDeleting] = useState(false); // for delete btn isLoading

  const openManageModal = async (rowData) => {
    // console.log("ROW DATA:", rowData);
    onOpen();

    const { full_name } = rowData;
    try {
      const res = await api.get("/guest/byname", {
        params: { full_name },
      });

      // console.log("\nRES:", res);
    } catch (e) {
      console.error("FAILED TO FETCH GUEST:", e);
    }
  };

  useEffect(() => {
    if (data && dataFrom) {
      // console.log("DATA TYPE:", typeof data, "isArray?", Array.isArray(data));

      data = sortByLastName(data);

      setLocalData(data);
    }
  }, [data, dataFrom]);

  const uploadGuests = async () => {
    // console.log("UPLOAD GUEST CLICKED!");

    if (data && dataFrom === "file") {
      uploadResults();
    }

    return;
  };

  const handleConfirmDeleteAllGuests = async () => {
    setDeleting(true);
    // console.log("CONFIRM CLICKED!");

    try {
      const res = await api.delete("/guest");
      // console.log("SUCCESSFULLY DELETED ALL GUESTS!", res);
    } catch (e) {
      console.error("FAILED TO DELETE GUESTS:", e);
    }

    setDeleting(false);

    // then close delete modal and reset state
    onDeleteModalClose();

    setLocalData();

    if (selectedRow) {
      setSelectedRow(null);
    }
  };

  const getHeaderAPI = () => {
    return (
      <Tr>
        {rowLabels.map((label, i) => (
          <Th
            key={i}
            fontFamily="cabin"
            textAlign={i > 0 ? "center" : undefined}
          >
            {label}
          </Th>
        ))}

        <Th>Manage</Th>
      </Tr>
    );
  };

  const getBodyAPI = () => {
    // return localData.slice(1).map((row, idx) => {
    return localData.map((row, idx) => {
      return (
        <Tr
          key={idx}
          w="100%"
          sx={row["replied"] ? repliedStyles : notRepliedStyles}
        >
          {rowLabels.map((label, i) => {
            console.log("ROW:", label, row[label]);
            let res = `${row[label]}`;
            if (
              [
                "invited_names",
                "attending_names",
                "not_attending_names",
              ].includes(label)
            ) {
              if (res && Array.isArray(row[label])) {
                console.log("JOINING");
                res = row[label].join(", ");
              }
            }

            return (
              <Td key={i} textAlign={i === 0 ? "left" : "center"}>
                {res}
              </Td>
            );
          })}
          <Td>
            <Button
              bg={idx % 2 ? "white" : "#EDF2F7"}
              onClick={() => {
                setSelectedRow(row);
                openManageModal(row);
              }}
            >
              Manage
            </Button>
          </Td>
        </Tr>
      );
    });
  };

  const getHeaderFile = () => {
    return (
      <Tr>
        {localData[0].map((label, i) => (
          <Th
            key={i}
            fontFamily="header"
            textAlign={i > 0 ? "center" : undefined}
          >
            {label}
          </Th>
        ))}

        <Th>Manage</Th>
      </Tr>
    );
  };

  const getBodyFile = () => {
    return localData.slice(1).map((row, idx) => {
      return (
        <Tr key={idx}>
          {row.map((text, i) => {
            console.log("ROW:", row);
            return (
              <Td textAlign={i > 0 ? "center" : undefined} key={i}>
                {text}
              </Td>
            );
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

  if (!localData || !dataFrom) {
    return null;
  }

  let disabled = false;
  if ((data && !data.length) || (localData && !localData.length)) {
    disabled = true;
  }

  return (
    <React.Fragment>
      <Flex alignItems="center">
        <Button
          isLoading={uploading}
          isDisabled={disabled}
          size="sm"
          onClick={uploadGuests}
          my="8px"
          w="min-content"
        >
          Upload Guests
        </Button>

        <Button
          isDisabled={disabled}
          ml="8px"
          onClick={onDeleteModalOpen}
          size="sm"
          variant="ghost"
        >
          Delete
        </Button>
      </Flex>

      <TableContainer mt="1rem">
        <Table
          size="sm"
          sx={{
            "& td": {
              padding: "4px 0",
            },
          }}
        >
          <Thead>{dataFrom === "api" ? getHeaderAPI() : getHeaderFile()}</Thead>
          <Tbody>{dataFrom === "api" ? getBodyAPI() : getBodyFile()}</Tbody>
        </Table>
      </TableContainer>

      <ManageGuestModal
        isOpen={isOpen}
        onClose={onClose}
        selectedRow={selectedRow}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={onDeleteModalClose}
        onConfirm={handleConfirmDeleteAllGuests}
        deleting={deleting}
      />
    </React.Fragment>
  );
};

export default InviteList;

//
//
//
// VERSIONS THAT WORKED WITH FIREBASE
