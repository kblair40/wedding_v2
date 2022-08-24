import React, { useState } from "react";
import { Box, Button, HStack, Flex } from "@chakra-ui/react";

import InviteList from "components/AdminUtils/InviteList";
import { useCSVReader } from "react-papaparse";

const CSVInput = () => {
  const [data, setData] = useState(null);

  const { CSVReader } = useCSVReader();

  return (
    <Flex direction="column">
      <CSVReader
        onUploadAccepted={(results) => {
          // console.log("---------------------------");
          // console.log(results);
          // console.log("---------------------------");
          setData(results.data);
        }}
      >
        {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
          <>
            <HStack spacing="16px">
              <Button {...getRootProps()}>Browse file</Button>
              <Box>{acceptedFile && acceptedFile.name}</Box>
              <Button {...getRemoveFileProps()} bg="red.100">
                Remove
              </Button>
            </HStack>
            {/* <ProgressBar
              style={{
                width: "100%",
                backgroundColor: "#404040",
                marginTop: "16px",
              }}
            /> */}
          </>
        )}
      </CSVReader>

      {data && <InviteList data={data} />}
    </Flex>
  );
};

export default CSVInput;
