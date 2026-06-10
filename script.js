const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 25,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 120) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
