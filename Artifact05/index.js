
//Slideshow

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  setInterval(nextSlide, 4000); // Change slide every 4 seconds

  // Buttons
  document.querySelector(".prev-btn").addEventListener("click", previousSlide);
  document.querySelector(".next-btn").addEventListener("click", nextSlide);
});
