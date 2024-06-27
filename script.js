document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');
  const backToTopButton = document.querySelector('.back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  // Обработчик клика по видео
  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
  });

  // Обработчики клика по навигационным ссылкам
  navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const targetId = link.getAttribute('href'); // Получаем ID секции, к которой нужно перейти
      const targetSection = document.querySelector(targetId); // Находим секцию по ID

      // Плавная прокрутка к секции
      targetSection.scrollIntoView({
        behavior: 'smooth' // Добавляем плавность
      });
    });
  });

  // Показать/скрыть кнопку "Наверх" при прокрутке
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Плавная прокрутка наверх при клике на кнопку "Наверх"
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
