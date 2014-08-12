$(function(){
	$("#menuA").hover(function(){
		$(this).find("#detail").slideDown("slow");
		$(this).find(".man").css({
			"color":"rgb(255,255,255)"
	});
		$(this).find("#detail").css({
			"display":"block"
		});
		$(".man2").hover(function(){
			$(this).css({
				"color":"rgb(255,255,255)"
			});
		},function(){
			$(this).css({
				"color":""
			});
			
		});

	},function(){
		$(this).find(".man").css({
			"color":""

		});
		$(this).find("#detail").css({
			"display":""
		});
	});





	$("#menuB").hover(function(){
		$(this).find("#detail1").slideDown("slow");
		$(this).find(".woman").css({
			"color":"rgb(255,255,255)"
	});
		$(this).find("#detail1").css({
			"display":"block"
		});
		$(".man21").hover(function(){
			$(this).css({
				"color":"rgb(255,255,255)"
			});
		},function(){
			$(this).css({
				"color":""
			});
			
		});

	},function(){
		$(this).find(".woman").css({
			"color":""

		});
		$(this).find("#detail1").css({
			"display":""
		});
	});



	$(".topFont").hover(function(){
		$(this).css({
			"color":"rgb(255,255,255)"
		});
	},function(){
		$(this).css({
			"color":""
		});
	});





});


$(function(){
	$(".topDian0").click(function(){
		currIndex = $(this).attr("picIndex");
		showFlashImage($(this));
	});
	$("#topPic0").hover(function(){
		clearInterval(timerHandle);
	},function(){
		timerHandle = setInterval("showFlashImage()",2000);
	});
	timerHandle = setInterval("showFlashImage()",2000);




});

var timerHandle;
var currIndex = 2;
function showFlashImage(){
	$("#topPic0").css("background-image",'url("css/images/' + currIndex + '.jpg")');
	$(".topDian0").removeClass("current");
	$("#controlSpan" + currIndex).addClass("current");
	currIndex++;
	if (currIndex == 4){
		currIndex = 1;
	}
}


setTimeout("jump()",5);
            var t=0,a=10,v=t*a,s=10,updown=true;// s路程,a加速度,t时间,updown判断上升还是下降
            function jump(){
                if(t<=0){
                    updown=true;
                }else if(t*t*a>=s){
                    updown=false;
                }
                if(updown){
                    t=t+0.01
                }else{
                    t=t-0.01;
                }
                $("#daohangxia").css("top",(t*t*a)+ 600 +"px");// 设置图片的top值
                setTimeout("jump()",5);
            }




$(document).ready(function() {
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });
});

