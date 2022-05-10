import React, { useRef, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { Marker, Popup, LayersControl, LayerGroup } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";

import L, { Control } from "leaflet";

import venue_marker from "assets/icons/venue_marker.png";
import new_mickey from "assets/icons/mickey_new.svg";
// import airport from "assets/icons/airport.svg";
import hotel_icon from "assets/icons/hotel_icon.jpg";
import hotel from "assets/images/markers/hotel.png";
import park from "assets/images/markers/park.png";
import restaurant from "assets/images/markers/restaurant.png";
import drink from "assets/images/markers/drink.png";
import airport from "assets/images/markers/airport.png";
import CustomLayerControl from "./CustomLayerControl";

const Markers = () => {
  const planeIcon = L.icon({
    iconUrl: airport,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });
  const hotelIcon = L.icon({
    iconUrl: hotel,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });
  const venueIcon = L.icon({
    iconUrl: venue_marker,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });
  const mickeyIcon = L.icon({
    iconUrl: new_mickey,
    iconSize: [64, 64],
    popupAnchor: [0, 0],
  });
  const restaurantIcon = L.icon({
    iconUrl: restaurant,
    iconSize: [28, 36],
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
        icon: restaurantIcon,
        subcategory: "lunch/dinner",
        position: [28.597306662119003, -81.36607228885731],
        // position: [28.606618391256886, -81.3660722888573],
        popupText: "Hillstone Restaurant",
        websiteURL: "http://hillstonerestaurant.com/locations/winterpark/",
        directionsURL:
          "https://www.google.com/maps/dir//Hillstone+Restaurant,+215+S+Orlando+Ave,+Winter+Park,+FL+32789/@28.5970853,-81.3682288,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7706dedb6b565:0x1e77ea39f3977eff!2m2!1d-81.3660401!2d28.5970806!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "lunch/dinner",
        position: [28.597753121736748, -81.3506015084386],
        popupText: "Bosphorous Turkish Cuisine",
        websiteURL: "http://www.bosphorousrestaurant.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Bosphorous+Turkish+Cuisine,+108+S+Park+Ave,+Winter+Park,+FL+32789/@28.5976448,-81.3531228,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7701078a3f7ed:0x11368fae0664d1a2!2m2!1d-81.3509319!2d28.5976419!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "lunch/dinner",
        position: [28.593987299273344, -81.35558226191405],
        popupText: "The Ravenous Pig",
        websiteURL: "https://www.theravenouspig.com/",
        directionsURL:
          "https://www.google.com/maps/dir//The+Ravenous+Pig,+565+W+Fairbanks+Ave,+Winter+Park,+FL+32789/@28.5933844,-81.3559685,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77074cef78d83:0x5c19a6ecedc2e205!2m2!1d-81.3559685!2d28.5933844!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "breakfast",
        position: [28.600299258484384, -81.35080308465712],
        popupText: "Briarpatch Restaurant",
        websiteURL: "http://www.thebriarpatchrestaurant.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Briarpatch+Restaurant,+252+N+Park+Ave+%233814,+Winter+Park,+FL+32789/@28.599508,-81.350846,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77010a00e128d:0x761d451cbcaed653!2m2!1d-81.3509438!2d28.59951!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "breakfast",
        position: [28.60201599540113, -81.36447686137156],
        popupText: "Another Broken Egg Cafe",
        websiteURL: "http://www.anotherbrokenegg.com",
        directionsURL:
          "http://www.anotherbrokenegg.com/location/winter-park-fl",
      },
      {
        icon: restaurantIcon,
        subcategory: "breakfast",
        position: [28.59618470472456, -81.3648739754585],
        popupText: "The Glass Knife",
        websiteURL: "http://theglassknife.com",
        directionsURL:
          "https://www.google.com/maps/dir//The+Glass+Knife,+276+S+Orlando+Ave,+Winter+Park,+FL+32789/@28.5959398,-81.3669983,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e770727f9c2c63:0x40ac4df603de1b33!2m2!1d-81.3648096!2d28.5959398!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "breakfast",
        position: [28.552687112888414, -81.34679567725692],
        popupText: "Se7en Bites",
        websiteURL: "http://www.se7enbites.com",
        directionsURL:
          "https://www.google.com/maps/dir//Se7enBites,+617+Primrose+Dr,+Orlando,+FL+32803/@28.5518578,-81.347139,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77ad1068e88bb:0x9625ec30973118e2!2m2!1d-81.347139!2d28.5518578!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "breakfast",
        position: [28.60366551387852, -81.32277480312078],
        popupText: "First Watch",
        websiteURL: "http://www.firstwatch.com",
        directionsURL:
          "https://www.google.com/maps/dir//First+Watch,+2215+Aloma+Ave+Suite+K1,+Winter+Park,+FL+32792/@28.5833176,-81.3613986,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e76fea2bb7ad4b:0x28221f403d86a3bb!2m2!1d-81.322931!2d28.6022985!3e0",
      },
    ],
  };

  const layerRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    console.log({ layerRef: layerRef.current, markerRef: markerRef.current });
    if (markerRef.current) {
    }
  }, [layerRef.current, markerRef.current]);

  return (
    <React.Fragment>
      <CustomMarker
        icon={venueIcon}
        position={[28.60326888554329, -81.34948892630368]}
        popupText="Casa Feliz"
      />

      {markers.airports.map((marker, i) => (
        <CustomMarker {...marker} key={i} />
      ))}

      {markers.hotels.map((marker, i) => (
        <CustomMarker {...marker} key={i} />
      ))}

      {markers.restaurants.map((marker, i) => (
        <CustomMarker {...marker} key={i} />
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

const CustomMarker = ({
  position,
  icon,
  popupText,
  websiteURL,
  directionsURL,
}) => {
  return (
    <Marker icon={icon} position={position}>
      <Popup>
        <Text>{popupText}</Text>
      </Popup>
    </Marker>
  );
};

//   <React.Fragment>
//     {/* <CustomLayerControl position="topleft" /> */}
//     <LayersControl position="topright" className="main-control">
//       <LayersControl.Overlay name="Wedding Venue" checked ref={layerRef}>
//         <Box ref={markerRef}>
//           <CustomMarker
//             icon={venueIcon}
//             position={[28.60326888554329, -81.34948892630368]}
//             popupText="Casa Feliz"
//           />
//         </Box>
//       </LayersControl.Overlay>

//       <LayersControl.Overlay name="Airports" checked>
//         <LayerGroup>
//           {markers.airports.map((marker, i) => (
//             <CustomMarker {...marker} key={i} />
//           ))}
//         </LayerGroup>
//       </LayersControl.Overlay>

//       <LayersControl.Overlay name="Hotels" checked>
//         <LayerGroup>
//           {markers.hotels.map((marker, i) => (
//             <CustomMarker {...marker} key={i} />
//           ))}
//         </LayerGroup>
//       </LayersControl.Overlay>

//       <LayersControl.Overlay name="Restaurants" checked>
//         <LayerGroup>
//           {markers.restaurants.map((marker, i) => (
//             <CustomMarker {...marker} key={i} />
//           ))}
//         </LayerGroup>
//       </LayersControl.Overlay>
//       {/* </CustomLayerControl> */}
//     </LayersControl>

//     <Marker
//       icon={mickeyIcon}
//       position={[28.397959747351433, -81.55006630160574]}
//     >
//       <Popup>
//         <Text>Disney World</Text>
//       </Popup>
//     </Marker>
//   </React.Fragment>
// );
