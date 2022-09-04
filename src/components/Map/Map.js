import React, { useState, Suspense } from "react";
// import loadable from "@loadable/component";
import { MapContainer } from "react-leaflet";
import { Box, Center, Spinner } from "@chakra-ui/react";

import MapContents from "./MapContents";
import CustomLayerControl from "./CustomLayerControl";

// const { MapContainer } = loadable(() => import("react-leaflet"));
// const { MapContainer } = React.lazy(() => import("react-leaflet"));

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
      {/* <Suspense
        fallback={
          <Center h="400px">
            <Spinner />
          </Center>
        }
      > */}
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
      {/* </Suspense> */}
    </Box>
  );
};

export default Map;
