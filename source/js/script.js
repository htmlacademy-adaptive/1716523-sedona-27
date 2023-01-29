document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navToggle = document.getElementById("nav-toggle")
  navToggle.classList.remove("main-nav--nojs")
  navToggle.classList.remove("main-nav--open")
  console.log(burger);
  console.log(navToggle);
  if (burger) {
    burger.addEventListener("click", () => {
      if (navToggle) {
        navToggle.classList.toggle("main-nav--open");
      }
    });
  }
});
