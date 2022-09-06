import React, { useState } from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box } from "@chakra-ui/react";
import loadable from "@loadable/component";

const MapContents = loadable(() => import("./MapContents"));
const CustomLayerControl = loadable(() => import("./CustomLayerControl"));

const Map = () => {
  const [ready, setReady] = useState(false);
  const [activeLayers, setActiveLayers] = useState([
    "venue",
    "hotels",
    "airports",
  ]);

  const handleAddActiveLayers = (newLayer) => {
    setActiveLayers([...activeLayers, newLayer]);
  };

  const handleRemoveActiveLayers = (layer) => {
    setActiveLayers(activeLayers.filter((lyr) => lyr !== layer));
  };

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
        whenReady={() => setReady(true)}
      >
        {ready && <MapContents activeLayers={activeLayers} />}
      </MapContainer>
      <CustomLayerControl
        activeLayers={activeLayers}
        handleAddActiveLayers={handleAddActiveLayers}
        handleRemoveActiveLayers={handleRemoveActiveLayers}
      />
    </Box>
  );
};

export default Map;
