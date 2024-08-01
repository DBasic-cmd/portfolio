const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = Math.floor(items.length / 2);

const updateCarousel = () => {
    const offset = -currentIndex * (items[0].clientWidth + 20);
    carousel.style.transform = `translateX(${offset}px)`;

    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('focused');
        } else {
            item.classList.remove('focused');
        }
    });
};

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });

    item.addEventListener('mouseover', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();
