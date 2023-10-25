jQuery( document ).ready( function( $ ) {
  const swiper = new Swiper('.swiper', {
    loop:true,
    effect: "fade",
    slidesPerView: 1,
    pauseOnMouseEnter: true,
    autoplay: {
      delay: 4000,
    },
  })
});

$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
  })
});
function counter() {
  var oTop;
  if ($('.counter').length !== 0) {
    oTop = $('.counter').offset().top - window.innerHeight;
  }
  if ($(window).scrollTop() > oTop) {
    $('.counter').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 6000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
    });
  }
}
// -----------------------------
//  On Scroll
// -----------------------------
$(window).scroll(function () {
  counter();

  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $('.navigation').addClass('sticky-header');
  } else {
    $('.navigation').removeClass('sticky-header');
  }
});
(jQuery);


$(document).ready(function(){
    $('.menu-toggle').click(function(){
      $('nav').toggleClass('active');
    })
  })