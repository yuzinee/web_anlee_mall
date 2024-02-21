<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
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
	    <div class="show-signup" id="btn_signUp" onclick="btn_signUp_onclick()">Sign Up</div>
	    <div class="show-signin" id="btn_signIn" onclick="btn_signIn_onclick()">Sign In</div>
	    <div class="show-reset" id="btn_reset" onclick="btn_reset_onclick()">Reset</div>
	  </div>
	  <div class="arrow"></div>
	  <div class="form-elements">
	    <div style="display: flex; height:50px">
          <input type="text" placeholder="id" id="inp_id" name="id" onchange="inp_id_onchange()" style="width: 70%;" autocomplete="new-password">
          <button type="button" id="btn_check" onclick="btn_check_onclick()" style="width: 30%">Check</button>
          <input type="text" id="inp_check" value="N" hidden>
        </div>
	    <div class="form-element">
	      <input type="password" placeholder="password" id="inp_password" name="password" autocomplete="new-password">
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
	      <input type="text" placeholder="zip code" id="inp_zipCode" name="zipCode" onclick="kakao_api()" readOnly>
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="address" id="inp_address" name="address" onclick="kakao_api()" readOnly>
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="address detail" id="inp_addressDetail" name="addressDetail">
	    </div>
	    <div class="form-element">
	      <input type="text" placeholder="phone(ex: 010-1234-1234)" id="inp_phone" name="phone">
	    </div>
	   
	      
	
	    <div class="form-element">
	      <button id="btn_sign" onclick="btn_sign_onclick()">Sign Up</button>
	    </div>
	  </div>
	</div>
</body>
<script>
	

</script>
</html>