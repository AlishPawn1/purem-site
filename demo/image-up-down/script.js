document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.hero-section .image');
    const movementRange = 50; // Max pixels the image can move up or down

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        images.forEach(image => {
            const rect = image.parentElement.getBoundingClientRect();
            const offsetFromCenter = (window.innerHeight / 2) - (rect.top + rect.height / 2);
            const movement = (offsetFromCenter / window.innerHeight) * 2 * movementRange;

            image.style.transform = `translateY(${movement}px)`;
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
