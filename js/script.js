$(document).ready(function () {
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
