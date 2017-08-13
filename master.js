$(document).ready( function() {

  function hideNavbarOnMobile () {
    var width = $(window).width();
    if ( width < 768 ) $('.navbar-toggle').click();
  }

  $('.menu-button').click( function(evt) {
    evt.preventDefault();
    var linkId = $(this).attr("href");
    var offset = $(linkId).offset();
    var position = offset.top - 65;
    console.log(linkId + "  " + position); // colected data check
    hideNavbarOnMobile();
    $("html, body").animate({scrollTop:position}, 400);
  });

  $(window).scroll(function(){
    var scrolledHeight = $(document).scrollTop();
    let navbar = $('.navbar');
    let navigation = $('.navigation')
    if (scrolledHeight > 100) {
      navbar.addClass("navbar-default-scroll");
      navigation.addClass("navigation-scroll");
    } else {
      navbar.removeClass("navbar-default-scroll");
      navigation.removeClass("navigation-scroll");
    }
  });

});
