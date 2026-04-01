// -----------------------------
// ✅ NAVBAR SCROLL EFFECT
// -----------------------------
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// -----------------------------
// ✅ MOBILE MENU TOGGLE
// -----------------------------
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

if (toggle) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// -----------------------------
// ✅ IMAGE SLIDER (IMPROVED)
// -----------------------------
const slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    if (slides.length === 0) return; // safety check

    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

// Auto change every 5 sec (better UX than 10s)
setInterval(changeSlide, 5000);