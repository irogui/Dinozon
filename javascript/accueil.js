const carousels = document.querySelectorAll('.top_ventes');

const scrollAmount = window.innerWidth * 0.16;

window.addEventListener('resize', () =>{
    const scrollAmount = window.innerWidth * 0.16;
})


carousels.forEach(carousel => {
    const container = carousel.querySelector('.vente');
    const leftArrow = carousel.querySelector('.precedant');
    const rightArrow = carousel.querySelector('.suivant');

    rightArrow.addEventListener('click', () => {
        container.scrollLeft += scrollAmount;
    });

    leftArrow.addEventListener('click', () => {
        container.scrollLeft -= scrollAmount;
    });
});
