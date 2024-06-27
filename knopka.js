// Получаем кнопку "наверх"
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Функция показа/скрытия кнопки в зависимости от положения скролла
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block"; // Показываем кнопку
  } else {
    scrollToTopBtn.style.display = "none"; // Скрываем кнопку
  }
}

// Функция прокрутки наверх при клике на кнопку
scrollToTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для других браузеров
});
