const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const targetSection = sections[index];
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      target: targetSection
    });
  });
});
