const images = [
    './city1.webp',
    './city2.webp',
    './city3.jpg',
    './city4.avif',
    './city5.webp',
];

let currentIndex = 0;

function updateSlider() {
    const slider = document.getElementById('image-slider');
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function initializeSlider() {
    const slider = document.getElementById('image-slider');
    images.forEach((image) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${image}" alt="Slide" width= "600px">`;
        slider.appendChild(slide);
    });
}

initializeSlider();
