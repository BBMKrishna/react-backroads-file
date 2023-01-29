import Image1 from "./images/tour-1.jpeg";
import Image2 from "./images/tour-2.jpeg";
import Image3 from "./images/tour-3.jpeg";
import Image4 from "./images/tour-4.jpeg";
export const pageLists = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  { id: 1, icon: "fas fa-wallet fa-fw", title: "saving money" },
  { id: 2, icon: "fas fa-tree fa-fw", title: "saving money" },
  { id: 3, icon: "fas fa-socks fa-fw", title: "saving money" },
];

export const tours = [
  {
    id: 1,
    image: Image1,
    data: "august 26th, 2020",
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    duration: "6 days",
    cost: "2100",
  },
  {
    id: 2,
    image: Image2,
    data: "october 1th, 2020",
    title: "best of java",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    location: "indonesia",
    duration: "11 days",
    cost: "1400",
  },
  {
    id: 3,
    image: Image3,
    data: "september 15th, 2020",
    title: "explore hong kong",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    duration: "8 days",
    location: "hong kong",
    cost: "5000",
  },
  {
    id: 4,
    image: Image4,
    data: "december 5th, 2019",
    title: "kenya highlights",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    icon: "fas fa-map",
    duration: "20 days",
    location: "kenya",
    cost: "3300",
  },
];
