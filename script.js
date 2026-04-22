document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var logoImages = document.querySelectorAll(".site-logo img");
  logoImages.forEach(function (img) {
    img.addEventListener("error", function () {
      var parentLogo = img.closest(".site-logo");
      img.style.display = "none";
      if (parentLogo) {
        parentLogo.classList.add("site-logo--text");
      }
    });
  });

  document.querySelectorAll(".site-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!siteNav || !menuToggle) return;
      if (window.matchMedia("(max-width: 991px)").matches) {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
