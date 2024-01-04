let images = document.querySelectorAll('.slider .slider-line .cv-photo');
console.log(images.length);
 
let sliderLine = document.querySelector('.slider-line');

let count = 0;
let width;

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};

function init() {
    width = document.querySelector('.slider').offsetWidth;
    console.log(width);

    sliderLine.style.width = width * images.length + 'px';
    console.log(sliderLine.style.width);

    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';

    });

    rollSlider();
}
window.addEventListener('resize', init)
init();

document.querySelector('.slider-next').addEventListener('click', () => {
    count++;
    if (count > 1) {
        count = images.length - 2;
    }
    rollSlider();
});

document.querySelector('.slider-back').addEventListener('click', () => {
    count = count - 1;
    if (count < 0) {
        count = images.length - 1;
    };
    rollSlider();
})