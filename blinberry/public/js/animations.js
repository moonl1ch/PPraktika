window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});
