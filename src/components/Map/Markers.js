import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { Text } from "@chakra-ui/react";

const Markers = () => {
  return (
    <React.Fragment>
      <Marker position={[28.60326888554329, -81.34948892630368]}>
        <Popup>
          <Text>Venue</Text>
        </Popup>
      </Marker>
      <Marker position={[28.59595340467498, -81.34747020857483]}>
        <Popup>
          <Text>The Alfond Inn</Text>
        </Popup>
      </Marker>
      <Marker position={[28.606618391256887, -81.36597780672565]}>
        <Popup>
          <Text>Hilton Garden Inn</Text>
        </Popup>
      </Marker>
      <Marker position={[28.41790802830519, -81.30407546724783]}>
        <Popup>
          <Text>Orlando Int'l Airport</Text>
        </Popup>
      </Marker>
      <Marker position={[28.776062533251384, -81.23416988528194]}>
        <Popup>
          <Text>Orlando Sanford Int'l Airport</Text>
        </Popup>
      </Marker>
    </React.Fragment>
  );
};

export default Markers;
