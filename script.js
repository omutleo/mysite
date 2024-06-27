document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Обработчик клика по видео контейнеру
  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none'; // Скрытие видео контейнера
    content.style.display = 'block'; // Отображение основного контента
    document.body.style.overflow = 'auto'; // Включение прокрутки страницы
  });

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
});

// Получаем кнопку "наверх"
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Функция показа/скрытия кнопки в зависимости от положения скролла
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block"; // Показываем кнопку
  } else {
    scrollToTopBtn.style.display = "none"; // Скрываем кнопку
  }
}

// Функция прокрутки наверх при клике на кнопку
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других браузеров
});
