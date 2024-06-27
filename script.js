/*document.addEventListener("DOMContentLoaded", function() {
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
*/
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollToTopBtn) {
    console.log("Scroll to top button found");
  } else {
    console.log("Scroll to top button not found");
  }

  // Обработчик клика по видео контейнеру
  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
  });

  // Обработчики кликов по навигационным ссылкам и прокрутка к секциям
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Показ и скрытие кнопки "Наверх"
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Обработчик клика по кнопке "Наверх"
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
