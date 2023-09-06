let showNav = false;

const bgColors = [
  "#CCDEE9", // Even Lighter Light Blue
  "#FFF499", // Even Lighter Bright Yellow
  "#FFA8D1", // Even Lighter Candy Pink
  "#8DE08A", // Even Lighter Grass Green
  "#FFA88A", // Even Lighter Coral Orange
];

document.querySelector("#hamburger-icon").addEventListener("click", (e) => {
  const navLinks = document.querySelector(".nav-links");
  // navLinks.classList.toggle("expanded");

  // const isExpanded = navLinks.classList.contains("expanded");
  navLinks.classList.remove("expanded", "collapsed");

  const transition = showNav ? "collapsed" : "expanded";

  navLinks.classList.toggle(`${transition}`);

  const animation = showNav
    ? "animate-to-start .4s steps(10, end) forwards"
    : "animate-to-end .4s steps(10, end) forwards";

  showNav = !showNav;

  e.target.style.animation = animation;
});


