// new WOW().init();

$(document).ready(function () {
    $(document).foundation();
});

//Click the hamburger menu to see the animation
//You can click the X to close or click anywhere outside the menu

function logoSwitch () {
    $('.altLogo').each(function() {
      $(this).css('top',
        $('.startLogo').offset().top -  $(this).closest('.row').offset().top
      );
    });
  };
  
  $(document).scroll(function() {logoSwitch();});
  
  logoSwitch();

$(document).ready(function(){
	$('.hamburger-shell').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('reveal');
	})
});


