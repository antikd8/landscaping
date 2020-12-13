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
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".slider_main_2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotes: true,
    fade: true,
    asNavFor: ".slider_child_2",
  });
  $(".slider_child_2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    asNavFor: ".slider_main_2",
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $(".slider_main_3").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotes: true,
    fade: true,
    asNavFor: ".slider_child_3",
  });
  $(".slider_child_3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    asNavFor: ".slider_main_3",
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockID = $(this).data("scroll");
    let blockOffset = $(blockID).offset().top;
    $("html,body").animate(
      {
        scrollTop: blockOffset,
      },
      1000
    );
  });

  let header = $("#header");
  let scrollPosition = $(window).scrollTop();
  let to_top = $("#to_top");

  $(window).on("scroll", function () {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition > 0) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
    if (scrollPosition > 400) {
      to_top.addClass("fixed");
    } else {
      to_top.removeClass("fixed");
    }
  });

  $("#navToggle").on("click", function () {
    $("#topNav").toggleClass("show");
    $("#navToggle").toggleClass("active");
  });
});

//task1
fetch("https://site-bc77b.firebaseio.com/mainGallery/task1.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainGalleryResponse) {
    const review1 = mainGalleryResponse.reviewText;
    const task1 = mainGalleryResponse.taskText;
    const authorName1 = mainGalleryResponse.authorName;
    const image1 = mainGalleryResponse.image1;
    const image2 = mainGalleryResponse.image2;
    const image3 = mainGalleryResponse.image3;
    const image4 = mainGalleryResponse.image4;
    const image5 = mainGalleryResponse.image5;
    document.getElementById("authorName1").textContent = authorName1;
    document.getElementById("review1").textContent = review1;
    document.getElementById("task1").textContent = task1;
    document.getElementById("image1").src = image1;
    document.getElementById("image2").src = image2;
    document.getElementById("image3").src = image3;
    document.getElementById("image4").src = image4;
    document.getElementById("image5").src = image5;
  });
//task2
fetch("https://site-bc77b.firebaseio.com/mainGallery/task2.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainGalleryResponse) {
    const review = mainGalleryResponse.reviewText;
    const task = mainGalleryResponse.tasktext;
    const authorName = mainGalleryResponse.authorName;
    const image1 = mainGalleryResponse.image1;
    const image2 = mainGalleryResponse.image2;
    const image3 = mainGalleryResponse.image3;
    const image4 = mainGalleryResponse.image4;
    const image5 = mainGalleryResponse.image5;
    const image6 = mainGalleryResponse.image6;
    document.getElementById("authorName2").textContent = authorName;
    document.getElementById("review2").textContent = review;
    document.getElementById("task2").textContent = task;
    document.getElementById("image2.1").src = image1;
    document.getElementById("image2.2").src = image2;
    document.getElementById("image2.3").src = image3;
    document.getElementById("image2.4").src = image4;
    document.getElementById("image2.5").src = image5;
    document.getElementById("image2.6").src = image6;
  });
//task3
fetch("https://site-bc77b.firebaseio.com/mainGallery/task3.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainGalleryResponse) {
    const review = mainGalleryResponse.reviewText;
    const task = mainGalleryResponse.taskText;
    const authorName = mainGalleryResponse.authorName;
    const image1 = mainGalleryResponse.image1;
    const image2 = mainGalleryResponse.image2;
    const image3 = mainGalleryResponse.image3;
    const image4 = mainGalleryResponse.image4;
    const image5 = mainGalleryResponse.image5;
    const image6 = mainGalleryResponse.image6;
    document.getElementById("authorName3").textContent = authorName;
    document.getElementById("review3").textContent = review;
    document.getElementById("task3").textContent = task;
    document.getElementById("image3.1").src = image1;
    document.getElementById("image3.2").src = image2;
    document.getElementById("image3.3").src = image3;
    document.getElementById("image3.4").src = image4;
    document.getElementById("image3.5").src = image5;
    document.getElementById("image3.6").src = image6;
  });
//Feedback
fetch("https://site-bc77b.firebaseio.com/mainFeedback/contacts.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainFeedbackResponse) {
    const contactsText = mainFeedbackResponse.text;
    document.getElementById("contactsText").textContent = contactsText;
  });
