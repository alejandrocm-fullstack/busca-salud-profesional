document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      mainNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
