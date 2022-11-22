const overlay = document.getElementById("overlay");
const primaryNav = document.querySelector(".primary-navigation");
const navToggle =  document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    overlay.setAttribute('data-visible', true);
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    overlay.setAttribute('data-visible', false);
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});