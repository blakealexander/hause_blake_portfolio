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
		$('.bg-cover').toggleClass('showBackground');
	});
	$('.bg-cover').click(function(){
		$('#menu').slideToggle(300);
		$('.top').toggleClass('rotate');
		$('.middle').toggleClass('rotate-back');
		$('.menu-name').toggleClass('bump');
		$('.bg-cover').toggleClass('showBackground');
	})
});

//----------------------VIDEO PLAYER

// Reel Variables

var reel = document.querySelector("video"),
    volumeControl = document.querySelector("#volControl"),
    video = document.querySelector("#videoReel"),
    muteVideo = document.querySelector("#volMute"),
    muteBtn = document.querySelector("#muteBtn"),
    pPlay = document.querySelector("#pPlay"),
    pPlayBtn = document.querySelector("#pPlayBtn"),
    seekSlider = document.getElementById("seekSlider");;

//Reel Functions

function pausePlay() {
    if (reel.paused) {
        reel.play();
        pPlayBtn.classList.replace( 'fa-play-circle', 'fa-pause-circle' );
    } else {
        reel.pause();
        pPlayBtn.classList.replace( 'fa-pause-circle', 'fa-play-circle' );
    }
}

function changeVol () {
    if(volumeControl.value == 0){
        video.muted = true;
        muteBtn.classList.replace('fa-volume-up', 'fa-volume-mute');
    } else {
        video.volume = (volumeControl.value/100);
        video.muted = false;
        muteBtn.classList.replace('fa-volume-mute', 'fa-volume-up');
    }
	// video.volume = volumeControl.value / 100; 
	// console.log(volumeControl.value);
 }

function muteVid(){
    if(reel.muted){
        reel.muted = false;
        volumeControl.value = volumeControlValue;
        muteBtn.classList.replace('fa-volume-mute', 'fa-volume-up');
    } else {
        volumeControlValue = volumeControl.value;
        volumeControl.value = 0;
        reel.muted = true;
        muteBtn.classList.replace('fa-volume-up', 'fa-volume-mute');
        // console.log( muteBtn.classList.replace('fa-volume-up', 'fa-volume-mute'));
    }
}

function videoSeek(){
	var seekto = video.duration * (seekSlider.value / 100);
	video.currentTime = seekto;
}
function seekTimeUpdate(){
	var nt = video.currentTime * (100 / video.duration);
	seekSlider.value = nt;
}

// Reel Event Listeners

muteVideo.addEventListener("click", muteVid, false);
pPlay.addEventListener("click", pausePlay, false);
volumeControl.addEventListener("mouseup", changeVol, false);
seekSlider.addEventListener("change",videoSeek,false);
video.addEventListener("timeupdate",seekTimeUpdate,false);


