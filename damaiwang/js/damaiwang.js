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


		$(this).find(".LogoMoreHide").css({
			
			"display": "block"
		});
	},function(){

		$(this).css({
			
			"background-image": "",
			"background-position":""
		});


		$(this).find(".LogoMoreHide").css({
			
			"display": "none"
		});
	});









});











$(function(){
	$(".turndian").click(function(){

		currIndex = $(this).attr("picindex");
		shuzuA=currIndex;
		showFlashImage();
	});
	$(".turnPic").hover(function(){
		clearInterval(timerHandle);
	},function(){
		timerHandle = setInterval("showFlashImage()",2000);
	});
	timerHandle = setInterval("showFlashImage()",2000);




});

var timerHandle;
var currIndex = 1;



var shuzuA = 1;



var picAddress=new Array('url("images/1.jpg")',
		'url("images/2.gif")',
		'url("images/3.jpg")',
		'url("image/4.jpg")',
		'url("image/5.jpg")',
		'url("image/6.jpg")',
		'url("image/7.jpg")',
		'url("image/8.jpg")',
		'url("image/9.jpg")',
		'url("image/10.jpg")',
		'url("image/11.jpg")',
		'url("image/lm9Right/T1TrawFglbXXXXPav4-200-250.jpg")',
		'url("image/lm9Right/T1hCStFXxfXXXXPav4-200-250.jpg")',
		'url("image/lm9Right/T1TrawFglbXXXXPav4-200-250.jpg")',
		'url("image/lm9Right/T1VdGxFe8XXXXXPav4-200-250.jpg")',
		'url("image/lm9Right/T11bSwFm8bXXXXPav4-200-250.jpg")'
		);




function showFlashImage(){
	 $(".turnPic").css("background-image",picAddress[shuzuA-1]);
	 shuzuA++;
	 if(shuzuA==14)
	 {
	 	shuzuA=1;
	 }

	//$(".turnPic").css("background-image",'url("images/3.jpg")');
	$(".turndian").removeClass("current");
	$("#turnNum" + currIndex).addClass("current");
	currIndex++;
	if (currIndex == 14){
		currIndex = 1;
		
	}
}