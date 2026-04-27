// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

function showSections() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);


// TYPING ANIMATION
const texts = [
    "Aspiring Software Developer",
    "HND Software Engineering Student",
    "Founder of RH Solutions",
    "Passionate About Technology"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing");
    if (!element) return;

    let currentText = texts[index];

    if (!isDeleting) charIndex++;
    else charIndex--;

    element.textContent = currentText.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    if (charIndex === currentText.length && !isDeleting) {
        isDeleting = true;
        speed = 1500;
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});