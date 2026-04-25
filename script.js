// SECTION SCROLL ANIMATION
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
const text = [
    "Aspiring Software Developer",
    "HND Software Engineering Student",
    "Founder of RH Solutions",
    "Passionate About Technology"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    currentText = text[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);