	/* page load */
	$(document).ready(function(){
		css_script();				// css script
		$("#btn_signIn").click(); 	// 로그인으로 세팅
	});
	
	/* btn_sign click */
	function btn_sign_onclick(){
		// Sign Up일 경우
		if($("#btn_sign").text() == "Sign Up"){
			sign_up();
		}
		
		// Sign In일 경우
		if($("#btn_sign").text() == "Sign In"){
			sign_in();
		}
	};
	
	/* 회원가입 */
	function sign_up(){
		// 유효성 검사
		if (!input_validation()) {

            return false;
        }
		
		// 회원 정보 insert
		var userInfo = {
			"id" : $("#inp_id").val()
		  , "password" : $("#inp_password").val()
		  , "name" : $("#inp_name").val()
		  , "birthday" : $("#inp_birthday").val()
		  , "gender" : $("#sbx_gender").val()
		  , "address" : $("#inp_address").val() + " " + $("#inp_addressDetail").val() + " (" + $("#inp_zipCode").val() + ")"
		  , "phone" : $("#inp_phone").val()
		}
		
		var param = {
			"queryId"	: "loginDAO.insertUserInfo"
		  , "param"		: userInfo
		}
		
		$.ajax({
		    url: "/login/insert",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (result) {
		    	alert("회원가입이 완료되었습니다.");
		    	$(".show-signin").click();
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	/* 로그인 */
	function sign_in(){				
		var param = {
			"queryId"	: "loginDAO.selectLogin"
		  ,	"id" : $("#inp_id").val()
		  , "password" : $("#inp_password").val()
		}

		$.ajax({
		    url: "/login/selectLogin",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (e) {
		    	if(e.result == "S"){
		    		if(e.USER_TYPE == 1){
		    			location.href="/manage_home";
		    		} else{
		    			location.href="/user_home";
		    		}
		    	} else{
		    		alert("아이디 또는 비밀번호를 확인해 주세요.");
		    	}
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	/* inp_id onchange */
	function inp_id_onchange(){
		$("#inp_check").val("N"); // 중복검사여부 "N"으로 변경
	}
	
	/* btn_check click */
	function btn_check_onclick(){
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
				$("#inp_check").val("Y"); // 중복검사여부 "Y"로 변경
			} else{
				alert("다른 ID를 사용해 주세요.");
			}
		});
	}

	/* 유효성 검사 */
	function input_validation(){
		var inputs = document.querySelectorAll('.form-element input');
		var inputCheck = 0;

		// 빈 input check
		for (var i = 0; i < inputs.length; i++) {
		  	if (inputs[i].value.trim() === '') {
			    inputCheck = i;
			}
		}
		
		if(inputCheck != 0){
			alert("모든 정보를 입력해 주세요.");
			inputs[inputCheck].focus();
			
			return false;
		}
		
		// 아이디 중복 check
		if($("#inp_check").val() == "N"){
			alert("아이디 중복 체크를 진행해주세요.");
			
			return false;
		}
		
		// 비밀번호 check
		if(!com_isValidAlphanumericSpecial($("#inp_password").val().trim())){
			alert("비밀번호는 8자 이상이어야 하며, 알파벳+숫자+특수문자가 포함되어야 합니다.");
			$("#inp_password").focus();
			
			return false;
		};
		
		if($("#inp_password").val().trim() != $("#inp_confirmPassword").val().trim()){
			alert("입력한 비밀번호가 일치하지 않습니다.");
			$("#inp_confirmPassword").focus();
			
			return false;
		}
		
		// 이름 check
		if(!com_isValidAlphaKorea($("#inp_name").val().trim())){
			alert("이름은 한글과 알파벳만 입력 가능합니다.");
			$("#inp_name").focus();
			
			return false;
		};

		// 전화번호 check
		if(!com_isValidPhoneNumber($("#inp_phone").val().trim())){
			alert("전화번호는 형식에 맞게 입력해주세요. (ex: 010-1111-1111)");
			$("#inp_phone").focus();
			
			return false;
		};
		
		return true;
	}
	
	//kakao 주소 api
	function kakao_api(){
		new daum.Postcode({
	        oncomplete: function(data) {
	        	$("#inp_zipCode").val(data.zonecode);	// 우편번호
	        	$("#inp_address").val(data.address);	// 주소
	        	$("#inp_addressDetail").focus();		// 상세주소
	        }
	    }).open();
	}
	
	/* css */
	function css_script(){
		function resetClass(element, classname){
			element.classList.remove(classname);
		}
		
		document.getElementsByClassName("show-signup")[0].addEventListener("click",function(){
		  	let form = document.getElementsByClassName("form")[0];
		    resetClass(form, "signin");
		    resetClass(form, "reset");
		    form.classList.add("signup");
		    document.getElementById("btn_sign").innerText = "Sign Up";
		});
		
		document.getElementsByClassName("show-signin")[0].addEventListener("click",function(){
			let form = document.getElementsByClassName("form")[0];
			resetClass(form, "signup");
			resetClass(form, "reset");
			form.classList.add("signin");
			document.getElementById("btn_sign").innerText = "Sign In";
		});
		
		document.getElementsByClassName("show-reset")[0].addEventListener("click",function(){
			let form = document.getElementsByClassName("form")[0];
			resetClass(form, "signup");
			resetClass(form, "signin");
			form.classList.add("reset");
			document.getElementById("btn_sign").innerText = "Reset password";
		});
	}
	
	function btn_signUp_onclick() {
		$("#inp_id").css("width", "70%");
		$("#btn_check").css("width", "30%");
		$("#btn_check").show();
	}
	
	function btn_signIn_onclick() {
		$("#inp_id").css("width", "100%");
		$("#btn_check").css("width", "0%");
		$("#btn_check").hide();
	}
	
	function btn_reset_onclick() {
		$("#inp_id").css("width", "100%");
		$("#btn_check").css("width", "0%");
		$("#btn_check").hide();
	}