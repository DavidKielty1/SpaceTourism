const nav = document.querySelector(".primary-navigation");
const navButton = document.querySelector(".mobile-nav-toggle");

//   navbutton.style.backgroundImage = 'url("./assets/shared/icon-close.svg)';

navButton.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  const hamburger = navButton.getAttribute("aria-expanded");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
  }
});
