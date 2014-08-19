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

	

	







});

	

function isEmail() {
	    
    var strEmail=document.getElementById("account_loginNameFieldInput").value; 

    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)   
    {   
            document.getElementById('hiddensignIninfo').innerText = "";  
            b = true;  
            return true;   
    }else{   
            document.getElementById('hiddensignIninfo').innerText = "邮箱格式错误！";  
            document.getElementById('account_loginNameFieldInput').innerText = "";
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
  		return false;
	}
	else{
		document.getElementById('PasswordTishi').innerText = "";
		return true;
	}
}




function jianyan(str){
	var str2=document.getElementById("confirmPasswordField").value;
	if(str2 != str){
		document.getElementById('PasswordJianyan').innerText = "两次输入的密码不同!"; 
	}
	else{
		document.getElementById('PasswordJianyan').innerText = "";	
	}
}
	

