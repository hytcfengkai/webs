$(function(){
	$("#tb_index_li").hover(function(){
		$(this).css({

		});
		$(this).find(".nav_drop_down").stop().animate({"height": "223px"},500);
		
	},function(){
		$(this).css({

		});
		$(this).find(".nav_drop_down").stop().animate({"height": "0"},500);
	});





});