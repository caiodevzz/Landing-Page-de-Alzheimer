// simple intersection observer to add `.visible` when elements enter viewport
const observerOptions = {
    threshold: 0.1
};

function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, observerOptions);

// watch elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    // smooth scroll polyfill already handled by CSS - optional extra logic
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});