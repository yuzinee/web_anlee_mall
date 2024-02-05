	/* 유효성 검사 */
	function input_validation(){
		var inputs = document.querySelectorAll('.form-element input');

		// 빈 input check
		for (var i = 0; i < inputs.length; i++) {
		  	if (inputs[i].value.trim() === '') {
				alert("모든 정보를 입력해 주세요.");
			    inputs[i].focus();
			    
			    break;
			}
		}
		
		// 아이디 check
		if(!com_isAlphanumeric($("#inp_id").val().trim())){
			alert("아이디는 알파벳과 숫자만 입력 가능합니다.");
			$("#inp_id").focus();
			
			return false;
		};
		
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
	}
	
	// kakao 주소 api
	$("#inp_addressDetail").click(function() {
		new daum.Postcode({
	        oncomplete: function(data) {
	        	$("#inp_zipCode").val(data.zonecode);	// 우편번호
	        	$("#inp_address").val(data.address);	// 주소
	        	$("#inp_addressDetail").focus();		// 상세주소
	        }
	    }).open();
	});
	
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
			  document.getElementById("submit-btn").innerText = "Sign Up";
		});
		
		document.getElementsByClassName("show-signin")[0].addEventListener("click",function(){
			  let form = document.getElementsByClassName("form")[0];
			  resetClass(form, "signup");
			  resetClass(form, "reset");
			  form.classList.add("signin");
			  document.getElementById("submit-btn").innerText = "Sign In";
		});
		
		document.getElementsByClassName("show-reset")[0].addEventListener("click",function(){
			  let form = document.getElementsByClassName("form")[0];
			  resetClass(form, "signup");
			  resetClass(form, "signin");
			  form.classList.add("reset");
			  document.getElementById("submit-btn").innerText = "Reset password";
		});
	}