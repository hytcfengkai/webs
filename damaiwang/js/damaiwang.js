$(function(){
	$("#closeTop").click( function () { 
		$("#guanggaoTop").hide(); 
	});


	$(".mydamaidetail").hover(function(){
		$(this).css({
			
			"border": "2px solid #ffc7d2",
			"border-bottom": "none",
			"background-position": "-355px -88px"
		});
		$(this).find(".mydamaiHide").css({
			"display":"block"
		});
		
	},function(){
		$(this).css({
			"border": "",
			"border-bottom": "",
			"background-position": ""
		});
		$(this).find(".mydamaiHide").css({
			"display":""
		});
	});



	$(".help").hover(function(){
		$(this).css({
			
			"border": "2px solid #ffc7d2",
			"border-bottom": "none"
		});
		$(this).parent().find(".helpHide").css({
			"display":"block"
		});
		
	},function(){
		$(this).css({
			"border": "",
			"border-bottom": ""
		});
		$(this).parent().find(".helpHide").css({
			"display":""
		});
	});


	$(".helpHide").hover(function(){
		$(this).css({
			"display":"block"
			
		});
		$(this).parent().find(".help").css({
			"border": "2px solid #ffc7d2",
			"border-bottom": "none"
		});
		
	},function(){
		$(this).css({
			"display":""
		});
		$(this).parent().find(".help").css({
			"border": "",
			"border-bottom": ""
		});
	});





	$(".guide").hover(function(){
		$(this).css({
			
			"border": "2px solid #ffc7d2",
			"border-bottom": "2px solid #fff",
			"z-index": "2"
		});
		$(this).parent().find(".guideHide").css({
			"display":"block"
		});
		
	},function(){
		$(this).css({
			"border": "",
			"border-bottom": "",
			"z-index": ""
		});
		$(this).parent().find(".guideHide").css({
			"display":""
		});
	});



	$(".guideHide").hover(function(){
		$(this).css({
			
			"display": "block"
		});
		$(this).parent().find(".guide").css({
			"border": "2px solid #ffc7d2",
			"border-bottom": "2px solid #fff",
			"z-index": "2"
		});
		
	},function(){
		$(this).css({
			"display": ""
		});
		$(this).parent().find(".guide").css({
			"border": "",
			"border-bottom": "",
			"z-index": ""
		});

	});







	$("#OpenHide").hover(function(){
		$(this).find(".typeTopHide").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg").css({
			"background-position":"0 -806px"
		});

	},function(){
		$(this).find(".typeTopHide").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg").css({
			"background-position":""
		});
	});





	$("#OpenHide1").hover(function(){
		$(this).find(".typeTopHide1").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg1").css({
			"background-position":"0 -806px"
		});

		
	},function(){
		$(this).find(".typeTopHide1").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg1").css({
			"background-position":""
		});

	});






	$("#OpenHide2").hover(function(){
		$(this).find(".typeTopHide2").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg2").css({
			"background-position":"0 -806px"
		});
		
	},function(){
		$(this).find(".typeTopHide2").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg2").css({
			"background-position":""
		});

	});





	$("#OpenHide3").hover(function(){
		$(this).find(".typeTopHide3").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg3").css({
			"background-position":"0 -806px"
		});
		
	},function(){
		$(this).find(".typeTopHide3").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg3").css({
			"background-position":""
		});

	});

	





	$("#OpenHide4").hover(function(){
		$(this).find(".typeTopHide4").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg4").css({
			"background-position":"0 -806px"
		});
		
	},function(){
		$(this).find(".typeTopHide4").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg4").css({
			"background-position":""
		});

	});

	




	$("#OpenHide5").hover(function(){
		$(this).find(".typeTopHide5").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg5").css({
			"background-position":"0 -806px"
		});
		
	},function(){
		$(this).find(".typeTopHide5").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg5").css({
			"background-position":""
		});

	});






	$("#OpenHide6").hover(function(){
		$(this).find(".typeTopHide6").css({
			
			"display": "block"
		});
		$(this).css({
			"background-image":'url("css/images/bg-index-common.png")',
			"background-position":"0 -398px"
		});
		$(this).parent().find(".typeTopImg6").css({
			"background-position":"0 -806px"
		});

	},function(){
		$(this).find(".typeTopHide6").css({
			"display": ""
		});
		$(this).css({
			"background-image":"",
			"background-position":""
		});
		$(this).parent().find(".typeTopImg6").css({
			"background-position":""
		});

	});










	$("#city").click( function () {
		var a = $(this).attr("show");
		if(a == "1"){	 
			$(".changeCityChoose").show();
			$(this).attr("show","0");
			$(this).css({
				"background-position":"-79px -318px",
				
			});
			$(this).find(".changeCity").css({
				"color":"#fff"
			});
		}
		else{	 
			$(".changeCityChoose").hide();
			$(this).attr("show","1");
			$(this).css({
				"background-position":"0 -319px",
				
			});
			$(this).find(".changeCity").css({
				"color":""
			});
		}

	});








	$(".searchInput").focus(function(){
		$(this).attr({"value":""});
		$(this).attr("Show",0);
	});

	$(".searchInput").blur(function(){
		$(this).attr({"value":"请输入演出，艺人，场馆名称…"});
		$(this).attr("Show",1);
	});






	$(".searchInput").hover(function(){
		var n= $(this).attr("Show");
		if(n==1){
			$(this).css({
				
				"background-image": 'url("css/images/dingzhi.png")',
				"background-position": "260px -53px",
				"background-repeat": "no-repeat"
			});
			$(".searchInput").focus(function(){
				$(this).css({
					"background-image": "",
					"background-position": "",
					"background-repeat": ""
				});
			});
		}
		
	},function(){
		$(this).css({
			"background-image": "",
			"background-position": "",
			"background-repeat": ""
		});
	});









	$(".LogoMore").hover(function(){
		$(this).css({
			"background-image": 'url("css/images/dingzhi.png")',
			"background-position":"0 -26px"
		});
		$(this).parent().find(".LogoMoreHide").css({
			"display": "block"
		});
	},function(){
		$(this).css({
			"background-image": "",
			"background-position":""
		});
		$(this).parent().find(".LogoMoreHide").css({
			
			"display": "none"
		});
	});











	$(".turnPic").hover(function(){
		$(this).parent().find(".turnUp").css({
			
			"display": "block"
		});
		$(this).parent().find(".turnDown").css({
			
			"display": "block"
		});
		
	},function(){
		$(this).parent().find(".turnUp").css({
			
			"display": ""
		});
		$(this).parent().find(".turnDown").css({
			
			"display": ""
		});
	});











	$(".turnUp").hover(function(){
		$(this).css({
			
			"display": "block"
		});
		$(this).parent().find(".turnDown").css({
			
			"display": "block"
		});
		
	},function(){
		$(this).css({
			
			"display": ""
		});
		$(this).parent().find(".turnDown").css({
			
			"display": ""
		});
	});







	$(".turnDown").hover(function(){
		$(this).parent().find(".turnUp").css({
			
			"display": "block"
		});
		$(this).css({
			
			"display": "block"
		});
		
	},function(){
		$(this).parent().find(".turnUp").css({
			
			"display": ""
		});
		$(this).css({
			
			"display": ""
		});
	});





	$(".cityMore").click( function () {
		var b = $(this).find(".MoreHide").attr("showA");
		if(b == "1"){	 
			$(".cityMoreHide").show();
			$(this).find(".MoreHide").attr("showA","0");
			$(this).css({	
				"background-image": 'url("css/images/bg-index-common.png")',
				"background-position": "0 -242px"
			});
			$(this).find(".MoreHide").css({
				"color":"#e51a45"
			});
		}
		else{	 
			$(".cityMoreHide").hide();
			$(this).find(".MoreHide").attr("showA","1");
			$(this).css({
				"background-image": 'url("css/images/bg-index-common.png")',
				"background-position": "0 -57px"
				
			});
			$(this).find(".MoreHide").css({
				"color":""
			});
		}

	});







	$(".middleCityRightTitle2").click( function () { 
		$(this).parent().parent().find(".middleCityTest").hide();
		$(this).parent().parent().find(".middleCityTest1").show(); 
		$(this).css({
			"background-color": "#fff"
		});
		$(this).parent().find(".middleCityRightTitle1").css({
			"background-color": "#f3f3f3"
		});
	});

	$(".middleCityRightTitle1").click( function () { 
		$(this).parent().parent().find(".middleCityTest1").hide();
		$(this).parent().parent().find(".middleCityTest").show(); 
		$(this).css({
			"background-color": "#f3f3f3"
		});
		$(this).parent().find(".middleCityRightTitle1").css({
			"background-color": "#fff"
		});
	});



	$(".ImgPic").hover(function(){
		$(this).parent().find(".ImgHide").animate({"top": "0"},500);
		
	},function(){
		$(this).parent().find(".ImgHide").animate({"top": "210px"},500);
		$(this).parent().find(".ImgHide").animate({"top": "-210px"},0);

	});







});

























$(function(){
	$(".turndian").click(function(){

		currIndex = $(this).attr("picindex");
		
		showFlashImage();
	});
	$(".turnPic").hover(function(){
		clearInterval(timerHandle);
	},function(){
		timerHandle = setInterval("showFlashImage()",5000);
	});
	timerHandle = setInterval("showFlashImage()",5000);




});


$(function(){
	//showFlashImage();
	$(".turnUp").click(function(){
		
	clearInterval(timerHandle);
	currIndex--;
	currIndex--;
	if (currIndex == 1){

		currIndex = 14;	
		showFlashImage();
	}
	else if (currIndex == 0){

		currIndex = 13;	
		showFlashImage();
	}
	else{
		showFlashImage();
	}
	timerHandle = setInterval("showFlashImage()",5000);

	});
});


$(function(){
	//showFlashImage();
	$(".turnDown").click(function(){
		
	clearInterval(timerHandle);
	
	if (currIndex == 15){

		currIndex = 2;	
		showFlashImage();
	}

	else{
		showFlashImage();
	}
	timerHandle = setInterval("showFlashImage()",5000);

	});
});



var timerHandle;
var currIndex = 3;







var picAddress=new Array('url("images/1.jpg")',
		'url("images/2.gif")',
		'url("images/3.jpg")',
		'url("images/4.jpg")',
		'url("images/5.jpg")',
		'url("images/6.jpg")',
		'url("images/7.jpg")',
		'url("images/8.jpg")',
		'url("images/9.jpg")',
		'url("images/10.gif")',
		'url("images/11.jpg")',
		'url("images/12.jpg")',
		'url("images/13.jpg")'
		);




function showFlashImage(){
	 $(".turnPic").css("background-image",picAddress[currIndex-2]);
	 

	//$(".turnPic").css("background-image",'url("images/3.jpg")');
	$(".turndian").removeClass("current");
	$("#turnNum" + currIndex).addClass("current");
	currIndex++;
	if (currIndex == 15){
		currIndex = 2;
		
	}
}





var currInfoIndex = 0;


$(function(){
	$(".showUp").click(function(){

		currInfoIndex = $(this).parent().parent().parent().attr("InfoIndex");

		showInfoUp();
	});

});

$(function(){
	$(".showDown").click(function(){

		currInfoIndex = $(this).parent().parent().parent().attr("InfoIndex");

		showInfoDown();
	});

});




function showInfoUp(){
	$("#shownoticecon" + currInfoIndex).css("display","none");
	currInfoIndex--;
	if(currInfoIndex == 0){
		currInfoIndex = 3;
	}
	$("#shownoticecon" + currInfoIndex).css("display","block");
}

function showInfoDown(){
	$("#shownoticecon" + currInfoIndex).css("display","none");
	currInfoIndex++;
	if(currInfoIndex == 4){
		currInfoIndex = 1;
	}
	$("#shownoticecon" + currInfoIndex).css("display","block");
}











var currshowlistIndex = 1;

$(function(){
	$(".showcityoff").click(function(){



		$(".cityMoreHide").hide();
		$(this).parent().find(".MoreHide").css({
			"color": "#fff", 
			"font-weight": "bold", 
			"line-height": "36px"
				
		});
		$(this).parent().find(".cityMore").css({
			"background-image": 'url("images/bg-index-common.png")',
			"background-position": "0 -57px"
				
		});




		currshowlistIndex = $(this).attr("showlistIndex");

		showlistwhere();
	});

});



function showlistwhere(){
	$(".showstate").removeClass("showcityon");
	$(".showstate").addClass("showcityoff");

	$(".showstate").find(".showlistoff").removeClass("showliston");
	

	$(".showwherecity" + currshowlistIndex).addClass("showcityon");
	$(".showwherecity" + currshowlistIndex).removeClass("showcityoff");
	$(".showwherecity" + currshowlistIndex).find(".showlistoff").addClass("showliston");
	$(".showlist").css("display","none");
	
	$("#showlist" + currshowlistIndex).css("display","block");


	$("#cityfollowShow1").css("display","none");
	$(".cityfollowShow").css("display","none");
	$("#cityfollowShow" + currshowlistIndex).css("display","block");
}










var currcityName = 1;

$(function(){
	$(".cityButton").click(function(){
		$(".categoryprojectlist").hide();
		$(".categoryprojectlist1").hide();
		currcityName = $(this).attr("cityName");
		$(".categoryprojectlist" + currcityName).show();


		$(this).parent().find(".cityButton").removeClass("cityinfoOn");
		$(this).parent().find(".cityButton").addClass("cityinfoOff");
		$(this).addClass("cityinfoOn");

		$(this).parent().find(".cityFont").removeClass("cityFontOn");
		$(this).parent().find(".cityFont").addClass("cityFontOff");
		$(this).find(".cityFont").addClass("cityFontOn");



	});

});