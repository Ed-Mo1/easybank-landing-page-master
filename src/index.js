const closeNav = document.querySelector("#close-nav");

const openNav = document.querySelector("#open");

openNav.onclick = () => {
  closeNav.style.display = "block";
  openNav.style.display = "none";
};

closeNav.onclick = () => {
  closeNav.style.display = "none";
  openNav.style.display = "block";
};
ScrollReveal().reveal(".navbar", {
  delay: 300,
  distance: "-50px",
  duration: 600,
  easing: "ease",
  opacity: 0.3,
  origin: "bottom",
});

ScrollReveal().reveal("#home-text", {
  delay: 400,
  distance: "-1000px",
  duration: 600,
  easing: "ease",
  opacity: 0.2,
  origin: "right",
});

ScrollReveal().reveal("#home-image", {
  delay: 500,
  distance: "-1000px",
  duration: 1000,
  easing: "ease",
  opacity: 0.2,
  origin: "left",
});

ScrollReveal().reveal(".section-head", {
  delay: 600,
  distance: "-100px",
  duration: 500,
  easing: "ease",
  opacity: 0.2,
  origin: "bottom",
});

ScrollReveal().reveal(".col", {
  distance: "-10000px",
  duration: 500,
  scale: 0.7,
  interval: 500,
  easing: "ease",
  opacity: 0.2,
  origin: "right",
});
