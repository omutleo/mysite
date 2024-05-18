navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    sections.forEach((section) => {
      section.style.animation = 'none';
      section.offsetHeight;
      section.style.animation = 'fade-in 2s ease-in-out forwards';
    });
    const targetSection = sections[index];
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
