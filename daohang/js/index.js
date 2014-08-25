//show time
$(function(){
	setInterval('showDigit()',1000);
});

function showDigit(ct){
	var ct = new Date();
	var year = ct.getYear();
	var month = ct.getMonth() + 1;
	var date = ct.getDate();
	var hour = ct.getHours();
	var mi = ct.getMinutes();
	var s = ct.getSeconds();

	if (year < 314){
		year = 1900 + year;
	}
	var y1 = Math.floor(year / 1000);
	var y2 = Math.floor((year % 1000) / 100);
	var y3 = Math.floor((year % 100) / 10);
	var y4 = Math.floor(year % 10);

	var m1 = Math.floor(month / 10);
	var m2 = Math.floor(month % 10);

	var d1 = Math.floor(month / 10);
	var d2 = Math.floor()

	var s1 = Math.floor(s/10);
	var s2 = Math.floor(s%10);

	$("#y1").css("background-position","0px -" +y1*30+"px");
	$("#y2").css("background-position","0px -" +y2*30+"px");
	$("#y3").css("background-position","0px -" +y3*30+"px");
	$("#y4").css("background-position","0px -" +y4*30+"px");

	$("#m1").css("background-position","0px -" +m1*30+"px");
	$("#m2").css("background-position","0px -" +m2*30+"px");

	$("#s1").css("background-position","0px -" +s1*30+"px");
	$("#s2").css("background-position","0px -" +s2*30+"px");

}



$(function(){
	$(".Next").click(function(){
		$("#LM2").stop().animate({"top": "-665px"},2000);
		$("#LM3").stop().animate({"top": "0"},2000);
	});
	$(".Return").click(function(){
		$("#LM2").stop().animate({"top": "0"},2000);
		$("#LM3").stop().animate({"top": "665"},2000);
	});
});