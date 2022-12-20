document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navToggle = document.getElementById("nav-toggle")
  console.log(burger);
  console.log(navToggle);
  if (burger) {
    burger.addEventListener("click", () => {
      if (navToggle) {
        navToggle.classList.toggle("open");
      }
    });
  }
  });
