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
fetch("https://site-bc77b.firebaseio.com/mainGallery.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainTeamResponse) {});
//worker1
fetch("https://site-bc77b.firebaseio.com/mainGallery/task1.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainTeamResponse) {
    const review1 = mainTeamResponse.reviewText;
    const task1 = mainTeamResponse.taskText;
    const authorName1 = mainTeamResponse.authorName;
    document.getElementById("authorName1").textContent = authorName1;
    document.getElementById("review1").textContent = review1;
    document.getElementById("task1").textContent = task1;
  });
