// FOOTER YEAR AUTO UPDATE
document.getElementById("year").textContent = new Date().getFullYear();

// MOBILE MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});