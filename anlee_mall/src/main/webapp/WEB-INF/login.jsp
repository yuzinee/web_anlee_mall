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
	  	<form id="form_userInfo"> <!-- form 요소를 div.form-elements 내부로 이동 -->
	    <div style="display: flex; height:50px">
          <input type="text" placeholder="id" id="inp_id" name="id" style="width: 70%;">
          <button id="btn_check" style="width: 30%">Check</button>
          <input type="text" id="inp_check" value="N" hidden>
        </div>
	    <div class="form-element">
	      <input type="password" placeholder="password" id="inp_password" name="password">
	    </div>
	    <div class="form-element">
	      <input type="password" placeholder="confirm password" id="inp_confirmPassword" name="confirmPassword">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="name" id="inp_name" name="name">
	    </div>
	    <div class="form-element">
	      <input type="number" placeholder="birthday(ex:20240101)" id="inp_birthday" name="birthday">
	    </div>
	    <div class="form-element">
	      <select id="sbx_gender" name="gender">
	        <option value="F">여자</option>
	        <option value="M">남자</option>
	      </select>
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="zip code" id="inp_zipCode" disabled name="zipCode">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="address" id="inp_address" disabled name="address">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="address detail" id="inp_addressDetail" name="addressDetail">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="phone(ex: 010-1234-1234)" id="inp_phone" name="phone">
	    </div>
	    </form>
	    <div class="form-element">
	      <button id="btn-sign">Sign Up</button>
	    </div>
	  </div>
	</div>
</body>
<script>
	/* page load */
	$(function(){
		$(".show-signin").trigger("click");	// 로그인 세팅
		css_script();						// css script
	});
	
	/* id onchange event */
	$("#inp_id").on('change', function(){
		$("#inp_check").val("N"); // 중복검사여부 "N"으로 변경
	});
	
	/* check click event */
	$("#btn_check").click(function(){
		// 아이디 유효성 검사
		if(!com_isAlphanumeric($("#inp_id").val().trim())){
			alert("아이디는 알파벳과 숫자만 입력 가능합니다.");
			$("#inp_id").focus();
			
			return false;
		};
		
		if($("#inp_id").val().trim() == ""){
			alert("아이디를 입력해 주세요.");
			
			return false;
		};
		
		// 아이디 중복 검사
		var params = {
			"queryId"	: "loginDAO.selectId"	// 쿼리ID
		  , "id"		: $("#inp_id").val()	// ID
		}
		
		com_selectList(params, function(result){
			if(result.length == 0){
				alert("사용 가능한 아이디입니다.");
				$("#inp_check").val("Y");  // 중복검사여부 "Y"로 변경
			} else{
				alert("다른 ID를 사용해 주세요.");
			}
		});
	});
	
	/* sign click event */
	$("#btn-sign").click(function(){
		// 회원가입
		if($("#btn-sign").text() == "Sign Up"){
			// 유효성 검사
			input_validation();
			
			var params = {
				"queryId"	: "loginDAO.insertUserInfo"
			  , "param"		: com_jsonParse($("#form_userInfo").serialize())
			}
			
			$.ajax({
			    url: "/login/insert",
			    type: "POST",
			    contentType: "application/json",
			    data: JSON.stringify(params),
			    success: function (result) {
			    	alert("회원가입이 완료되었습니다.");
			    },
			    error: function (result) {
			        alert("error");
			    }
			});
		}
	});
</script>
</html>