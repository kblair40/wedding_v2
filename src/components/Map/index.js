import React from "react";
import { MapContainer } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import { MickeyIcon } from "utils/icons";

import MapContents from "./MapContents";

/*
Add dropdown for requesting directions.
'To' column and 'From' column
'Radio options for each of the 5 (?) locations'
*/

const Map = () => {
  return (
    <Box>
      {/* <Box border="1px solid #ccc">
        <MickeyIcon />
      </Box> */}

      <MapContainer
        maxBounds={[
          [28.2, -81.8],
          [29, -81],
        ]}
        center={[28.603193529978682, -81.35028822469964]}
        zoom={10}
        minZoom={10}
        style={{ height: "400px", zIndex: 1 }}
      >
        <MapContents />
      </MapContainer>
    </Box>
  );
};

export default Map;
