const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});


const sections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section-hidden');
    entry.target.classList.add('section-visible');
    observer.unobserve(entry.target);

    // Re-observe the section so that it can be revealed again
    sectionObserver.observe(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

document.querySelectorAll('section').forEach(function (section) {
    sectionObserver.observe(section);
});

const hideSection = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) return;

    entry.target.classList.add('section-hidden');
    entry.target.classList.remove('section-visible');
};

const sectionObserver2 = new IntersectionObserver(hideSection, {
    root: null,
    threshold: 0.1,
});

document.querySelectorAll('section').forEach(function (section) {
    sectionObserver2.observe(section);
});


