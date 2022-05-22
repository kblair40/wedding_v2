import React, { useState, useEffect } from "react";
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

const CSVInput = ({ apiGuestData }) => {
  const [data, setData] = useState(null);
  const [dataFrom, setDataFrom] = useState("file");

  const { CSVReader } = useCSVReader();

  useEffect(() => {
    if (apiGuestData) {
      setDataFrom("api");
      setData(apiGuestData);
    }
  }, [apiGuestData]);

  const handleResults = (results) => {
    console.log("---------------------------");
    console.log(results);
    console.log("---------------------------");
    setDataFrom("file");
    setData(results.data);
    // uploadResults(results.data);
  };

  const uploadResults = async (results = data) => {
    console.log("\n\nRESULTS:", results);
    results = results.slice(1);

    let uploadRequests = [];
    for (let res of results) {
      console.log("\n\nRESULT:", res);
      let resObj = getResObject(res);
      console.log("RES OBJECT:", resObj, "\n\n");
      uploadRequests.push(api.post("/guest", resObj));
    }

    const allResponses = await Promise.all(uploadRequests);
    console.log("\n\n\nALL RESPONSES:", allResponses, "\n\n\n");
  };

  const getResObject = (result) => {
    let res = {
      full_name: result[0].toLowerCase(),
      aliases: makeArray(result[1]),
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
    };

    return res;
    // return JSON.stringify(res);
  };

  const makeArray = (data, sep = ", ") => {
    if (!data) return [];

    let array = data.split(sep).map((n) => n.toLowerCase());
    return array;
    // return JSON.stringify(array);
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

      {data && (
        <InviteList
          data={data}
          dataFrom={dataFrom}
          uploadResults={uploadResults}
        />
      )}
    </Box>
  );
};

export default CSVInput;
