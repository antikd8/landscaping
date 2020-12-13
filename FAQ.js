$(function () {
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
  let blocks = document.getElementsByClassName("contentBox");
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

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

//Feedback
fetch("https://site-bc77b.firebaseio.com/mainFeedback/contacts.json")
  .then(function (jsonResponse) {
    return jsonResponse.json();
  })
  .then(function (mainFeedbackResponse) {
    const contactsText = mainFeedbackResponse.text;
    document.getElementById("contactsText").textContent = contactsText;
  });
