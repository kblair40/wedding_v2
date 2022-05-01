import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Text } from "@chakra-ui/react";
import venue_marker from "assets/icons/venue_marker.png";
import new_mickey from "assets/images/icons/mickey_new.svg";
import airport from "assets/images/icons/airport.svg";
import L from "leaflet";
import hotel_icon from "assets/images/icons/hotel_icon.jpg";

const Markers = () => {
  const planeIcon = L.icon({
    iconUrl: airport,
    iconSize: [36, 36],
    popupAnchor: [0, 0],
  });
  const hotelIcon = L.icon({
    iconUrl: hotel_icon,
    iconSize: [36, 36],
    popupAnchor: [0, 0],
  });
  const venueIcon = L.icon({
    iconUrl: venue_marker,
    iconSize: [36, 36],
    popupAnchor: [0, 0],
  });
  const mickeyIcon = L.icon({
    iconUrl: new_mickey,
    iconSize: [64, 64],
    popupAnchor: [0, 0],
  });

  return (
    <React.Fragment>
      <Marker
        icon={venueIcon}
        position={[28.60326888554329, -81.34948892630368]}
      >
        <Popup>
          <Text>Casa Feliz</Text>
        </Popup>
      </Marker>

      <Marker
        position={[28.59595340467498, -81.34747020857483]}
        icon={hotelIcon}
      >
        <Popup>
          <Text>The Alfond Inn</Text>
        </Popup>
      </Marker>
      <Marker
        position={[28.606618391256887, -81.36597780672565]}
        icon={hotelIcon}
      >
        <Popup>
          <Text>Hilton Garden Inn</Text>
        </Popup>
      </Marker>
      <Marker
        position={[28.41790802830519, -81.30407546724783]}
        icon={planeIcon}
      >
        <Popup>
          <Text>Orlando Int'l Airport</Text>
        </Popup>
      </Marker>
      <Marker
        icon={planeIcon}
        position={[28.776062533251384, -81.23416988528194]}
      >
        <Popup>
          <Text>Orlando Sanford Int'l Airport</Text>
        </Popup>
      </Marker>

      <Marker
        icon={mickeyIcon}
        position={[28.397959747351433, -81.55006630160574]}
      >
        <Popup>
          <Text>Disney World</Text>
        </Popup>
      </Marker>
    </React.Fragment>
  );
};

export default Markers;
