const elements = [
  document.querySelector('body'),
  document.querySelector('article'),
  document.querySelector('figure'),
  ...document.querySelectorAll('img')
];
const debug = document.querySelector('input');
const colors = ['gray', 'red', 'dodgerblue'];

debug.addEventListener('change', () => {
  for (let i = 0; i < elements.length; i++)
    elements[i].style.border = debug.checked
      ? `2px dashed ${colors[i] ?? 'white'}`
      : 'none';
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
