const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const targetSection = sections[index];
    $('html, body').animate({
      scrollTop: $(targetSection).offset().top
    }, 1300); // отрегулируйте длительность анимации по необходимости
  });
});
