                    // Frist Prioty to Pageloader//

  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(1000).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

      // START JS CODE WRITE //

$(document).ready(function(){
	
   //This is AOS Function//
     AOS.init();
	
    //This is SKILLBAR Function//
 
 var skillsDiv = jQuery('#skills');
      //Up Selector//
jQuery(window).on('scroll', function() {
  var winT = jQuery(window).scrollTop(),
    winH = jQuery(window).height(),
    skillsT = skillsDiv.offset().top;
  if (winT + winH > skillsT) {
    jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 1600);
    });
  }
});        
             //---THIS IS PROGRESS BAR---//
                   
      $('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});
     
     $(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        radius = $(this).find($('circle.complete')).attr('r');
        circumference = 2 * Math.PI * radius;
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 2000);
    }
  });
}).trigger('scroll');
	   
              //===OWL CARASUL SLIEDER===//
      
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,  
   autoplay:true,
	 autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2  
        }
           
    } 
     
});       
                    // MIX TOP //            
  var mixer = mixitup('#mixitop');
    
     // Typeedd js //
    
     $("#typer").typer({
  strings: [
    " Web Designer.",
    " Web Developer."
  ],
      typeSpeed: 120,
  backspaceSpeed: 40,
      repeatDelay:100 ,
}); 

    // Scroll top Function //
	
	$('body').materialScrollTop({
    // OPTIONS HERE
  });
	
	  //  ISOTOP BUTTON EFFECT  //
	
	$(".iso-btn1").focus(function(){
    $(this).css("background-color", "#e91e63");
  		});
	$(".iso-btn1").blur(function(){
    $(this).css("background-color", "#173b6c");
		});
	$(".iso-btn2").focus(function(){
    $(this).css("background-color", "#e91e63");
  		});
	$(".iso-btn2").blur(function(){
    $(this).css("background-color", "#173b6c");
		});
	$(".iso-btn3").focus(function(){
    $(this).css("background-color", "#e91e63");
  		});
	$(".iso-btn3").blur(function(){
    $(this).css("background-color", "#173b6c");
		});
	
 });       
