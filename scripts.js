// Smooth scrolling effect
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-slide');
    window.addEventListener('scroll', () => {
        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight - 100) {
                element.classList.add('fade-slide');
            }
        });
    });
});

// Mobile Menu toggle (Optional feature)
const navLinks = document.querySelector('nav ul');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    nav
