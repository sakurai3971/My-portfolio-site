$(function () {
  $("body").hide().fadeIn(500);

  var $nav = $("#navArea");
  var $btn = $(".toggle_btn");
  var $mask = $("#mask");
  var open = "open"; // class
  // menu open close
  $btn.on("click", function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  // mask close
  $mask.on("click", function () {
    $nav.removeClass(open);
  });

  //
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    var speed = 1000;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  //
  // var duration = 300;

  // images ----------------------------------------
  // var $images = $(".works p");

  // images 1つ目の画像
  // $images
  //   .on("mouseover", function () {
  //     $(this).find("strong, span").stop(true).animate({ opacity: 1 }, duration);
  //   })
  //   .on("mouseout", function () {
  //     $(this).find("strong, span").stop(true).animate({ opacity: 0 }, duration);
  //   });
});
