$(document).ready(function () {
  var options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
  };

  // Find all Statistics on page, put them inside a variable
  var statistics = $(".statistic");

  // For each Statistic we find, animate it
  statistics.each(function (index) {
    // Find the value we want to animate (what lives inside the p tags)
    var value = $(statistics[index]).html();
    // Start animating
    var statisticAnimation = new CountUp(
      statistics[index],
      0,
      value,
      0,
      5,
      options
    );
    statisticAnimation.start();
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    margin: 10,
    nav: false,
    dots: false,
  });

  var owl = $(".owl-carousel");
  owl.owlCarousel();
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".customPrevBtn").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
  });
});

// These are the options that I'm going to be using on each statistic
