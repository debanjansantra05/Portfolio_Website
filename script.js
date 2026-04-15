// WAIT FOR PAGE LOAD
window.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const about = document.querySelector(".about-section");

    function handleScroll() {

        // HERO FADE
        if (window.scrollY > 100) {
            hero.classList.add("scrolled");
        } else {
            hero.classList.remove("scrolled");
        }

        // ABOUT REVEAL
        const aboutTop = about.getBoundingClientRect().top;

        if (aboutTop < window.innerHeight - 100) {
            about.classList.add("show");
        }
    }

    // RUN ON LOAD
    handleScroll();

    // RUN ON SCROLL
    window.addEventListener("scroll", handleScroll);
});


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


// MOBILE MENU
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


// MARQUEE CONTROL
const marquee = document.getElementById("marqueeTrack");

if (marquee) {
    marquee.addEventListener("mouseenter", () => {
        marquee.style.animationPlayState = "paused";
    });

    marquee.addEventListener("mouseleave", () => {
        marquee.style.animationPlayState = "running";
    });
}