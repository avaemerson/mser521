
/*
Assign the current position a value of 0
Gap of 10 pixels and slideWidth of 400 pixels are unchanging variables
*/
let currentPosition = 0;
const gap = 10;
const slideWidth = 400;

/*
Target all elements that are carousel-items and put them into a list, and these are unchanging variables.
*/
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

/*
Making the function to move forward. 
If you're on the last slide, reset to the first slide, otherwise go to the next slide. 
Then use the updateCarouselPosition function.
*/
function moveForward() {
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateCarouselPosition();
}

/*
Making the function to move backward.
If you're on the first slide, reset to the last slide, otherwise go to the previous slide.
Then use the updateCarouselPosition function.
*/
function moveBackward() {
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
  } else {
    currentPosition--;
  }
  updateCarouselPosition();
}

/*
Making the function to update the carousel position.
Redefines items with all carousel-items, and this is an unchanging variable.
Space the pictures in the slides by the width of each picture plus the gap, and this is an unchanging variable.
Loop: For each picture you have, move it by the offset.
*/
function updateCarouselPosition() {
  const items = document.querySelectorAll('.carousel-item');
  const offset = (slideWidth + gap) * currentPosition;

  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
}
