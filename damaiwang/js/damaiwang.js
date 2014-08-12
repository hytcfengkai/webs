$(function(){
	$("#closeTop").click( function () { 
		$("#guanggaoTop").hide(); 
	});


	$(".mydamaidetail").hover(function(){
		$(this).css({
			
			"border":"2px",
			"border-color":"#ffc7d2"
		});
		
	},function(){
		$(this).css({
			"border":"",
			"border-color":""
		});
		
	});
});