// Логика слайдера
function initializeCarousel() {
  const carousel = document.querySelector(".carousel");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".slider-button--prev");
  const nextBtn = document.querySelector(".slider-button--next");

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = carousel.clientWidth; // Ширина видимой области слайдера
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = testimonials.length - 1; // Зацикливание
    }
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Зацикливание
    }
    updateCarousel();
  });

  updateCarousel();
}

// Инициализация слайдера
initializeCarousel();

// Генерация цветов для аватаров
function generateAvatarColors() {
  const avatars = document.querySelectorAll('.avatar');

  // Массив с фиксированными неоновыми цветами
  const neonColors = ['#ff99cc', '#00f0ff', '#99ff99', '#ffcc00'];

  avatars.forEach((avatar, index) => {
    // Выбираем цвет из массива по индексу (циклически)
    const color = neonColors[index % neonColors.length];
    avatar.style.backgroundColor = color;
  });
}

// Инициализация слайдера и генерация цветов
document.addEventListener('DOMContentLoaded', () => {
  generateAvatarColors();
});