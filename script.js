document.addEventListener("DOMContentLoaded", function() {
  const videoContainer = document.getElementById('video-container');
  const content = document.getElementById('content');
  const backToTopButton = document.querySelector('.back-to-top');

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
