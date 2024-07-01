document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  // Обработчики кликов по навигационным ссылкам
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Показываем кнопку "Наверх" при прокрутке
  const handleScroll = () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Обработчик клика по кнопке "Наверх"
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Вызываем handleScroll сразу после загрузки страницы, чтобы проверить, нужно ли показывать кнопку "Наверх"
  handleScroll();
});
