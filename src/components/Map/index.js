import React from "react";
import { MapContainer } from "react-leaflet";

import MapContents from "./MapContents";

/*
Add dropdown for requesting directions.
'To' column and 'From' column
'Radio options for each of the 5 (?) locations'
*/

const Map = () => {
  return (
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
  );
};

export default Map;
