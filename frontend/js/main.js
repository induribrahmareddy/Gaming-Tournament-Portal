// =========================================
// GAMING TOURNAMENT PORTAL
// Main JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (!menuToggle || !navMenu) {
        console.error("Mobile navigation elements not found.");
        return;
    }

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("mobile-active");

        const isOpen = navMenu.classList.contains("mobile-active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu when a navigation link is clicked
    document.querySelectorAll(".nav-link").forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("mobile-active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});