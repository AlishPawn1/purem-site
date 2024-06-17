document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.hero-section');
    
    function handleScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const images = section.querySelectorAll('.image');  // Targeting images directly

            images.forEach(image => {
                // Check if the top of the section is within the viewport
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    image.classList.add('bouncing');
                } else {
                    image.classList.remove('bouncing');
                }
            });
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Also call on initial load in case the element is already in view
});
