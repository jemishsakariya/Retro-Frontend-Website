let tl = gsap.timeline();

tl.to("#main", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#main", {
  y: "0vh",
  duration: 1,
  delay: 1,
});

tl.to("#main", {
  rotate: 360,
  scale: 1,
});

const navI = document.querySelector("i");
const menu = document.querySelector(".menu");

navI.addEventListener("click", function () {
  menu.classList.add("active");
});

const menuCloseButton = document.querySelector(".close_btn");
menuCloseButton.addEventListener("click", function () {
  menu.classList.remove("active");
});
