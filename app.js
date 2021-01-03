const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current'); // Get current class
  current.classList.remove('current'); // Remove current class
  if (current.nextElementSibling) { // Check for next slide
    current.nextElementSibling.classList.add('current'); // Add current to next sibling
  } else {
    slides[0].classList.add('current'); // Add current to start
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  const current = document.querySelector('.current'); // Get current class
  current.classList.remove('current'); // Remove current class
  if (current.previousElementSibling) { // Check for prev slide
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

prev.addEventListener('click', e => {
  prevSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

next.addEventListener('click', e => {
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}