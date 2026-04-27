// ================================
// SECTION SCROLL ANIMATION
// ================================
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


// ================================
// TYPING ANIMATION (FIXED)
// ================================
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

    // 🔴 Safety check
    if (!element) return;

    let currentText = texts[index];

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    element.textContent = currentText.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    // FULL TEXT REACHED
    if (charIndex === currentText.length && !isDeleting) {
        isDeleting = true;
        speed = 1500;
    }

    // TEXT FULLY DELETED
    else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        index++;
        if (index >= texts.length) index = 0;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});