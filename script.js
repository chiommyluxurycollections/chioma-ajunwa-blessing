// =========================================
// CHIOMA AJUNWA BLESSING
// PERSONAL PORTFOLIO WEBSITE
// =========================================


// Update the footer year automatically
const yearElement = document.querySelector("#copyright");

if (yearElement) {
    const currentYear = new Date().getFullYear();

    yearElement.textContent =
        `© ${currentYear} Chioma Ajunwa Blessing. All rights reserved.`;
}


// Add a subtle reveal effect when sections enter the screen
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    },
    {
        threshold: 0.12
    }
);


sections.forEach((section) => {
    observer.observe(section);
});