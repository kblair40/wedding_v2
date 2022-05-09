import React from "react";
import { MapContainer } from "react-leaflet";
import { Box } from "@chakra-ui/react";

import MapContents from "./MapContents";

/*
Add dropdown for requesting directions.
'To' column and 'From' column
'Radio options for each of the 5 (?) locations'
*/

const Map = () => {
  return (
    <Box>
      <MapContainer
        maxBounds={[
          [28.15, -81.85],
          [29.05, -80.95],
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
