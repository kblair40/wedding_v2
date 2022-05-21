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
