import React, { useRef, useEffect } from "react";
import { Text, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import L from "leaflet/dist/leaflet";
import { FaDirections, FaExternalLinkAlt } from "react-icons/fa";

import venue_marker from "assets/icons/venue_marker.webp";
import new_mickey from "assets/icons/mickey_new.svg";
import hotel from "assets/images/markers/hotel.webp";
import restaurant from "assets/images/markers/restaurant.webp";
import drink from "assets/images/markers/drink.webp";
import airport from "assets/images/markers/airport.webp";
import sweets from "assets/images/markers/sweets.webp";
import coffee from "assets/images/markers/coffee.webp";
import { ExternalLink } from "components/Links";

const iconButtonStyle = {
  borderRadius: "50%",
  bg: "white",
  border: "1px solid #546975",
  transition: ".3s",
  _hover: {
    border: "1px solid #344148",
    bg: "neutral.50",
  },
};

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
  const drinksIcon = L.icon({
    iconUrl: drink,
    iconSize: [28, 36],
    popupAnchor: [0, 0],
  });

  // OTHER
  // No need for parks icon
  // figure out activities icon

  const markers = {
    airports: [
      {
        icon: planeIcon,
        position: [28.41790802830519, -81.30407546724783],
        popupText: "Orlando Int'l Airport",
        directionsURL:
          "https://www.google.com/maps/place/Orlando+International+Airport/@28.4179167,-81.3041451,15z/data=!4m2!3m1!1s0x0:0xad4ab9369411e16d?sa=X&ved=2ahUKEwizx5jnjdb3AhWGecAKHYN7BosQ_BJ6BQiIARAF",
      },
      {
        icon: planeIcon,
        position: [28.776062533251384, -81.23416988528194],
        popupText: "Orlando Sanford Int'l Airport",
        directionsURL:
          "https://www.google.com/maps/dir//Orlando+Sanford+International+Airport+(SFB),+1200+Red+Cleveland+Blvd,+Sanford,+FL+32773/@28.7759403,-81.2364766,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e76b527ddfdee5:0x936f506a1ef8b245!2m2!1d-81.2342879!2d28.7759403!3e0",
      },
    ],
    hotels: [
      {
        icon: hotelIcon,
        position: [28.59595340467498, -81.34747020857483],
        popupText: "The Alfond Inn",
        directionsURL:
          "https://www.google.com/maps/dir//The+Alfond+Inn+at+Rollins+College,+300+E+New+England+Ave,+Winter+Park,+FL+32789/@28.5957556,-81.3478028,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7701b2fe39c15:0x18c36cc2316db67!2m2!1d-81.3478028!2d28.5957556!3e0",
        websiteURL: "https://thealfondinn.com/",
      },
      {
        icon: hotelIcon,
        position: [28.606618391256887, -81.36597780672565],
        popupText: "Hilton Garden Inn",
        directionsURL:
          "https://www.google.com/maps/dir//hilton+garden+inn+winter+park/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88e771c2c1f0e119:0x871fd7036dc605e0?sa=X&ved=2ahUKEwjmmcmejtb3AhWVbc0KHZusBKwQ9Rd6BAhQEAQ",
        websiteURL:
          "https://www.hilton.com/en/hotels/mcowpgi-hilton-garden-inn-winter-park/?SEO_id=GMB-GI-MCOWPGI",
      },
    ],
    food: [
      {
        icon: restaurantIcon,
        subcategory: "lunch/dinner",
        position: [28.597306662119003, -81.36607228885731],
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
        subcategory: "lunch/dinner",
        position: [28.599076287041406, -81.34926527455323],
        popupText: "Prato",
        websiteURL: "https://www.prato-wp.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Prato,+124+N+Park+Ave,+Winter+Park,+FL+32789/@28.5982285,-81.3508746,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7701080324459:0xec75fb654730791b!2m2!1d-81.3509273!2d28.5982111!3e0",
      },
      {
        icon: restaurantIcon,
        subcategory: "lunch/dinner",
        position: [28.59615630345221, -81.35551223200068],
        popupText: "Armando's",
        websiteURL: "http://www.armandosorlando.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Armando's+-+Winter+Park,+463+W+New+England+Ave,+Winter+Park,+FL+32789/@28.5960574,-81.3582427,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77011e5b353b1:0xdd8ce40331f87500!2m2!1d-81.3561611!2d28.5959689!3e0",
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
        position: [28.568306553960362, -81.34634100537241],
        popupText: "P is for Pie Bake Shop",
        websiteURL: "http://crazyforpies.com/",
        directionsURL:
          "https://www.google.com/maps/dir//P+is+for+Pie+Bake+Shop,+2806+Corrine+Dr,+Orlando,+FL+32803/@28.5675339,-81.3478645,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77ab113a37e0f:0xb38a8300e5e71be!2m2!1d-81.3478652!2d28.5675938!3e0",
      },
      {
        icon: sweetsIcon,
        subcategory: "sweets",
        position: [28.596906186914488, -81.34852029833878],
        popupText: "Peterbrooke",
        websiteURL: "http://www.peterbrookewp.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Peterbrooke+Chocolatier+of+Winter+Park,+300+S+Park+Ave,+Winter+Park,+FL+32789/@28.5958323,-81.3509021,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7701aa7fe48cd:0x8252eee681c53ce4!2m2!1d-81.3508204!2d28.5958452!3e0",
      },
      //
      {
        icon: sweetsIcon,
        subcategory: "sweets",
        position: [28.598962128755385, -81.34749383005285],
        popupText: "Kilwin's",
        websiteURL: "https://www.kilwins.com/stores/kilwins-winter-park",
        directionsURL:
          "https://www.google.com/maps/dir//Kilwins+Winter+Park,+122+N+Park+Ave,+Winter+Park,+FL+32789/@28.5981897,-81.3509056,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77010804a9ce5:0x516e2eb37aa9793f!2m2!1d-81.350927!2d28.5981837!3e0",
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
    // EVERYTHING UNDER ACTIVITIES, WINE BARS AND COCKTAIL BARS
    drinks: [
      {
        icon: drinksIcon,
        subcategory: "cocktails",
        position: [28.54168290685651, -81.37716124924918],
        popupText: "Mather's Social Gathering",
        websiteURL: "https://www.mathersorlando.com/",
        directionsURL:
          "https://www.google.com/maps/dir//Mathers+Social+Gathering,+3+Phoenix+Building,+30+S+Magnolia+Ave,+Orlando,+FL+32801/@28.5415227,-81.3797791,17z/data=!3m1!5s0x88e77afe794ba005:0x220364422601d99d!4m9!4m8!1m0!1m5!1m1!1s0x88e77afdcdb5bb8f:0x9ad8b5bc7bcde494!2m2!1d-81.3775904!2d28.5415227!3e0",
      },
      {
        icon: drinksIcon,
        subcategory: "cocktails",
        position: [28.54134170829382, -81.37109392253548],
        popupText: "The Robinson",
        websiteURL: "https://www.therobinsonroom.com/",
        directionsURL:
          "https://www.google.com/maps/dir//The+Robinson+Cafe,+East+Pine+Street,+Orlando,+FL/@28.5414925,-81.4128076,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77b5787023845:0x675b60befa1bead3!2m2!1d-81.377788!2d28.541497!3e0",
      },
      {
        icon: drinksIcon,
        subcategory: "cocktails",
        position: [28.564345303538662, -81.37202975481542],
        popupText: "The Hall on The Yard at Ivanhoe",
        websiteURL: "https://thehallontheyard.com/",
        directionsURL:
          "https://www.google.com/maps/dir//The+Hall+on+The+Yard,+1412+Alden+Rd,+Orlando,+FL+32803/@28.5642134,-81.3744223,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77babfeb91ff1:0x6f36b1aa943cb5f!2m2!1d-81.3722336!2d28.5642134!3e0",
      },
      {
        icon: drinksIcon,
        subcategory: "wine",
        position: [28.59640836404682, -81.35015241484446],
        popupText: "The Wine Room on Park Ave",
        websiteURL: "https://www.thewineroomonline.com/winter-park",
        directionsURL:
          "https://www.google.com/maps/dir//The+Wine+Room+on+Park+Avenue,+270+S+Park+Ave,+Winter+Park,+FL+32789/@28.5961823,-81.3530063,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77010083a52f3:0x5588f2ddf161fe6c!2m2!1d-81.3508176!2d28.5961823!3e0",
      },
      {
        icon: drinksIcon,
        subcategory: "wine",
        position: [28.59739694193161, -81.35041537622864],
        popupText: "The Parkview",
        websiteURL: "https://theparkviewwp.com/",
        directionsURL:
          "https://www.google.com/maps/dir//The+Parkview,+136+S+Park+Ave,+Winter+Park,+FL+32789/@28.5971803,-81.3530976,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7701a9cdb92bb:0x7f74117a4d5bc62e!2m2!1d-81.3509257!2d28.5971801!3e0",
      },
      {
        icon: drinksIcon,
        subcategory: "wine",
        position: [28.593481809327482, -81.36131781855576],
        popupText: "The Wine Barn",
        websiteURL: "https://thewinebarn.net/",
        directionsURL:
          "https://www.google.com/maps/dir//The+Wine+Barn,+959+W+Fairbanks+Ave,+Winter+Park,+FL+32789/@28.593284,-81.3640215,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e7700d2b02d677:0x35434f0ca6cc3873!2m2!1d-81.3618328!2d28.593284!3e0",
      },
    ],
  };

  const layerRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    // console.log({ layerRef: layerRef.current, markerRef: markerRef.current });
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
          directionsURL="https://www.google.com/maps/dir//Casa+Feliz+Historic+Home+Museum,+656+N+Park+Ave,+Winter+Park,+FL+32789/@28.6029769,-81.3524501,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88e77017623254df:0x3708950b43ef5f1e!2m2!1d-81.3502614!2d28.6029769!3e0"
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
      {activeLayers.includes("drinks") &&
        markers.drinks.map((marker, i) => <CustomMarker {...marker} key={i} />)}

      <Marker
        icon={mickeyIcon}
        position={[28.397959747351433, -81.55006630160574]}
      >
        <Popup>
          <Text>Disney World</Text>

          <Flex w="100%" mt="-8px" justifyContent="center">
            <ExternalLink to="https://www.google.com/maps/place/Walt+Disney+World%C2%AE+Resort/@28.3771857,-81.57074,15z/data=!4m2!3m1!1s0x0:0xa71e391fd01cf1a0?sa=X&ved=2ahUKEwjawq3Wwfn3AhUUHuwKHTIwAnYQ_BJ6BAhlEAU">
              <Tooltip label="Get directions" placement="top">
                <IconButton
                  icon={<FaDirections size={24} />}
                  {...iconButtonStyle}
                />
              </Tooltip>
            </ExternalLink>
          </Flex>
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
  const hasLinks = Boolean(websiteURL) || Boolean(directionsURL);

  return (
    <Marker icon={icon} position={position}>
      <Popup>
        <Text fontWeight="500">{popupText}</Text>
        {hasLinks && (
          <React.Fragment>
            <Flex w="100%" mt="-8px" justifyContent="center">
              {directionsURL && (
                <ExternalLink to={directionsURL} mr={websiteURL ? "1.5rem" : 0}>
                  <Tooltip label="Get directions" placement="top">
                    <IconButton
                      icon={<FaDirections size={24} />}
                      {...iconButtonStyle}
                    />
                  </Tooltip>
                </ExternalLink>
              )}

              {websiteURL && (
                <ExternalLink to={websiteURL}>
                  <Tooltip label="Go to website" placement="top">
                    <IconButton
                      icon={<FaExternalLinkAlt size={18} />}
                      {...iconButtonStyle}
                    />
                  </Tooltip>
                </ExternalLink>
              )}
            </Flex>
          </React.Fragment>
        )}
      </Popup>
    </Marker>
  );
};
