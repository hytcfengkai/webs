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


	$("#switch").click(function(){
		var a = $(this).attr("show");
		if(a == 1){
			hideInfo();
			$(this).attr("show","0");
		}
		else{
			showInfo();
			$(this).attr("show","1");
		}
	});





});



function hideInfo(){
	$("#newbox").stop().animate({"bottom": "-115px"},800);
}

function showInfo(){
	$("#newbox").stop().animate({"bottom": "58px"},800);
}








setTimeout("jump()",10);
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
                $(".boxpageE_1").css("top",(t*t*a)+ 33 +"px");
                $(".boxpageF_2").css("top",(t*t*a)+ 56 +"px");
                setTimeout("jump()",10);
            }            












 window.onscroll = function() {
 	var scrolls = $(this).scrollTop();
 	
	if( scrolls == 100){
		scrollItemA_1_1();	
	}
	if( scrolls == 200){
		scrollItemA_1_2();	
	}
	if( scrolls == 300){
		scrollItemA_1_3();	
	}

	if( scrolls == 400){
		scrollItemA_1_4();	
	}

	if( scrolls == 500){
		scrollItemA_1_5();	
	}


	if( scrolls == 600){
		scrollItemB_1_1();	
	}

	if( scrolls == 700){
		scrollItemB_1_2();	
	}

	if( scrolls == 800){
		scrollItemB_1_3();	
	}

	if( scrolls == 900){
		scrollItemB_1_4();	
	}

	if( scrolls == 1000){
		scrollItemB_1_5();	
	}
	if( scrolls == 1100){
		scrollItemC_1_1();	
	}
	if( scrolls == 1200){
		scrollItemC_1_2();	
	}
	if( scrolls == 1300){
		scrollItemC_1_3();	
	}
	if( scrolls == 1400){
		scrollItemC_1_4();	
	}
	if( scrolls == 1500){
		scrollItemC_1_5();	
	}
	if( scrolls == 1600){
		scrollItemD_1_1();	
	}
	if( scrolls == 1700){
		scrollItemD_1_2();	
	}
	if( scrolls == 1800){
		scrollItemD_1_3();	
	}
	if( scrolls == 1900){
		scrollItemD_1_4();	
	}
	if( scrolls == 2000){
		scrollItemD_1_5();	
	}
	if( scrolls == 2100){
		scrollItemE_1_1();	
	}
	if( scrolls == 2200){
		scrollItemE_1_2();	
	}
	if( scrolls == 2300){
		scrollItemE_1_3();	
	}
	if( scrolls == 2400){
		scrollItemE_1_4();	
	}
	if( scrolls == 2500){
		scrollItemE_1_5();	
	}
	// if( scrolls=533){
	// 	scrollItem3();	
	// }
	// if(scrolls<800 && scrolls>500){
	// 	scrollItem1_1();
	// }
	if( scrolls < 499){
		scrollItemID1();	
	}
	if( scrolls < 999 && scrolls >499){
		scrollItemID2();	
	}
	if( scrolls < 1499 && scrolls >999){
		scrollItemID3();	
	}
	if( scrolls < 1999 && scrolls >1499){
		scrollItemID4();	
	}
	if( scrolls < 2499 && scrolls >1999){
		scrollItemID5();	
	}
	if( scrolls < 2999 && scrolls >2499){
		scrollItemID6();	
	}
     
}


function scrollItemID1(){
	$("#Home").css("background-position","0 -43px");
	$(".objectClick2").css("background-position","0 0");
	$(".objectClick3").css("background-position","0 0");
	$(".objectClick4").css("background-position","0 0");
	$(".objectClick5").css("background-position","0 0");
	$(".objectClick6").css("background-position","0 0");
}

function scrollItemID2(){
	$(".objectClick2").css("background-position","0 -84px");
	$("#Home").css("background-position","0 0");
	$(".objectClick3").css("background-position","0 0");
	$(".objectClick4").css("background-position","0 0");
	$(".objectClick5").css("background-position","0 0");
	$(".objectClick6").css("background-position","0 0");
}

function scrollItemID3(){
	$(".objectClick3").css("background-position","0 -84px");
	$("#Home").css("background-position","0 0");
	$(".objectClick2").css("background-position","0 0");
	$(".objectClick4").css("background-position","0 0");
	$(".objectClick5").css("background-position","0 0");
	$(".objectClick6").css("background-position","0 0");
}

function scrollItemID4(){
	$(".objectClick4").css("background-position","0 -84px");
	$("#Home").css("background-position","0 0");
	$(".objectClick2").css("background-position","0 0");
	$(".objectClick3").css("background-position","0 0");
	$(".objectClick5").css("background-position","0 0");
	$(".objectClick6").css("background-position","0 0");
}

function scrollItemID5(){
	$(".objectClick5").css("background-position","0 -84px");
	$("#Home").css("background-position","0 0");
	$(".objectClick2").css("background-position","0 0");
	$(".objectClick3").css("background-position","0 0");
	$(".objectClick4").css("background-position","0 0");
	$(".objectClick6").css("background-position","0 0");
}

function scrollItemID6(){
	$(".objectClick6").css("background-position","0 -84px");
	$("#Home").css("background-position","0 0");
	$(".objectClick2").css("background-position","0 0");
	$(".objectClick3").css("background-position","0 0");
	$(".objectClick4").css("background-position","0 0");
	$(".objectClick5").css("background-position","0 0");
}





function scrollItemA_1_1(){
	$(".boxpageA_1").stop().animate({"top": "0"},800);
	$(".boxpageA_2").stop().animate({"top": "110px"},800);
	$(".boxpageB_1").stop().animate({"top": "250px"},800);
	
}

function scrollItemA_1_2(){
	$(".boxpageA_1").stop().animate({"top": "200px"},800);
	$(".boxpageA_2").stop().animate({"top": "80px"},800);
	$(".boxpageB_3").stop().animate({"top": "-600px"},800);
}

function scrollItemA_1_3(){
	$(".boxpageA_1").stop().animate({"top": "300px"},800);
	$(".boxpageA_2").stop().animate({"top": "50px"},800);
	$(".boxpageB_3").stop().animate({"top": "20px"},1000);
	$(".boxpageB_1").stop().animate({"top": "100px"},800);
	$(".boxpageB_2").stop().animate({"top": "-140px"},800);
}

function scrollItemA_1_4(){
	$(".boxpageA_1").stop().animate({"top": "400px"},500);
	$(".boxpageA_2").stop().animate({"top": "30px"},500);
	$(".boxpageB_3").stop().animate({"top": "110px"},500);
	$(".boxpageB_1").stop().animate({"top": "50px"},500);
	$(".boxpageB_2").stop().animate({"top": "30px"},500);
}

function scrollItemA_1_5(){
	$(".boxpageA_1").stop().animate({"top": "533px"},500);
	$(".boxpageA_2").stop().animate({"top": "20px"},500);
	$(".boxpageB_3").stop().animate({"top": "200px"},500);
	$(".boxpageB_1").stop().animate({"top": "-10px"},500);
	$(".boxpageB_2").stop().animate({"top": "67px"},500);
}

function scrollItemB_1_1(){
	$(".boxpageB_1").stop().animate({"top": "150px"},500);
	$(".boxpageB_3").stop().animate({"top": "-10px"},500);
	$(".boxpageB_2").stop().animate({"top": "140px"},500);
	$(".boxpageC_1").stop().animate({"left": "-510px"},500);
	$(".boxpageC_2").stop().animate({"left": "1200px"},500);
	$(".boxpageC_2").stop().animate({"left": "1200px"},500);
	$(".boxpageC_5").stop().animate({"top": "500px"},500);
}

function scrollItemB_1_2(){
	$(".boxpageB_1").stop().animate({"top": "200px"},500);
	$(".boxpageB_3").stop().animate({"top": "-120px"},500);
	$(".boxpageB_2").stop().animate({"top": "260px"},500);
	$(".boxpageC_1").stop().animate({"left": "-400px"},500);
	$(".boxpageC_3").stop().animate({"left": "1400px"},500);
	$(".boxpageC_5").stop().animate({"top": "460px"},500);
}

function scrollItemB_1_3(){
	$(".boxpageB_1").stop().animate({"top": "350px"},500);
	$(".boxpageB_3").stop().animate({"top": "-230px"},500);
	$(".boxpageB_2").stop().animate({"top": "380px"},500);
	$(".boxpageC_1").stop().animate({"left": "-200px"},500);
	$(".boxpageC_2").stop().animate({"left": "500px"},500);
	$(".boxpageC_3").stop().animate({"left": "1100px"},500);
	$(".boxpageC_5").stop().animate({"top": "420px"},500);
}

function scrollItemB_1_4(){
	$(".boxpageB_1").stop().animate({"top": "500px"},500);
	$(".boxpageB_3").stop().animate({"top": "-600px"},500);
	$(".boxpageB_2").stop().animate({"top": "500px"},500);
	$(".boxpageC_1").stop().animate({"left": "0"},500);
	$(".boxpageC_2").stop().animate({"left": "400px"},500);
	$(".boxpageC_3").stop().animate({"left": "700px"},500);
	$(".boxpageC_5").stop().animate({"top": "380px"},500);
}

function scrollItemB_1_5(){
	$(".boxpageB_1").stop().animate({"top": "150px"},500);
	$(".boxpageB_2").stop().animate({"top": "500px"},500);
	$(".boxpageC_1").stop().animate({"left": "101px"},500);
	$(".boxpageC_2").stop().animate({"left": "312px"},500);
	$(".boxpageC_3").stop().animate({"left": "533px"},500);
	$(".boxpageC_5").stop().animate({"top": "363px"},500);
}

function scrollItemC_1_1(){
	$(".boxpageC_1").stop().animate({"left": "0"},500);
	$(".boxpageC_2").stop().animate({"left": "400px"},500);
	$(".boxpageC_3").stop().animate({"left": "700px"},500);
	$(".boxpageC_5").stop().animate({"top": "300px"},500);
	$(".boxpageD_2").stop().animate({"top": "-400px"},500);
	$(".boxpageD_4").stop().animate({"top": "-400px"},500);
	$(".boxpageD_3").stop().animate({"top": "400px"},500);
}

function scrollItemC_1_2(){
	$(".boxpageC_1").stop().animate({"left": "-200px"},500);
	$(".boxpageC_2").stop().animate({"left": "500px"},500);
	$(".boxpageC_3").stop().animate({"left": "1100px"},500);
	$(".boxpageC_5").stop().animate({"top": "250px"},500);
	$(".boxpageD_2").stop().animate({"top": "-300px"},500);
	$(".boxpageD_4").stop().animate({"top": "-300px"},500);
	$(".boxpageD_3").stop().animate({"top": "300px"},500);
}

function scrollItemC_1_3(){
	$(".boxpageC_1").stop().animate({"left": "-400px"},500);
	$(".boxpageC_3").stop().animate({"left": "1400px"},500);
	$(".boxpageC_5").stop().animate({"top": "200px"},500);
	$(".boxpageD_2").stop().animate({"top": "-150px"},500);
	$(".boxpageD_4").stop().animate({"top": "-150px"},500);
	$(".boxpageD_3").stop().animate({"top": "200px"},500);
}

function scrollItemC_1_4(){
	$(".boxpageC_1").stop().animate({"left": "-510px"},500);
	$(".boxpageC_2").stop().animate({"left": "1200px"},500);
	$(".boxpageC_2").stop().animate({"left": "1200px"},500);
	$(".boxpageC_5").stop().animate({"top": "150px"},500);
	$(".boxpageD_2").stop().animate({"top": "0"},500);
	$(".boxpageD_4").stop().animate({"top": "0"},500);
	$(".boxpageD_3").stop().animate({"top": "140px"},500);
}

function scrollItemC_1_5(){
	$(".boxpageD_2").stop().animate({"top": "97px"},500);
	$(".boxpageD_4").stop().animate({"top": "97px"},500);
	$(".boxpageD_3").stop().animate({"top": "97px"},500);
}

function scrollItemD_1_1(){
	$(".boxpageD_2").stop().animate({"top": "0"},500);
	$(".boxpageD_4").stop().animate({"top": "0"},500);
	$(".boxpageD_3").stop().animate({"top": "140px"},500);
	$(".boxpageE_3").stop().animate({"left": "-550px"},500);
	$(".boxpageE_5").stop().animate({"left": "1400px"},500);
	$(".boxpageE_4").stop().animate({"top": "-200px"},500);
	$(".boxpageE_2").stop().animate({"top": "60px","left":"240px"},500);
}

function scrollItemD_1_2(){
	$(".boxpageD_2").stop().animate({"top": "-150px"},500);
	$(".boxpageD_4").stop().animate({"top": "-150px"},500);
	$(".boxpageD_3").stop().animate({"top": "200px"},500);
	$(".boxpageE_3").stop().animate({"left": "-300px"},500);
	$(".boxpageE_5").stop().animate({"left": "1240px"},500);
	$(".boxpageE_4").stop().animate({"top": "-153px"},500);
	$(".boxpageE_2").stop().animate({"top": "72px","left":"210px"},500);
}

function scrollItemD_1_3(){
	$(".boxpageD_2").stop().animate({"top": "-300px"},500);
	$(".boxpageD_4").stop().animate({"top": "-300px"},500);
	$(".boxpageD_3").stop().animate({"top": "300px"},500);
	$(".boxpageE_3").stop().animate({"left": "-50px"},500);
	$(".boxpageE_5").stop().animate({"left": "1080px"},500);
	$(".boxpageE_4").stop().animate({"top": "-106px"},500);
	$(".boxpageE_2").stop().animate({"top": "84px","left":"180px"},500);
}

function scrollItemD_1_4(){
	$(".boxpageD_2").stop().animate({"top": "-400px"},500);
	$(".boxpageD_4").stop().animate({"top": "-400px"},500);
	$(".boxpageD_3").stop().animate({"top": "400px"},500);
	$(".boxpageE_3").stop().animate({"left": "200px"},500);
	$(".boxpageE_5").stop().animate({"left": "920px"},500);
	$(".boxpageE_4").stop().animate({"top": "-59px"},500);
	$(".boxpageE_2").stop().animate({"top": "96px","left":"150px"},500);
}

function scrollItemD_1_5(){
	$(".boxpageE_3").stop().animate({"left": "462px"},500);
	$(".boxpageE_5").stop().animate({"left": "760px"},500);
	$(".boxpageE_4").stop().animate({"top": "-12px"},500);
	$(".boxpageE_2").stop().animate({"top": "114px","left":"127px"},500);
}

function scrollItemE_1_1(){
	$(".boxpageE_3").stop().animate({"left": "200px"},500);
	$(".boxpageE_5").stop().animate({"left": "920px"},500);
	$(".boxpageE_4").stop().animate({"top": "-59px"},500);
	$(".boxpageE_2").stop().animate({"top": "96px","left":"150px"},500);
	$(".boxpageF_4").stop().animate({"left": "-500px"},500);
	$(".boxpageF_1").stop().animate({"top": "400px"},500);
	$(".boxpageF_3").stop().animate({"top": "400px"},500);
}

function scrollItemE_1_2(){
	$(".boxpageE_3").stop().animate({"left": "-50px"},500);
	$(".boxpageE_5").stop().animate({"left": "1080px"},500);
	$(".boxpageE_4").stop().animate({"top": "-106px"},500);
	$(".boxpageE_2").stop().animate({"top": "84px","left":"180px"},500);
	$(".boxpageF_4").stop().animate({"left": "-275px"},500);
	$(".boxpageF_1").stop().animate({"top": "300px"},500);
	$(".boxpageF_3").stop().animate({"top": "333px"},500);
}

function scrollItemE_1_3(){
	$(".boxpageE_3").stop().animate({"left": "-300px"},500);
	$(".boxpageE_5").stop().animate({"left": "1240px"},500);
	$(".boxpageE_4").stop().animate({"top": "-153px"},500);
	$(".boxpageE_2").stop().animate({"top": "72px","left":"210px"},500);
	$(".boxpageF_4").stop().animate({"left": "-50px"},500);
	$(".boxpageF_1").stop().animate({"top": "200px"},500);
	$(".boxpageF_3").stop().animate({"top": "266px"},500);
}

function scrollItemE_1_4(){
	$(".boxpageE_3").stop().animate({"left": "-550px"},500);
	$(".boxpageE_5").stop().animate({"left": "1400px"},500);
	$(".boxpageE_4").stop().animate({"top": "-200px"},500);
	$(".boxpageE_2").stop().animate({"top": "60px","left":"240px"},500);
	$(".boxpageF_4").stop().animate({"left": "175px"},500);
	$(".boxpageF_1").stop().animate({"top": "100px"},500);
	$(".boxpageF_3").stop().animate({"top": "199px"},500);
}

function scrollItemE_1_5(){
	$(".boxpageF_4").stop().animate({"left": "189px"},500);
	$(".boxpageF_1").stop().animate({"top": "-7px"},500);
	$(".boxpageF_3").stop().animate({"top": "132px"},500);
}