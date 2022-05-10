import React, { useRef, useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { Marker, Popup, LayersControl, LayerGroup } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";

import L, { Control } from "leaflet";

import venue_marker from "assets/icons/venue_marker.png";
import new_mickey from "assets/icons/mickey_new.svg";
// import airport from "assets/icons/airport.svg";
import hotel from "assets/images/markers/hotel.png";
import park from "assets/images/markers/park.png";
import restaurant from "assets/images/markers/restaurant.png";
import drink from "assets/images/markers/drink.png";
import airport from "assets/images/markers/airport.png";
import sweets from "assets/images/markers/sweets.png";
import coffee from "assets/images/markers/coffee.png";

const Markers = ({ activeLayers }) => {
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
    iconSize: [48, 48],
    popupAnchor: [0, 0],
  });
  const restaurantIcon = L.icon({
    iconUrl: restaurant,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });
  const sweetsIcon = L.icon({
    iconUrl: sweets,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });
  const coffeeIcon = L.icon({
    iconUrl: coffee,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });
  const parksIcon = L.icon({
    iconUrl: park,
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
    food: [
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
      {
        icon: sweetsIcon,
        subcategory: "sweets",
        position: [28.56890500764239, -81.34164159058969],
        popupText: "Gideon's Bakehouse",
        websiteURL: "https://gideonsbakehouse.com/bakery-menu/",
        directionsURL:
          "https://www.google.com/maps/dir//Gideon's+Bakehouse,+3201+Corrine+Dr,+Orlando,+FL+32803/@28.5683585,-81.3437659,15z/data=!3m1!5s0x88e77ab3b6a88455:0xe8fc0b16688f49f9!4m9!4m8!1m0!1m5!1m1!1s0x88e77ab3b46fda0b:0xc2fb867f64065de8!2m2!1d-81.3437659!2d28.5683585!3e0",
      },
      {
        icon: sweetsIcon,
        subcategory: "sweets",
        position: [28.56836973462912, -81.3437238815216],
        popupText: "Sugar Dough Bakehouse",
        websiteURL: "https://www.sugardoughbakehouse.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Sugar+Dough+Bakehouse,+3122+Corrine+Dr,+Orlando,+FL+32803/@28.5675217,-81.3444749,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77bad44156ed3:0x12a0ac4e14abcd70!2m2!1d-81.3444749!2d28.5675217!3e0",
      },
      {
        icon: sweetsIcon,
        subcategory: "sweets",
        position: [28.568306553960362, -81.34634100537241],
        popupText: "P is for Pie Bake Shop",
        websiteURL: "http://crazyforpies.com/",
        directionsURL:
          "https://www.google.com/maps/dir//P+is+for+Pie+Bake+Shop,+2806+Corrine+Dr,+Orlando,+FL+32803/@28.5675339,-81.3478645,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77ab113a37e0f:0xb38a8300e5e71be!2m2!1d-81.3478652!2d28.5675938!3e0",
      },
      {
        icon: coffeeIcon,
        subcategory: "coffee",
        position: [28.59348194823915, -81.35074441688191],
        popupText: "KOS Coffee & Bodega",
        websiteURL: "https://choosekos.com/",
        directionsURL:
          "https://www.google.com/maps/dir//KOS+Coffee+%26+Bodega,+129+W+Fairbanks+Ave,+Winter+Park,+FL+32789/@28.5933171,-81.3535285,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e771fb1ed21437:0x828fd7f2686f603b!2m2!1d-81.3513345!2d28.5933124!3e0",
      },
      {
        icon: coffeeIcon,
        subcategory: "coffee",
        position: [28.596319784242755, -81.34973980708371],
        popupText: "New General",
        websiteURL: "https://www.newgeneral.us/",
        directionsURL:
          "https://www.google.com/maps/dir//New+General,+155+E+New+England+Ave,+Winter+Park,+FL+32789/@28.596089,-81.3523415,17z/data=!3m1!5s0x88e7701abd112d3f:0x3821dce1e4112907!4m9!4m8!1m0!1m5!1m1!1s0x88e7701abc4fb84b:0x3aafea967d47c1f1!2m2!1d-81.3501475!2d28.5960843!3e0",
      },
      {
        icon: coffeeIcon,
        subcategory: "coffee",
        position: [28.597639301420585, -81.35051013776689],
        popupText: "Barnie's Coffee & Tea Co.",
        websiteURL: "https://www.barniescoffee.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Barnie's+Coffee+%26+Tea+Co.,+118+S+Park+Ave,+Winter+Park,+FL+32789/@28.5974462,-81.353026,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77010787e8407:0x98d235533ffe018f!2m2!1d-81.3509265!2d28.5974396!3e0",
      },
    ],
    parks: [
      {
        icon: parksIcon,
        subcategory: "parks",
        position: [28.610886676475527, -81.34495607584131],
        popupText: "Kraft Azalea Garden",
        websiteURL:
          "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/kraft-azalea-garden/",
        directionsURL:
          "https://www.google.com/maps/dir//Kraft+Azalea+Garden,+1365+Alabama+Dr,+Winter+Park,+FL+32789/@28.6106936,-81.3470857,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7702144f038f9:0x675b88adafa936b3!2m2!1d-81.3448917!2d28.6106889!3e0",
      },
      {
        icon: parksIcon,
        subcategory: "parks",
        position: [28.597845382351124, -81.35156449118315],
        popupText: "Central Park",
        websiteURL:
          "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/central-park/",
        directionsURL:
          "https://www.google.com/maps/dir//Central+Park,+150+W+Morse+Blvd,+Winter+Park,+FL+32789/@28.5978501,-81.3536512,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77010888534dd:0x62216c8ba4de9a33!2m2!1d-81.3514572!2d28.5978454!3e0",
      },
      {
        icon: parksIcon,
        subcategory: "parks",
        position: [28.60997652582753, -81.33062504515803],
        popupText: "Phelps Park",
        websiteURL:
          "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/phelps-park/",
        directionsURL:
          "https://www.google.com/maps/dir//Phelps+Park,+1206+N+Phelps+Ave,+Winter+Park,+FL+32789/@28.6100095,-81.3328405,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e76fdcbe7d0ce7:0x61e74fe8626b22e9!2m2!1d-81.3306465!2d28.6100048!3e0",
      },
      {
        icon: parksIcon,
        subcategory: "parks",
        position: [28.594105825575483, -81.34479040708376],
        popupText: "Dinky Dock",
        websiteURL:
          "https://cityofwinterpark.org/departments/parks-recreation/parks/dinky-dock/",
        directionsURL:
          "https://www.google.com/maps/dir//Dinky+Dock+Park,+410+Ollie+Ave,+Winter+Park,+FL+32789/@28.5939975,-81.3473921,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e770034544342f:0x3a337b7002c02fc9!2m2!1d-81.3451981!2d28.5939928!3e0",
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
      {activeLayers.includes("venue") && (
        <CustomMarker
          icon={venueIcon}
          position={[28.60326888554329, -81.34948892630368]}
          popupText="Casa Feliz"
        />
      )}

      {activeLayers.includes("airports") &&
        markers.airports.map((marker, i) => (
          <CustomMarker {...marker} key={i} />
        ))}

      {activeLayers.includes("hotels") &&
        markers.hotels.map((marker, i) => <CustomMarker {...marker} key={i} />)}

      {activeLayers.includes("food") &&
        markers.food.map((marker, i) => <CustomMarker {...marker} key={i} />)}

      {activeLayers.includes("parks") &&
        markers.parks.map((marker, i) => <CustomMarker {...marker} key={i} />)}

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
