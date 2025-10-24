const carousels = document.querySelectorAll('.select');

const scrollAmount = 280;

carousels.forEach(carousel => {
    const container = carousel.querySelector('.categorie');
    const leftArrow = carousel.querySelector('.prev');
    const rightArrow = carousel.querySelector('.next');

    rightArrow.addEventListener('click', () => {
        container.scrollLeft += scrollAmount;
    });

    leftArrow.addEventListener('click', () => {
        container.scrollLeft -= scrollAmount;
    });
});
