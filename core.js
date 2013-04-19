
$(document).ready(function(){
	$team = $("#teamButton, #teamButton2");
	$game = $(".gameButton");
	$contact = $("#contactButton");
	
	$page1 = $("#page1");
	$page2 = $("#page2");
	$page3 = $("#page3");
	
	var currentPage = 1,
		fadeOutTime = 100,
		fadeInTime = 300
	;
	
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
			
	};
	
	if(window.location.hash === '#team'){
		$team.click();
	}
	if(window.location.hash === '#contact'){
		$contact.click();
	}
	
});


