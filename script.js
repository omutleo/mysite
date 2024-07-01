document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  // Обработчики кликов по навигационным ссылкам
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const targetId = link.getAttribute('href'); // Получаем ID секции, к которой нужно перейти
      const targetSection = document.querySelector(targetId); // Находим секцию по ID

      // Плавная прокрутка к секции
      targetSection.scrollIntoView({
        behavior: 'smooth' // Плавная прокрутка к секции
      });
    });
  });

  // Показываем кнопку "Наверх" при прокрутке
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Обработчик клика по кнопке "Наверх"
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка наверх
  });
});

