document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');
  const backToTopButton = document.querySelector('.back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Обработчик клика по видео контейнеру
  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none'; // Скрытие видео контейнера
    content.style.display = 'block'; // Отображение основного контента
    document.body.style.overflow = 'auto'; // Включение прокрутки страницы
    showBackToTopButton(); // Показать кнопку "наверх"
  });

  // Функция для показа кнопки "наверх"
  function showBackToTopButton() {
    backToTopButton.style.opacity = '1'; // Делаем кнопку видимой
    backToTopButton.style.visibility = 'visible'; // Делаем кнопку видимой
  }

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

  // Показываем кнопку "наверх", если пользователь уже прокрутил вниз на странице
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      showBackToTopButton(); // Показываем кнопку "наверх"
    } else {
      backToTopButton.style.opacity = '0'; // Скрываем кнопку "наверх"
      backToTopButton.style.visibility = 'hidden'; // Скрываем кнопку "наверх"
    }
  });

  // Плавная прокрутка к началу страницы при клике на кнопку "наверх"
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка к верху страницы
    });
  });
});
