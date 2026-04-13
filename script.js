
// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});


// MOBILE MENU TOGGLE

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// IMAGE SLIDER

const slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    if (slides.length === 0) return;

    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(changeSlide, 5000);


// MARQUEE HOVER CONTROL

const marquee = document.getElementById("marqueeTrack");

if (marquee) {
    marquee.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
    });

    marquee.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
    });
}