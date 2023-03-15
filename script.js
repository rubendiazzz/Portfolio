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

    if (entry.target.id === 'about') {
        document.querySelector('.about-heading').classList.add('visible');
        document.querySelector('.about-text').classList.add('visible');
    }

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


const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-level");

    skillBars.forEach((skillBar) => {
        const skillLevel = skillBar.dataset.level;
        const isJavascriptSkill = skillBar.dataset.skill === "javascript";
        const adjustedSkillLevel = isJavascriptSkill ? skillLevel / 2 : skillLevel;

        skillBar.style.width = "0%";

        setTimeout(() => {
            skillBar.style.transition = "width 5s ease-in-out";
            skillBar.style.width = `${adjustedSkillLevel}%`;
        }, 50);
    });
}


function resetSkillBars() {
    const skillBars = document.querySelectorAll(".skill-level");

    skillBars.forEach((skillBar) => {
        skillBar.style.transition = "none";
        skillBar.style.width = "0%";
    });
}

function loopSkillBarsAnimation() {
    animateSkillBars();
    setTimeout(() => {
        resetSkillBars();
        loopSkillBarsAnimation();
    }, 10000);
}

window.addEventListener("DOMContentLoaded", loopSkillBarsAnimation);

