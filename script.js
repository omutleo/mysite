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


