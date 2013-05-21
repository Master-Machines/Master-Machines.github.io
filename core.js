
$(document).ready(function(){
	//Creating jQuery variables
	$team = $("#teamButton, #teamButton2");
	$game = $(".gameButton");
	$contact = $("#contactButton");
	$play = $("#playNowButton");
	$page1 = $("#page1");
	$page2 = $("#page2");
	$page3 = $("#page3");
	$page4 = $("#page4");
	
	//Standard JS variables
	var currentPage = 1,
		fadeOutTime = 100,
		fadeInTime = 300
	;
	
	//Brings up the home tab
	$game.click(function(){
		
		if(currentPage != 1){
			fadeAll(1);
			currentPage = 1;
			setTimeout(function(){
				console.log("game fade in");
				$page1.css('display','');
				location.hash = 'game';
				$page1.animate({opacity:1},{'duration':fadeInTime,'complete':function(){
					$(this).show();
					
				}});
			},fadeOutTime);
		}
	});
	
	//Brings up the team tab. This tab will show up when the user clicks the team button in the nav bar or when the user clicks the "Read More..." link in the home tab.
	$team.click(function(){
		
		if(currentPage != 2){
			fadeAll(2);
			currentPage = 2;
			setTimeout(function(){
				console.log("team fade in");
				$page2.css('display','');
				location.hash = 'team';
				$page2.animate({opacity:1},{'duration':fadeInTime,'complete':function(){
					$(this).show();
					
				}});
			},fadeOutTime);
		}
	});
	
	//Brings up the contact tab.
	$contact.click(function(){
		
		if(currentPage != 3){
			fadeAll(3);
			currentPage = 3;
			setTimeout(function(){
				console.log("contact fade in");
				$page3.css('display','');
				location.hash = 'contact';
				$page3.animate({opacity:1},{'duration':fadeInTime,'complete':function(){
					$(this).show();
					
				}});
			},fadeOutTime);
		}
	});
	
	$play.click(function(){
		
		if(currentPage != 4){
			fadeAll(4);
			currentPage = 4;
			setTimeout(function(){
				console.log("play now fade in");
				$page4.css('display','');
				location.hash = 'play';
				$page4.animate({opacity:1},{'duration':fadeInTime,'complete':function(){
					$(this).show();
					
				}});
			},fadeOutTime);
		}
	});
	
	//Fades all tabs other than the tab that the user is switching to.
	var fadeAll = function(ignore){
		if(ignore != 1){
			$page1.animate({opacity:0},{duration:fadeOutTime, complete:function(){$(this).css('display','none');}});
		}
			
		if(ignore != 2){
			$page2.animate({opacity:0},{duration:fadeOutTime, complete:function(){$(this).css('display','none');}});
		}
			
		if(ignore != 3){
			$page3.animate({opacity:0},{duration:fadeOutTime, complete:function(){$(this).css('display','none');}});
		}
		if(ignore != 4){
			$('#gamePlayer').remove();
			$("#pageFourArea").show();
			$page4.animate({opacity:0},{duration:fadeOutTime, complete:function(){$(this).css('display','none');}});
		}	
		$('body').animate({'background-color':'#FFF'}, 200);
		$('#formLink, #fullScreenMessage, #loadingWarning').remove();
	};
	
	//Redirect to team tab.
	if(window.location.hash === '#team'){
		$team.click();
	}
	
	//Redirect to contact tab.
	if(window.location.hash === '#contact'){
		$contact.click();
	}
	
	//Redirect to play now tab.
	if(window.location.hash === '#play'){
		$play.click();
	}
	$('.flex-video').html("<iframe src='https://www.facebook.com/video/embed?video_id=10200384229921907' width='1280' height='720' style='border-width:0px' ></iframe>");
	
	$('#playButton').click(function(){
		
		$('#pageFourArea').after("<iframe src='Beta BC.html' height='640' width='1000' style='border-width:0px' id='gamePlayer'></iframe>");
		$("#pageFourArea").hide();
		$('#gamePlayer').before("<div><label id='loadingWarning' style='color:#000; opacity: .4; font-size: 30px'>Loading may take a few minutes, sorry for the delay!</label></div>");
		
	});
	

});

function fadeToBlack(){
	$('body').animate({'background-color':'#000'}, 1000);
	$('#loadingWarning').remove();
	setTimeout(function(){
		$('#gamePlayer').after("<div><label id='formLink' style='color:#0f0; opacity: .4'>Done playing? PLease fill out our <a href='https://docs.google.com/forms/d/1sikoSleGI8cxFpOML-wYax_F3nY1uPwRWpfLTa04bAk/viewform'>feedback form</a></label></div>");
		$('#gamePlayer').after("<div><label id='fullScreenMessage' style='color:#0f0; opacity: .4'>Press the 'f' key to enter fullscreen. Must not be main menu for this to work.</label></div>");
	},1000);
}


//Embeds the facebook video into the modal.
var firstVid = true;
function video(){
	if(firstVid){
		firstVid = false;
		
		//$('.close-reveal-modal').click();
		//$('#playTrailerButton').click();
	}
	
}

function WebPlayerAnalytics(url){
	$.get(url);
}


