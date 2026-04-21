const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

function updateClock() {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("time-text").innerText = `${hours}:${minutes}:${seconds}`;

    // DATE
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    document.getElementById("date").innerText =
        now.toLocaleDateString('en-IN', options);

    // YEAR
    document.getElementById("year").innerText = now.getFullYear();
}

setInterval(updateClock, 1000);
updateClock();