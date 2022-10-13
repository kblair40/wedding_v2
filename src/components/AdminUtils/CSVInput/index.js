import React, { useState, useEffect } from "react";
import { Box, Text, Button, HStack, Flex } from "@chakra-ui/react";

// import api from "apifast";
import api from "apimongo";
import InviteList from "components/AdminUtils/InviteList";
import { useCSVReader } from "react-papaparse";

const CSVInput = ({ apiGuestData }) => {
  const [data, setData] = useState(null);
  const [dataFrom, setDataFrom] = useState("file");
  const [uploading, setUploading] = useState(false);

  const { CSVReader } = useCSVReader();

  useEffect(() => {
    if (apiGuestData) {
      setDataFrom("api");
      setData(apiGuestData);
    }
  }, [apiGuestData]);

  const handleResults = (results) => {
    // console.log("---------------------------");
    // console.log(results);
    // console.log("---------------------------");
    setDataFrom("file");
    setData(results.data);
  };

  const uploadResults = async (results = data) => {
    // console.log("\n\nUPLOAD RESULTS:", results);
    results = results.slice(1);

    setUploading(true);

    let uploadRequests = [];
    for (let res of results) {
      // console.log("\n\nRESULT:", res);
      let resObj = getResObject(res);
      // console.log("RES OBJECT:", resObj, "\n\n");
      uploadRequests.push(api.post("/guest", resObj));
    }

    try {
      const allResponses = await Promise.all(uploadRequests);
      // console.log("\n\n\nALL RESPONSES:", allResponses, "\n\n\n");
    } catch (e) {
      console.error("FAILED UPLOADING GUESTS:", e);
    }

    setUploading(false);
  };

  const getResObject = (result) => {
    let res = {
      invite_label: result[0].toLowerCase(),
      replied: result[1] === "true" ? true : false,
      invited_names: makeArray(result[2]),
      attending_names: makeArray(result[3]),
      not_attending_names: makeArray(result[4]),
      reply_method: result[5],
      plus_one: result[6] === "true" ? true : false,
      plus_one_attending: result[7] === "true" ? true : false,
      special_requests: result[8],
      email: result[9],
    };

    return res;
    // return JSON.stringify(res);
  };

  const makeArray = (data, sep = ", ") =>
    data ? data.split(sep).map((n) => n.toLowerCase()) : [];

  return (
    <Box position="relative">
      <CSVReader onUploadAccepted={(results) => handleResults(results)}>
        {({ getRootProps, acceptedFile }) => (
          <>
            <HStack>
              <Flex>
                <Button {...getRootProps()} size="sm">
                  Browse files
                </Button>
                {acceptedFile && <Text ml="8px">{acceptedFile.name}</Text>}
              </Flex>
            </HStack>
          </>
        )}
      </CSVReader>

      {data && (
        <InviteList
          data={data}
          dataFrom={dataFrom}
          uploadResults={uploadResults}
          uploading={uploading}
        />
      )}
    </Box>
  );
};

export default CSVInput;
