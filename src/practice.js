import {
  propertyIcon,propertyIcon2,propertyIcon3,
  
  featuredProperty1,featuredProperty2,featuredProperty3,featuredProperty4,featuredProperty5,featuredProperty6,
  
  findCity1,findCity2,findCity3,findCity4,findCity5,

  howIcon,howIcon2,howIcon3,
} from "./assests";


export const navItems = [
  { id: 1, name: "Home", link: "/", icon: "▾" },
  { id: 2, name: "Listings", link: "/listings", icon: "▾" },
  { id: 3, name: "Members", link: "/members", icon: "▾" },
  { id: 4, name: "Blog", link: "/blog", icon: "▾" },
  { id: 5, name: "Pages", link: "/pages", icon: "▾" },
  { id: 6, name: "Contact", link: "/contact" },
];

export const cards = [
  { icon: propertyIcon, title: "Wide Range of Properties", description: "We offer expert legal he for all related property items in Dubai." },
  { icon: propertyIcon2, title: "Buy or Rent Homes", description: "We sell your home at the best market price and very quickly as well." },
  { icon: propertyIcon3, title: "Trusted by Thousands", description: "We offer you free consultancy to get a loan for your new home." },
];

export const properties = [
  {
    image: featuredProperty1,
    title: "Luxury Family Home",
    location: "⌖ 1800-1818 79th St",
    price: "$395,000",
    rentTime: false,
    stats: "⚑ 4   ♧ 1   ▣ 400",
    status: "for sale",
    featured: true,
  },
  {
    image: featuredProperty2,
    title: "Skyper Pool Apartment",
    location: "⌖ 1020 Bloomingdale Ave",
    price: "$280,000",
    rentTime: false,
    stats: "⚑ 4   ♧ 2   ▣ 450",
    status: "for sale",
    featured: false,
  },
  {
    image: featuredProperty3,
    title: "North Dillard Street",
    location: "⌖ 4330 Bell Shoals Rd",
    price: "$250",
    rentTime: true,
    stats: "⚑ 4   ♧ 2   ▣ 400",
    status: "for rent",
    featured: false,
  },
  {
    image: featuredProperty4,
    title: "Eaton Garth Penthouse",
    location: "⌖ 7722 18th Ave, Brooklyn",
    price: "$180,000",
    rentTime: false,
    stats: "⚑ 4   ♧ 2   ▣ 450",
    status: "for sale",
    featured: false,
  },
  {
    image: featuredProperty5,
    title: "New Apartment Nice View",
    location: "⌖ 42 Avenue 0, Brooklyn",
    price: "$850",
    rentTime: true,
    stats: "⚑ 4   ♧ 1   ▣ 460",
    status: "for rent",
    featured: true,
  },
  {
    image: featuredProperty6,
    title: "Diamond Manor Apartment",
    location: "⌖ 7802 20th Ave, Brooklyn",
    price: "$259,000",
    rentTime: false,
    stats: "⚑ 4   ♧ 2   ▣ 500",
    status: "for sale",
    featured: true,
  },
];

export const city = [
  {
    image: findCity1,
    cityName: "Chicago",
    property: "2 Properties",
  },
  {
    image: findCity2,
    cityName: "Los Angeles",
    property: "1 Property",
  },
  {
    image: findCity3,
    cityName: "Miami",
    property: "2 Properties",
  },
  {
    image: findCity4,
    cityName: "Florida",
    property: "3 Properties",
  },
  {
    image: findCity5,
    cityName: "New York",
    property: "8 Properties",
  },
  {
    image: findCity1,
    cityName: "Chicago",
    property: "2 Properties",
  },
];

export const howCards = [
  {
    icon: howIcon,
    title: "Find Real Estate",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    icon: howIcon2,
    title: "Meet Realtor",
    description:
      "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
  {
    icon: howIcon3,
    title: "Take The Keys",
    description:
     "Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco",
  },
];