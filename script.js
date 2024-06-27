document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');
  const backToTopButton = document.querySelector('.back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');

  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto'; // Возвращаем возможность прокрутки страницы
    showBackToTopButton(); // Показываем кнопку "наверх"
  });

  // Функция для показа кнопки "наверх"
  function showBackToTopButton() {
    backToTopButton.style.opacity = '1';
    backToTopButton.style.visibility = 'visible';
  }

  // Плавная прокрутка к верху страницы при клике на кнопку "наверх"
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Плавная прокрутка к секциям при клике на навигационные ссылки
  navLinks.forEach((link) => {
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

  // Показываем кнопку "наверх", если пользователь уже прокрутил вниз на странице
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      showBackToTopButton();
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
    }
  });
});
