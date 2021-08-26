$('.feedback-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$(document).ready(function(){
  $(".login").click(function(){
    $("#myModal").modal();
  });
});

$(document).ready(function(){
  $(".close-chatbox").click(function(){
    $("#messenger").toggle("slow");
  });

  $(".logo-messenger").click(function(){
    $("#messenger").slideToggle("slow");
  });
});
