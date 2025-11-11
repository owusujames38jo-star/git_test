document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the DOM elements
    const itemsContainer = document.querySelector('.background-img-container');
    const slides = document.querySelectorAll('.cover-img');
    
    // Check if elements were found before proceeding
    if (!itemsContainer || slides.length === 0) {
        console.error('Carousel elements not found. Check your class names.');
        return; 
    }

    // 2. State and Configuration Variables
    const totalSlides = slides.length;
    let currentSlide = 0;
    const slideDuration = 5000; // 5000 milliseconds = 5 seconds per slide

    // 3. The function that advances the slide
    function nextSlide() {
        // Calculate the next slide index, looping back to 0 when it hits the last slide
        currentSlide = (currentSlide + 1) % totalSlides;

        // Calculate the horizontal offset needed to move the container
        // -100vw for the first slide, -200vw for the second, etc.
        const offset = -currentSlide * 100;

        // Apply the transformation using viewport width (vw) units
        itemsContainer.style.transform = `translateX(${offset}vw)`;
    }

    // 4. Start the auto-sliding timer
    // This calls the nextSlide function repeatedly every slideDuration milliseconds
    setInterval(nextSlide, slideDuration);
});