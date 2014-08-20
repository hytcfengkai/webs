$(function(){


  	$("#account_loginNameFieldInput").focus(function(){
		$(this).attr({"value":""});
		$(this).attr("ShowA",0);
	});

	$("#account_loginNameFieldInput").blur(function(){
		$(this).attr({"value":"Email 地址"});
		$(this).attr("ShowA",1);
		var InputVal = $("#account_loginNameFieldInput").val();
		isEmail();
	});





	$(".yearDropDown").click(function(){
		if(T == "年" ){
			$(this).css({
				"color":"rgb(169, 169, 169)"
			});
		}
		else{
			$(this).css({
				"color":"rgb(0, 0, 0)"
			});
		}
	});


	$(".monthDropDown").click(function(){
		if(T2 == "月" ){
			$(this).css({
				"color":"rgb(169, 169, 169)"
			});
		}
		else{
			$(this).css({
				"color":"rgb(0, 0, 0)"
			});
		}
	});



	$(".dayDropDown").click(function(){
		if(T3 == "日" ){
			$(this).css({
				"color":"rgb(169, 169, 169)"
			});
		}
		else{
			$(this).css({
				"color":"rgb(0, 0, 0)"
			});
		}
	});


	$(".regInput_Country").click(function(){
		if(T4 == "请选择州/省"){
			$(this).css({
				"color":"rgb(169, 169, 169)"
			});
		}
		else{
			$(this).css({
				"color":"rgb(0, 0, 0)"
			});
		}
	});



	$("#account_password").blur(function(){

		tishi();
	});

	$("#confirmPasswordField").blur(function(){

		var str=document.getElementById("account_password").value;
		jianyan(str);
	});

	


	$(".signInIdContextualHelp").click(function(){
		var showstate = $(this).attr("show")
		if(showstate == "1" ){
			$(this).attr("show","0");
			$(this).css({
				"background-image":'url("css/images/helpIconOpen.png")'
			});
			$(this).find(".signInIdContextualHelpHide").show();
			$(this).find(".signInIdContextualHelpHide2").show();
		}
		else{
			$(this).attr("show","1");
			$(this).css({
				"background-image":""
			});
			$(this).find(".signInIdContextualHelpHide").hide();
			$(this).find(".signInIdContextualHelpHide2").hide();
		}
	});




	//$(".notificationDescription").click(function(){
	//	var choosedstate = $(this).attr("choosed")
	//	if(choosedstate == "0"){
	//		$(this).attr("choosed","1");
	//	}
	//	else{
	//		$(this).attr("choosed","0");
	//	}
	//	alert("choosedstate");
	//});




	$("#createAccountButton").click(function(){
		var currcheck = $("#noteA").is(':checked');
		var currcheck2 = $("#noteB").is(':checked');
		var yan1 = $("#hide1").html();
		var yan2 = $("#hide2").html();
		var yan3 = $("#hide3").html();
		var yan4 = $("#hide4").html();
		
		
			if(yan1 == "通过"){
				if(yan2 == "通过"){
					if(yan3 == "通过"){
						if(yan4 == "通过"){
							if(currcheck == true && currcheck2 == true){
								document.getElementById('createHide').innerText = "";
								$("#createHide").html("");
								alert("注册成功！");
							}
							else{
								document.getElementById('createHide').innerText = "请先阅读条款！";
			
							}
						}
						else{
							$("#createHide").html("请确认验证码！");
						}
					}
					else{
						$("#createHide").html("请确认两次输入密码是否一样！");
					}
				}
				else{
					$("#createHide").html("请确认密码是否输入或格式是否正确！");
				}	
			}
			else{
				$("#createHide").html("请确认登录ID是否输入或格式是否正确！");
			}
		
	});


	$(".recaptcha_new_challenge1").click(function(){
		suishu();
	});



	$("#recaptcha_response_field").blur(function(){

		duibi();
	});



	$(".recaptcha_new_challenge1").click(function(){
		showFlashImage();
	});




});

	

function isEmail() {
	    
    var strEmail=document.getElementById("account_loginNameFieldInput").value; 

    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)   
    {   
    		$("#hide1").html("通过");
            document.getElementById('hiddensignIninfo').innerText = "";  
            b = true;  
            return true;   
    }else{   
            document.getElementById('hiddensignIninfo').innerText = "邮箱格式错误！";  
            $("#hide1").html("不通过");
            b = false;  
            return false;   
    }

}



function setColor() {
	var t = document.getElementById("year"); 
	T=t.options[t.selectedIndex].value;
	
}


function setColor2() {
	var t2 = document.getElementById("month"); 
	T2=t2.options[t2.selectedIndex].value;
	
}
            
    	
function setColor3() {
	var t3 = document.getElementById("day"); 
	T3=t3.options[t3.selectedIndex].value;
	
}


function setColor4() {
	var t4 = document.getElementById("reg_Country"); 
	T4=t4.options[t4.selectedIndex].value;
	
}








function tishi(){
	var str=document.getElementById("account_password").value;
	
	if(str.length<6){
		
		document.getElementById('PasswordTishi').innerText = "对不起，您的密码小于六位!";
		$("#hide2").html("不通过");
  		return false;
	}
	else{
		document.getElementById('PasswordTishi').innerText = "";
		$("#hide2").html("通过");
		return true;
	}
}




function jianyan(str){
	var str2=document.getElementById("confirmPasswordField").value;
	if(str2 != str){
		document.getElementById('PasswordJianyan').innerText = "两次输入的密码不同!"; 
		$("#hide3").html("不通过");
	}
	else{
		document.getElementById('PasswordJianyan').innerText = "";
		$("#hide3").html("通过");	
	}
}


function duibi(){
	//var str3=document.getElementById("recaptcha_Pic").value;
	var str5 = $("#sA").html();
	var str6 = $("#sB").html();
	var str7 = $("#sC").html();
	var str8 = $("#sD").html();
	var str9 = 1000*str5+100*str6+10*str7+1*str8;
	
	var str4=document.getElementById("recaptcha_response_field").value;
	if(str4 != str9){
		document.getElementById('Infohide').innerText = "验证码错误！"; 
		$("#hide4").html("不通过");
	}
	else{
		document.getElementById('Infohide').innerText = "";
		$("#hide4").html("通过");	
	}
}
	





//$(document).ready(function(){
//	var number = Math.random();
//	number = Math.ceil(number * 8999 + 1000); 
//	$("#recaptcha_Pic").html(number);
//});



//function suishu(){
//	var number = Math.random();
//	number = Math.ceil(number * 8999 + 1000); 
//	$("#recaptcha_Pic").html(number);
//}


$(document).ready(function(){
	var number = Math.random();
	number = Math.ceil(number*9);
	var numberB = Math.random();
	numberB = Math.ceil(numberB*9);
	var numberC = Math.random();
	numberC = Math.ceil(numberC*9);
	var numberD = Math.random();
	numberD = Math.ceil(numberD*9);
	$("#sA").html(number);
	$("#sB").html(numberB);
	$("#sC").html(numberC);
	$("#sD").html(numberD);
});

function suishu(){
	var number = Math.random();
	number = Math.ceil(number*9);
	var numberB = Math.random();
	numberB = Math.ceil(numberB*9);
	var numberC = Math.random();
	numberC = Math.ceil(numberC*9);
	var numberD = Math.random();
	numberD = Math.ceil(numberD*9);
	$("#sA").html(number);
	$("#sB").html(numberB);
	$("#sC").html(numberC);
	$("#sD").html(numberD);
}







var currIndex = 1;

var picAddress=new Array('url("images/1.gif")',
		'url("images/2.gif")',
		'url("images/3.gif")',
		'url("images/4.gif")',
		'url("images/5.gif")',
		'url("images/6.gif")',
		'url("images/7.gif")',
		'url("images/8.gif")',
		'url("images/9.gif")',
		'url("images/10.gif")',
		'url("images/11.gif")',
		'url("images/12.gif")'
		);


function showFlashImage(){
	$("#changePic").css("background-image",picAddress[currIndex]);
	currIndex++;
	if(currIndex ==13){
		currIndex=1;
	}
}