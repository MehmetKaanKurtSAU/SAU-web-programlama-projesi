const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slideWidth = slider.clientWidth;
const totalSlides = slides.children.length;
let counter = 0;

const captions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];

function nextSlide() {
  if (counter >= totalSlides - 1) {
    counter = 0; // Son slayta ulaşıldığında sıfıra dön
  } else {
    counter++;
  }
  updateSlidePosition();
  updateCaption();
}

function prevSlide() {
  if (counter <= 0) {
    counter = totalSlides - 1; // İlk slayta ulaşıldığında son slayta git
  } else {
    counter--;
  }
  updateSlidePosition();
  updateCaption();
}

function updateSlidePosition() {
  slides.style.transition = 'transform 0.5s ease'; // Geçişe bir geçiş efekti eklendi
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function updateCaption() {
  const currentCaption = captions[counter];
  const captionElement = document.querySelector('.caption');
  captionElement.textContent = currentCaption;
}