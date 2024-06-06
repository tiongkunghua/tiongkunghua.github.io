document.querySelectorAll('.carousel').forEach(carousel => {
    let currentIndex = 0;
    const slides = carousel.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideContainer = carousel.querySelector('.slides');

    function showSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        const newTransformValue = -currentIndex * 100;
        slideContainer.style.transition = 'transform 0.5s ease';
        slideContainer.style.transform = `translateX(${newTransformValue}%)`;
    }

    function changeSlide(direction) {
        currentIndex += direction;
        showSlide(currentIndex);
    }

    carousel.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    carousel.querySelector('.next').addEventListener('click', () => changeSlide(1));

    let slideInterval;

    function startSlideInterval() {
        slideInterval = setInterval(() => {
            changeSlide(1);
        }, 3000);
    }

    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    startSlideInterval();

    slideContainer.addEventListener('mouseenter', () => {
        stopSlideInterval();
    });

    slideContainer.addEventListener('mouseleave', () => {
        startSlideInterval();
    });
});
