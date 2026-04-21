// WAIT FOR DOM
document.addEventListener("DOMContentLoaded", function () {

    // YEAR
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // MENU TOGGLE
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // CLOCK FUNCTION
    function updateClock() {
        const now = new Date();

        const timeText = document.getElementById("time-text");
        const dateText = document.getElementById("date");
        const yearEl = document.getElementById("year");

        if (timeText) {
            let hours = String(now.getHours()).padStart(2, '0');
            let minutes = String(now.getMinutes()).padStart(2, '0');
            let seconds = String(now.getSeconds()).padStart(2, '0');
            timeText.innerText = `${hours}:${minutes}:${seconds}`;
        }

        if (dateText) {
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            dateText.innerText = now.toLocaleDateString('en-IN', options);
        }

        if (yearEl) {
            yearEl.innerText = now.getFullYear();
        }
    }

    setInterval(updateClock, 1000);
    updateClock();

});