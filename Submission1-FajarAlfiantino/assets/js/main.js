const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

function closeNav() {
  var scrollValue = window.scrollY;
  if (scrollValue > 10) {
    navMenu.classList.remove("active");
  }
}

window.addEventListener("scroll", closeNav);
