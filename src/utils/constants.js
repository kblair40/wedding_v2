export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    section: "top",
  },
  {
    label: "RSVP",
    href: "/rsvp",
    section: "rsvp",
  },
  {
    label: "Travel",
    href: "/travel",
    section: "travel",
  },
  {
    label: "To Do/To Eat",
    href: "/thingstodo",
    section: "activities",
  },
  {
    label: "Registry",
    href: "/registry",
    section: "registry",
  },
  {
    label: "Wedding Party",
    href: "/weddingparty",
    section: "weddingParty",
  },
  {
    label: "Gallery",
    href: "/gallery",
    section: "gallery",
  },

  // {
  //   label: "Admin Stuff",
  //   href: "/admin",
  // },
];

export const MAX_WIDTHS = () => ({
  base: "420px",
  sm: "540px",
  md: "720px",
  lg: "900px",
});

export const ACTIVITIES = {
  lunchDinner: [
    {
      name: "Hillstone",
      url: "https://hillstonerestaurant.com/locations/winterpark/",
      priceLevel: 3,
    },
    {
      name: "Bosphorous",
      url: "https://www.bosphorousrestaurant.com/",
      priceLevel: 2,
    },
    {
      name: "Prato",
      url: "https://www.prato-wp.com/",
      priceLevel: 2,
    },
    {
      name: "Armando's",
      url: "http://www.armandosorlando.com/",
      priceLevel: 2,
      // 463 W New England Ave., Winter Park, FL
    },
  ],
  breakfast: [
    {
      name: "Briarpatch Restaurant",
      url: "http://www.thebriarpatchrestaurant.com/",
      priceLevel: 2,
    },
    {
      name: "The Glass Knife",
      url: "http://theglassknife.com",
      priceLevel: 2,
    },
    {
      name: "Se7en Bites",
      url: "http://www.se7enbites.com",
      priceLevel: 2,
    },
  ],
  coffeeTea: [
    {
      name: "Barnie's Coffee & Tea Co.",
      url: "https://www.barniescoffee.com/pages/our-cafe",
      priceLevel: 2,
    },
    {
      name: "New General",
      url: "https://www.newgeneral.us/",
      priceLevel: 2,
    },
    {
      name: "Foxtail Coffee",
      url: "https://www.foxtailcoffee.com/winter-park",
      priceLevel: 1,
    },
    {
      name: "Barnie's Coffee & Tea Co.",
      url: "https://www.barniescoffee.com/",
      priceLevel: 2,
    },
  ],
  parks: [
    {
      name: "Kraft Azalea Garden",
      url: "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/kraft-azalea-garden/",
      priceLevel: 0,
    },
    {
      name: "Central Park",
      url: "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/central-park/",
      priceLevel: 0,
    },
    {
      name: "Phelps Park",
      url: "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/central-park/",
      priceLevel: 0,
    },
    {
      name: "Dinky Dock",
      url: "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/dinky-dock-park/",
      priceLevel: 0,
    },
  ],
  drinks: [
    {
      name: "Ivanhoe Park Brewing Co.",
      url: "https://ivanhoeparkbrewing.com",
      priceLevel: 2,
    },
    {
      name: "The Gnarly Barley",
      url: "https://www.thegnarlybarley.com",
      priceLevel: 2,
    },
    {
      name: "Tactical Brewing",
      url: "http://www.tacticalbeer.com",
      priceLevel: 2,
    },
    {
      name: "Redlight Redlight",
      url: "http://redlightredlightbeerparlour.com",
      priceLevel: 2,
    },
  ],
  sweets: [
    {
      name: "Gideon's Bakehouse",
      url: "http://www.gideonsbakehouse.com",
      priceLevel: 2,
    },
    {
      name: "P is for Pie Bake Shop",
      url: "http://crazyforpies.com/",
      priceLevel: 2,
    },
    {
      name: "Peterbrooke Chocolatier",
      url: "http://www.peterbrookewp.com/",
      priceLevel: 2,
    },
    {
      name: "Kilwin's",
      url: "https://www.kilwins.com/stores/kilwins-winter-park",
      priceLevel: 2,
    },
  ],
  activities: [
    {
      name: "Farmer’s Market (Saturday Morning)",
      url: "https://cityofwinterpark.org/departments/parks-recreation/farmers-market/",
      priceLevel: 0,
    },
    {
      name: "Winter Park Boat Tour",
      url: "https://www.scenicboattours.com/",
      priceLevel: 0,
    },
    {
      name: "Golf",
      url: "https://cityofwinterpark.org/departments/parks-recreation/golf-course/",
      priceLevel: 2,
    },
    {
      name: "Beach",
      url: "https://www.visitnsbfl.com/",
      priceLevel: 0,
    },
    {
      name: "East End Market",
      url: "https://eastendmkt.com/",
      priceLevel: 0,
    },
    {
      name: "Shopping on Park Avenue",
      url: "https://winterpark.org/park-avenue",
      priceLevel: 0,
    },
    {
      name: "Full Circle Yoga",
      url: "https://fullcircleyoga.com/",
      priceLevel: 2,
    },
    {
      name: "Paddle Boarding",
      url: "https://paddleboard-winter-park-lucky-paddle-co.business.site/",
      priceLevel: 1,
    },
    {
      name: "Mall at Millenia",
      url: "https://www.mallatmillenia.com/",
      priceLevel: 0,
    },
    {
      name: "Leu Gardens",
      url: "https://www.leugardens.org/",
      priceLevel: 0,
    },
  ],
  wineBars: [
    {
      name: "The Wine Room on Park Ave",
      url: "https://www.thewineroomonline.com/winter-park",
      priceLevel: 2,
    },
    {
      name: "The Parkview",
      url: "https://theparkviewwp.com/",
      priceLevel: 2,
    },
    {
      name: "The Wine Barn",
      url: "https://thewinebarn.net/",
      priceLevel: 2,
    },
  ],
  cocktailBars: [
    {
      name: "Mather’s Social Gathering",
      url: "https://www.mathersorlando.com/",
      priceLevel: 2,
    },
    {
      name: "The Robinson",
      url: "https://www.therobinsonroom.com/",
      priceLevel: 2,
    },
    {
      name: "The Hall on the yard at Ivanhoe",
      url: "https://thehallontheyard.com/",
      priceLevel: 2,
    },
  ],
};

export const scheduleItems = {
  friday: [
    {
      heading: "rehearsal",
      time: "10:30am - 12pm",
      who: "Wedding Party",
      locationName: "Casa Feliz",
      dressCode: "Casual",
      locationMapLink: "",
    },
    {
      heading: "rehearsal brunch",
      time: "12pm - 2pm",
      who: "Wedding Party and Family",
      locationName: "Brunch Place",
      dressCode: "Casual",
      locationMapLink: "",
    },
  ],
  saturday: [
    {
      heading: "ceremony",
      time: "4pm - 4:45pm",
      who: "Guests",
      locationName: "Casa Feliz",
      dressCode: "Cocktail Attire",
      locationMapLink: "",
    },
    {
      heading: "cocktail hour and reception",
      time: "5pm - 10:30pm",
      who: "Guests",
      locationName: "Casa Feliz",
      dressCode: "Cocktail Attire",
      locationMapLink: "",
    },
  ],
};
