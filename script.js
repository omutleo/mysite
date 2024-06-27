// script.js
document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');

  videoContainer.addEventListener('click', function() {
    videoContainer.style.display = 'none';
    content.style.display = 'block';
    document.body.style.overflow = 'auto';
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');

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

 
