import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Text } from "@chakra-ui/react";
import venue_marker from "assets/icons/venue_marker.png";
import new_mickey from "assets/icons/mickey_new.svg";
import airport from "assets/icons/airport.svg";
import L from "leaflet";
import hotel_icon from "assets/icons/hotel_icon.jpg";

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

  const markers = {
    airports: [
      {
        icon: planeIcon,
        position: [28.41790802830519, -81.30407546724783],
        popupText: "Orlando Int'l Airport",
      },
      {
        icon: planeIcon,
        position: [28.776062533251384, -81.23416988528194],
        popupText: "Orlando Sanford Int'l Airport",
      },
    ],
    hotels: [
      {
        icon: hotelIcon,
        position: [28.59595340467498, -81.34747020857483],
        popupText: "The Alfond Inn",
      },
      {
        icon: hotelIcon,
        position: [28.606618391256887, -81.36597780672565],
        popupText: "Hilton Garden Inn",
      },
    ],
    restaurants: [
      {
        // icon: restaurantIcon,
        position: [28.597306662119003, -81.36607228885731],
        popupText: "Hillstone Restaurant",
        websiteURL: "http://hillstonerestaurant.com/locations/winterpark/",
        directionsURL:
          "https://www.google.com/maps/dir//Hillstone+Restaurant,+215+S+Orlando+Ave,+Winter+Park,+FL+32789/@28.5970853,-81.3682288,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7706dedb6b565:0x1e77ea39f3977eff!2m2!1d-81.3660401!2d28.5970806!3e0",
      },
    ],
  };

  return (
    <React.Fragment>
      <CustomMarker
        icon={venueIcon}
        position={[28.60326888554329, -81.34948892630368]}
        popupText="Casa Feliz"
      />

      {markers.airports.map((marker, i) => (
        <CustomMarker {...marker} />
      ))}

      {markers.hotels.map((marker, i) => (
        <CustomMarker {...marker} />
      ))}

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

const CustomMarker = ({ position, icon, popupText }) => {
  return (
    <Marker icon={icon} position={position}>
      <Popup>
        <Text>{popupText}</Text>
      </Popup>
    </Marker>
  );
};
