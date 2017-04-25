
var int1 = $("#int1").val();
var	int2= $("#int2").val();
var request=new XMLHttpRequest();
	request.open("GET","carrots-admin-ajax/a/login")//true是默认的
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	/*request.send("neme=+int1&pwd=+int2");*/
$(".btn").click=function() 
	{	
		if (request.readyState===4&&request.status===200) {
			request.requestText
		}	
	}