import React from "react";
import { TileLayer, useMap } from "react-leaflet";

import Markers from "./Markers";

const MapContents = () => {
  const map = useMap();
  return (
    <React.Fragment>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers />
    </React.Fragment>
  );
};

export default MapContents;
