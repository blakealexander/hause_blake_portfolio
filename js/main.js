new WOW().init();


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
	
	//fetching data with ajax and vue.js
	const work = new Vue({
		el : "#portfolio",
		data : {
				portfolioWorks: "",
				// lightBox : [],
		},

		mounted : function() {
				this.fetchData();
		},

		methods : {
				fetchData() {
						// debugger;
								
						fetch(`./admin/scripts/data.php`) //fetching data
						// .then(res => res.text())
						// .then(textResults => {
						// 	console.log(textResults);
						// })
						.then(res => res.json()) // parsing the data
						.then(data => {
								this.portfolioWorks = data;
						})
				},

				// lightBoxProject(project) {
				// 		this.lightBox = project;
				// 		//triggers lightbox opening
				// 		openLBox();
				// }
		}
});



// ----------------------------------------------MENU OVERLAY
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


