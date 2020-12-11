$(function () {
  $(".slider_main").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotes: true,
    fade: true,
    asNavFor: ".slider_child",
  });
  $(".slider_child").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    asNavFor: ".slider_main",
    centerMode: true,
    focusOnSelect: true,
  });
});
