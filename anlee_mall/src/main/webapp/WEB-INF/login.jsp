<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/login.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="/js/common.js"></script>
<script src="/js/common_validation.js"></script>
<script src="/js/login.js"></script>
<title>Login</title>
</head>
<body>
	<div class="form signup">
	  <div class="form-header">
	    <div class="show-signup">Sign Up</div>
	    <div class="show-signin">Sign In</div>
	    <div class="show-reset">Reset</div>
	  </div>
	  <div class="arrow"></div>
	  <div class="form-elements">
	    <div class="form-element">
	      <input type="text" placeholder="id" id="inp_id">
	    </div>
	    <div class="form-element">
	      <input type="password" placeholder="password" id="inp_password">
	    </div>
	    <div class="form-element">
	      <input type="password" placeholder="confirm password" id="inp_confirmPassword">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="name" id="inp_name">
	    </div>
	    <div class="form-element">
	      <input type="number" placeholder="birthday(ex:20240101)" id="inp_birthday">
	    </div>
	    <div class="form-element">
	      <select id="sbx_gender">
	        <option value="F">여자</option>
	        <option value="M">남자</option>
	      </select>
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="zip code" id="inp_zipCode" disabled>
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="address" id="inp_address" disabled>
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="address detail" id="inp_addressDetail">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="phone(ex: 010-1234-1234)" id="inp_phone">
	    </div>
	    <div class="form-element">
	      <button id="submit-btn">Sign Up</button>
	    </div>
	  </div>
	</div>
</body>
<script>
	/* 페이지 로드 */
	$(function(){
// 		$(".show-signin").trigger("click");
		css_script();
	});
	
	/* 버튼 클릭 이벤트 */
	$("#submit-btn").click(function(){
		// 회원가입
		if($("#submit-btn").text() == "Sign Up"){
			// 유효성 검사
// 			input_validation();
			
			var params = {
				"queryId"	: "loginDAO.insertUserInfo"
			  , "param"		:$(".form-elements").serialize();
			}
			
			com_insert(params, function(){
				
			})
		}
	});
</script>
</html>