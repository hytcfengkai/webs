$(function(){
	$(".title_name").hover(function(){
		$(this).css({
			"background-color": "#0053d7"
		});
		$(this).find(".title_font").css({
			"color":"rgb(255,255,255)"
		});
		$(this).find(".title_hide").show();
		$(this).find(".show_hide").css({
			"background-image":'url("css/images/icon_04.gif")'
		});
		
	},function(){
		$(this).css({
			"background-color": ""
		});
		$(this).find(".title_font").css({
			"color":""
		});
		$(this).find(".title_hide").hide();
		$(this).find(".show_hide").css({
			"background-image":""
		});
	});


	$(".icon").hover(function(){	
		$(this).find(".tip").show();		
	},function(){
		$(this).find(".tip").hide();
	});






});



$(function(){
	showFlashPic();
	$(".boxpageC_5_1_1").hover(function(){
		clearInterval(timerStop);
	},function(){
		timerStop = setInterval("showFlashPic()",3000);
	});
	timerStop = setInterval("showFlashPic()",3000);
});

var currNum = 1
function showFlashPic(){
	if(currNum == 3){
		$(".boxpageC_5_1_1_pic5").animate({"left": "604px"},0);
		$(".boxpageC_5_1_1_pic6").animate({"left": "755px"},0);
		$(".boxpageC_5_1_1_pic7").animate({"left": "906px"},0);
		$(".boxpageC_5_1_1_pic8").animate({"left": "1057px"},0);
		currNum = 0;
	}
	if(currNum == 2){
		$(".boxpageC_5_1_1_pic1").animate({"left": "604px"},0);
		$(".boxpageC_5_1_1_pic2").animate({"left": "755px"},0);
		$(".boxpageC_5_1_1_pic3").animate({"left": "906px"},0);
		$(".boxpageC_5_1_1_pic4").animate({"left": "1057px"},0);
		currNum++;
	}
	if(currNum !=0){
		$(".boxpageC_5_1_1_pic1").animate({"left": "-604px"},5000);
		$(".boxpageC_5_1_1_pic2").animate({"left": "-453px"},5000);
		$(".boxpageC_5_1_1_pic3").animate({"left": "-302px"},5000);
		$(".boxpageC_5_1_1_pic4").animate({"left": "-151px"},5000);
		$(".boxpageC_5_1_1_pic5").animate({"left": "0"},5000);
		$(".boxpageC_5_1_1_pic6").animate({"left": "151px"},5000);
		$(".boxpageC_5_1_1_pic7").animate({"left": "302px"},5000);
		$(".boxpageC_5_1_1_pic8").animate({"left": "453px"},5000);
	}	
	currNum++;

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
                $(".boxpageA_3").css("top",(t*t*a)+ 60 +"px");
                $(".boxpageB_4").css("top",(t*t*a)+ 224 +"px");
                $(".boxpageB_5").css("top",(t*t*a)+ 161 +"px");// 设置图片的top值
                $(".boxpageC_4").css("top",(t*t*a)+ 65 +"px");
                setTimeout("jump()",5);
            }            