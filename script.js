const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('action');
  });
});

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('action');
  });
}
