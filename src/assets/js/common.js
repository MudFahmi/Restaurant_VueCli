$(document).ready(function() {
  $(document).on("click", ".tabshead .ttab", function(event) {
    var target = $(this).attr("data-target");
    $(this)
      .parents(".tabscon")
      .find(".ttab")
      .removeClass("active");
    $(this)
      .parents(".tabscon")
      .find(".tabs")
      .removeClass("in");
    $(target).addClass("in");
    $(this).addClass("active");
  });

  $(document).on("click", ".inner-tabshead .inner-ttab", function(event) {
    var target = $(this).attr("data-target");
    $(this)
      .parents(".inner-tabscon")
      .find(".inner-ttab")
      .removeClass("active");
    $(this)
      .parents(".inner-tabscon")
      .find(".inner-tabs")
      .removeClass("in");
    $(target).addClass("in");
    $(this).addClass("active");
  });

  // $(".updown .up").click(function() {
  //   slideUp();
  //   console.log("up clicked");
  // });

  // $(".updown .down").click(function() {
  //   slideDown();
  //   console.log("down clicked");
  // });

  $(".knob-dial").knob();
});

const speed = 5;
function slideDown() {
  let sliderContainer = $(".fourthsec .simplebar-content");
  let remLength =
    $(sliderContainer)[0].scrollHeight - $(sliderContainer).height();
  let scrollable = remLength - $(sliderContainer).scrollTop();

  $(sliderContainer).animate(
    {
      scrollTop: remLength
    },
    speed * scrollable
  );
}

function slideUp() {
  let sliderContainer = $(".fourthsec .simplebar-content");

  $(sliderContainer).animate(
    {
      scrollTop: 0
    },
    speed * $(sliderContainer).scrollTop()
  );
}

// (function($) {
//   $(window).on("load", function() {
//     $(".second").jScrollPane({
//       showArrows: true
//     });
//     $(".sidebar").jScrollPane({
//       showArrows: true
//     });
//     $(".ofb").jScrollPane({
//       showArrows: true
//     });
//   });
// })(jQuery);
