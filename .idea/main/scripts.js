// scripts.js

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const cpu = document.querySelector('cpu');

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}


// Change slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize the carousel
showSlide(currentIndex);

