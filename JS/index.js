const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');

// 複製滑塊以實現無縫滾動效果
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    sliderWrapper.appendChild(clone);
});
