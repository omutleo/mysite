const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation(); // Остановка дефолтного поведения ссылки
    sections.forEach((section) => {
      section.style.animation = 'none'; // Останавливаем текущую анимацию
      section.offsetHeight; // Триггер перерисовки
      section.style.animation = 'fade-in 2s ease-in-out forwards'; // Запускаем анимацию заново
    });
    const targetSection = sections[index];
    targetSection.scrollIntoView({ behavior: 'smooth' });
    return false; // Остановка дефолтного поведения ссылки
  });
});

