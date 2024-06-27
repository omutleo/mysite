document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');

  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto';

    // Плавный скроллинг к основному контенту
    content.scrollIntoView({
      behavior: 'smooth'
    });
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки

      const targetId = link.getAttribute('href'); // Получаем ID секции, к которой нужно перейти
      const targetSection = document.querySelector(targetId); // Находим секцию по ID

      // Плавный скроллинг к выбранной секции
      targetSection.scrollIntoView({
        behavior: 'smooth' // Добавляем плавность
      });
    });
  });

  const backToTopButtons = document.querySelectorAll('.back-to-top');

  window.addEventListener('scroll', () => {
    backToTopButtons.forEach((button) => {
      button.classList.add('show'); // Всегда показываем кнопку при скролле
    });
  });

  backToTopButtons.forEach((button) => {
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});
