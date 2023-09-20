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
  
  document.addEventListener("DOMContentLoaded", function () {
    // Obtén el contenedor de la animación
    const introAnimation = document.querySelector(".intro-animation");

    // Aplica la clase "animate-intro" después de un retraso de 1 segundo (1000 ms)
    setTimeout(function () {
        introAnimation.classList.add("animate-intro");
    }, 200); // Puedes ajustar el tiempo según tus preferencias
});


document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".testimonial-dot");
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach(function (testimonial) {
          testimonial.classList.remove("active");
      });
      dots.forEach(function (dot) {
          dot.classList.remove("active");
      });

      testimonials[index].classList.add("active");
      dots[index].classList.add("active");
  }

  dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
          showTestimonial(index);
          currentIndex = index;
      });
  });

  function nextTestimonial() {
      currentIndex++;
      if (currentIndex >= testimonials.length) {
          currentIndex = 0;
      }
      showTestimonial(currentIndex);
  }


});
