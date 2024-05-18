const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    sections.forEach((section) => {
      section.style.animation = 'none';
      section.offsetHeight;
      section.style.animation = 'fade-in 2s ease-in-out forwards';
    });
    const targetSection = sections[index];
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
