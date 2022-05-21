import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Button,
  HStack,
  Flex,
  VStack,
} from "@chakra-ui/react";

import api from "apifast";
import InviteList from "components/AdminUtils/InviteList";
import { useCSVReader } from "react-papaparse";

const CSVInput = () => {
  const [data, setData] = useState(null);

  const { CSVReader } = useCSVReader();

  const handleResults = (results) => {
    console.log("---------------------------");
    console.log(results);
    console.log("---------------------------");
    setData(results.data);
    uploadResults(results.data);
  };

  const uploadResults = (results) => {
    console.log("\n\nRESULTS:", results);
    results = results.slice(1);

    let uploadRequests = [];
    for (let res of results) {
      console.log("\n\nRESULT:", res);
      let resObj = getResObject(res);
      console.log("RES OBJECT:", resObj, "\n\n");
      // uploadRequests.push(api.post("/guest", resObj));
    }
  };

  // full_name: str = Field(index=True)
  // age_range: Optional[str]
  // attending: Optional[bool]
  // replied: Optional[bool]  # creates default value
  // dinner_selection: Optional[str]
  // dinner_selection_notes: Optional[str]
  // email: Optional[str]
  // other_family: Optional[str]
  // phone_number: Optional[str]
  // plus_one: Optional[str]
  // side: Optional[str]
  // significant_other: Optional[str]
  // special_requests: Optional[str]

  const getResObject = (result) => ({
    full_name: result[0].toLowerCase(),
    aliases: result[1],
    replied: result[2],
    significant_other: result[3].toLowerCase(),
    other_family: makeArray(result[4]),
    dinner_selection: result[5],
    age_range: result[6],
    special_requests: result[7],
    plus_one: result[8],
    attending: result[9],
    email: result[10],
    phone_number: result[11],
    side: result[12],
    dinner_selection_notes: result[13],
  });

  const makeArray = (data, sep = ", ") => {
    if (!data) return [];

    return data.split(sep).map((n) => n.toLowerCase());
  };

  return (
    <Box>
      <CSVReader onUploadAccepted={(results) => handleResults(results)}>
        {({ getRootProps, acceptedFile, getRemoveFileProps }) => (
          <>
            <HStack>
              <Box>
                <Button {...getRootProps()} size="sm">
                  Browse file
                </Button>
                {acceptedFile && <Box>{acceptedFile.name}</Box>}
              </Box>

              <Button {...getRemoveFileProps()} bg="red.100" size="sm">
                Remove
              </Button>
            </HStack>
          </>
        )}
      </CSVReader>

      {data && <InviteList data={data} />}
    </Box>
  );
};

export default CSVInput;
