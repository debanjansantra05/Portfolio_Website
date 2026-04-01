// NAVBAR SCROLL
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    navbar.style.background = "black";
});

// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});