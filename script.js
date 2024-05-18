$(document).ready(function() {
  // Плавная прокрутка при клике на ссылки в навигации
  $('nav a').click(function(e) {
    e.preventDefault();
    var targetId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(targetId).offset().top
    }, 800);
  });

  // Эффект появления контента при прокрутке
  $(window).scroll(function() {
    $('.section').each(function() {
      if ($(this).visible(true)) {
        $(this).addClass('fade-in');
      }
    });
  });
});

// Функция для проверки видимости элемента на экране
$.fn.visible = function(partial) {
  var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};