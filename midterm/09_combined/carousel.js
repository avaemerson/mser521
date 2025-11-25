const track = document.querySelector('.slick-track');
const items = document.querySelectorAll('.slide');
const totalSlides = items.length;
let currentPosition = 0;
const gap = 40;
const slideWidth = 360;

function moveForward() {
  console.log('moveForward');
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateCarouselPosition();
}

function moveBackward() {
  console.log('moveBackward');
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
  } else {
    currentPosition--;
  }
  updateCarouselPosition();
}

function updateCarouselPosition() {
  console.log('updateCarouselPosition', currentPosition, slideWidth, gap, totalSlides);
  const offset = (slideWidth + gap) * currentPosition;
  track.style.transform = `translateX(-${offset}px)`;
}
