const main = document.querySelector("#main");

let root = ReactDOM.createRoot(main);

const logo = React.createElement(
  "img",
  {
    src: "./images/spider_logo.png",
    id: "logo",
  },
  null
);

let p1 = React.createElement("p", { className: "menu-name" }, "About");
let p2 = React.createElement("p", { className: "menu-name" }, "Portfolio");
let p3 = React.createElement("p", { className: "menu-name" }, "Services");
let p4 = React.createElement("p", { className: "menu-name" }, "Blog");

const menu = React.createElement("div", { className: "menu-section" }, [
  p1,
  p2,
  p3,
  p4,
]);

const cta = React.createElement(
  "button",
  { className: "cta-btn" },
  "I'll be swinging."
);

const navBar = React.createElement("div", { id: "nav-bar" }, [logo, menu, cta]);

let p5 = React.createElement("p", { className: "short-intro" }, "+200");
let p6 = React.createElement(
  "p",
  { className: "short-intro description" },
  "Enemies Defeated"
);
let p7 = React.createElement("p", { className: "short-intro" }, "+50");
let p8 = React.createElement(
  "p",
  { className: "short-intro description" },
  "Bosses Eleminated"
);

const topLeft = React.createElement("div", { className: "left-top" }, [p5, p6]);
const topRight = React.createElement("div", { className: "right-top" }, [
  p7,
  p8,
]);

const leftSection = React.createElement("div", { className: "left-section" }, [
  topLeft,
  topRight,
]);

const heading = React.createElement("h1", { className: "heading" }, "Hello");
const subHeading = React.createElement(
  "h4",
  { className: "sub-heading" },
  "— It's your friendly neighbourhood Spiderman"
);

const bottomPara = React.createElement(
  "p",
  { className: "bottom-para" },
  "Scroll Down ↓"
);

const bottomLeft = React.createElement("div", { className: "left-bottom" }, [
  bottomPara,
]);

const centerLeft = React.createElement("div", { className: "left-center" }, [
  heading,
  subHeading,
  bottomLeft,
]);

const mainLeftSection = React.createElement(
  "div",
  { className: "main-left-section" },
  [leftSection, centerLeft]
);

const mainImage = React.createElement(
  "img",
  { src: "./images/spiderman.png", className: "main-image" },
  null
);

const mainRightSection = React.createElement(
  "div",
  { className: "main-right-section" },
  [mainImage]
);

const sections = React.createElement(
  "div",
  { className: "sections-container" },
  [mainLeftSection, mainRightSection]
);
const app = React.createElement("div", { id: "app" }, [navBar, sections]);

root.render(app);
