var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);

// Функция для инициализации карусели
function initCarousel() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Десктоп - многоэлементная карусель
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    $("#carouselExampleControls .carousel-control-next").off("click").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });

    $("#carouselExampleControls .carousel-control-prev").off("click").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    // Мобильный/планшет - стандартная карусель Bootstrap
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });

    // Отключаем кастомные обработчики событий
    $("#carouselExampleControls .carousel-control-next").off("click");
    $("#carouselExampleControls .carousel-control-prev").off("click");
  }
}

// Инициализируем при загрузке
$(document).ready(function () {
  initCarousel();
});

// Переинициализируем при изменении размера окна
$(window).on("resize", function () {
  var timeout;
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    initCarousel();
  }, 250);
});