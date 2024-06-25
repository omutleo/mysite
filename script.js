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
const backToTopButtons = document.querySelectorAll('.back-to-top');

window.addEventListener('scroll', () => {
  backToTopButtons.forEach((button) => {
    if (window.pageYOffset > 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
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

function createLightning() {
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    
    const header = document.getElementById('site-header');
    header.appendChild(lightning);
    
    // Случайное положение и длительность
    lightning.style.left = `${Math.random() * 100}%`;
    lightning.style.height = `${50 + Math.random() * 100}px`;
    
    // Показать молнию
    setTimeout(() => {
        lightning.style.opacity = 1;
    }, 10);
    
    // Скрыть молнию
    setTimeout(() => {
        lightning.style.opacity = 0;
    }, 200);
    
    // Удалить молнию
    setTimeout(() => {
        lightning.remove();
    }, 400);
}

function startLightning() {
    setInterval(createLightning, Math.random() * 2000 + 1000);
}

document.addEventListener('DOMContentLoaded', startLightning);

