$(function () {
  let blocks = document.getElementsByClassName("contentBox");
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockID = $(this).data("scroll");
    let blockOffset = $(blockID).offset().top;
    console.log(blockOffset);

    $("html,body").animate(
      {
        scrollTop: blockOffset,
      },
      function () {
        if (blockOffset > 3000 && blockOffset < 5500) return 7000;
        if (blockOffset > 5500 && blockOffset < 6700) return 8000;
        if (blockOffset > 6700) return 1000;
      }
    );
  });

  let header = $("#header");
  let scrollPosition = $(window).scrollTop();

  $(window).on("scroll", function () {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition > 0) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
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
