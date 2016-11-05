$(document).ready(function(){

    $('.staff_image_container').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        rows:2,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    
    });

     $('.app_image_container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    });



    $('.app_image').click(function(){
        $('.header').hide();
    	$(".section4").show();
    	$('.section3').hide();
    	
	});

	$('#close').click(function(){
        $('.header').show();
		$('.section3').show();
		$('.section4').hide();
	});
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
});

	
    
    
    
    

	
		


});




                