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
      priceLevel: 1,
    },
    {
      name: "The Ravenous Pig",
      url: "https://www.bosphorousrestaurant.com/",
      priceLevel: 2,
    },
  ],
  breakfast: [
    {
      name: "Briarpatch Restaurant",
      url: "http://www.thebriarpatchrestaurant.com/",
      priceLevel: 2,
    },
    {
      name: "Another Broken Egg Cafe",
      url: "http://www.anotherbrokenegg.com",
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
    {
      name: "First Watch",
      url: "http://www.firstwatch.com",
      priceLevel: 2,
    },
  ],
  coffeeTea: [
    {
      name: "KOS Coffee & Bodega",
      url: "https://choosekos.com/",
      priceLevel: 2,
    },
    {
      name: "New General",
      url: "https://www.newgeneral.us/",
      priceLevel: 2,
    },
    {
      name: "Foxtail Coffee",
      url: "https://www.foxtailcoffee.com/",
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
      name: "Sugar Dough Bakehouse",
      url: "https://www.sugardoughbakehouse.com/",
      priceLevel: 2,
    },
    {
      name: "P is for Pie Bake Shop",
      url: "http://crazyforpies.com/",
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
      heading: "reception",
      time: "5pm - 7pm",
      who: "Guests",
      locationName: "Casa Feliz",
      dressCode: "Cocktail Attire",
      locationMapLink: "",
    },
  ],
};
