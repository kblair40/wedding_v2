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
    <Box
      sx={{
        ".hotelIcon": {
          "path &": {
            fill: "white",
            stroke: "white",
          },
          // border: "1px solid white",
          // bg: "white",
        },
      }}
    >
      <MapContainer
        bounds={[
          [28, -82],
          [29, -81],
        ]}
        center={[28.603193529978682, -81.35028822469964]}
        zoom={10}
        style={{ height: "400px" }}
      >
        <MapContents />
      </MapContainer>
    </Box>
  );
};

export default Map;
