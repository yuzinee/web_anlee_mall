<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
</head>
<body>
	<h1>Login</h1>
</body>
<script>
	var param = {
		"queryId" : ""
	}
	
	$.ajax({
	    url: "/test/selectOne",
	    type: "POST",
	    contentType: "application/json",
	    data: JSON.stringify(param),
	    success: function (responseData) {
	
			// callback 함수가 있을 경우 함수 실행
			if(callbackFun != undefined){
				callbackFun(responseData);
			}
	    },
	    error: function (responseData) {
	        alert("error");
	    }
	});
</script>
</html>