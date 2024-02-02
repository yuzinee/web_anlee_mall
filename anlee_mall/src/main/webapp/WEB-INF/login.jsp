<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/common.js"></script>
<title>Login</title>
</head>
<body>
	<h1>Login</h1>
</body>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		var param = {
			"queryId" : "loginDAO.selectUserSn"
		}
		
		com_selectOne(param, function(e){
			console.log("asdf" + e);
		})
	});
	
// 	function com_selectOne(param, callbackFun) {	
		
// 		// 쿼리 ID가 생략되었을 경우
// 		if(param.length < 1){
// 			alert("쿼리 ID를 입력해 주세요.");
			
// 			return false;
// 		}
			
// 		$.ajax({
// 		    url: "/main/selectOne",
// 		    type: "POST",
// 		    contentType: "application/json",
// 		    data: JSON.stringify(param),
// 		    success: function (responseData) {

// 				// callback 함수가 있을 경우 함수 실행
// 				if(callbackFun != undefined){
// 					callbackFun(responseData);
// 				}
// 		    },
// 		    error: function (responseData) {
// 		        alert("error");
// 		    }
// 		});
// 	}
</script>
</html>