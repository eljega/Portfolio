document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel-container");
  
    carousels.forEach(function (carousel) {
      const slides = carousel.querySelector(".carousel-slides");
      const prevButton = carousel.querySelector(".prev-button");
      const nextButton = carousel.querySelector(".next-button");
  
      let slideIndex = 0;
  
      function showSlide(index) {
        slides.style.transform = `translateX(-${index * 101}%)`;
      }
  
      function nextSlide() {
        slideIndex++;
        if (slideIndex >= slides.children.length) {
          slideIndex = 0;
        }
        showSlide(slideIndex);
      }
  
      function prevSlide() {
        slideIndex--;
        if (slideIndex < 0) {
          slideIndex = slides.children.length - 1;
        }
        showSlide(slideIndex);
      }
  
      nextButton.addEventListener("click", nextSlide);
      prevButton.addEventListener("click", prevSlide);
  
      // Cambiar automáticamente las imágenes cada 3 segundos (3000 ms)
      setInterval(nextSlide, 3000);
    });
  });
  
  
  
  
  
  