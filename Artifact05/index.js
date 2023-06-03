document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;


  slides[currentSlide].style.display = "block";

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

  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  // Add event listeners to the buttons
  document.querySelector(".prev-btn").addEventListener("click", previousSlide);
  document.querySelector(".next-btn").addEventListener("click", nextSlide);
});
