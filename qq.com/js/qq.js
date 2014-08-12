$(function(){
	$("#searchSelect").hover(function(){
		$(this).css({
			
			"background-position":"-560px -200px"
			
		});

		$(this).find(".searchSelectFont1").css({
			"display":"block"
			
		});

		
	},function(){
		$(this).css({
			"background-position":"-886px -200px"
			
		});

		$(this).find(".searchSelectFont1").css({
			"display":"none",
			"background-color":""
		});
	});

	$(".di").hover(function(){
		$(this).css({
			"background-color":"rgb(210,225,241)",
			"color":"rgb(50,151,216)"
		});
	},function(){
		$(this).css({
			"background-color":"",
			"color":""
		});
	});




	
});