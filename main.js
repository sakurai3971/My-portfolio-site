$(function () {
  var pagetop = $("#page_top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });

  $('a[href^="#"]').click(function () {
    let speed = 1000;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  $("#products-inner div.products-link:last").prependTo("#products-inner");
  $("#products-inner").css("margin-left", "-1200px");

  $("#carouselprev").click(function () {
    $("#carouselnext,#carouselprev").hide();
    $("#products-inner").animate(
      {
        "margin-left":
          parseInt($("#products-inner").css("margin-left")) + 1200 + "px",
      },
      "slow",
      "swing",
      function () {
        $("#products-inner").css("margin-left", "-1200px");
        $("#products-inner div.products-link:last").prependTo(
          "#products-inner"
        );
        $("#carouselnext,#carouselprev").show();
      }
    );
  });

  $("#carouselnext").click(function () {
    $("#carouselnext,#carouselprev").hide();
    $("#products-inner").animate(
      {
        "margin-left":
          parseInt($("#products-inner").css("margin-left")) - 1200 + "px",
      },
      "slow",
      "swing",
      function () {
        $("#products-inner").css("margin-left", "-1200px");
        $("#products-inner div.products-link:first").appendTo(
          "#products-inner"
        );
        $("#carouselnext,#carouselprev").show();
      }
    );
  });
  $(".more").hide();
  $(".learnmore").click(function () {
    $(".more").slideToggle(500);
  });
});
