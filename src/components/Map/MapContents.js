import React from "react";
import { TileLayer } from "react-leaflet";

import Markers from "./Markers";

const MapContents = ({ activeLayers }) => {
  const LEAFLET_API_KEY = process.env.REACT_APP_LEAFLET_API_KEY;
  // console.log({ LEAFLET_API_KEY });
  return (
    <React.Fragment>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url={`https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=${LEAFLET_API_KEY}`}
      />
      <Markers activeLayers={activeLayers} />
    </React.Fragment>
  );
};

export default MapContents;
