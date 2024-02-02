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
</script>
</html>