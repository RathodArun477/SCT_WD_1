const navbar = document.getElementById('navbar');
const btn = document.getElementById('btn');
const navLinks = document.querySelector('.nav-links');

const sectionColors = {
    home: 'rgba(26,26,70,0.3)',
    about:    'rgba(22, 33, 62, 0.3)',
    services: 'rgba(15, 52, 96, 0.3)',
    contact:  'rgb(14, 76, 126,0.3)',
};

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navbar.style.background = sectionColors[entry.target.id];
        }
    });
},{rootMargin: '-40% 0px -60% 0px',
    threshold : 0});

sections.forEach(section => observer.observe(section));

window.addEventListener('scroll', () => {
    if(window.scrollY > 90) {
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
});

btn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});