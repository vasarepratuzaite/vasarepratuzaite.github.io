document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 20,
            behavior: "smooth"
        });
    });
});
