// Navbar scroll effect
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");

    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides[index].classList.remove("active");

    index = (index + 1) % slides.length;

    slides[index].classList.add("active");
}

// Change every 10 seconds
setInterval(changeSlide, 10000);