	
	// 단건 조회
	function com_selectOne(param, callbackFun) {	
	
		// 쿼리 ID가 생략되었을 경우
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
			
		$.ajax({
		    url: "/main/selectOne",
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
	}
	
	// 리스트 조회
	function com_selectList(param, callbackFun) {	
	
		// 쿼리 ID가 생략되었을 경우
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/main/selectList",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (responseData) {

				// callback 함수가 있을 경우 함수 실행
				if(callbackFun != undefined){
					callbackFun(responseData);
				}
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 등록
	function com_insert(param, callbackFun) {	
	
		// 쿼리 ID가 생략되었을 경우
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/main/insert",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (responseData) {

				// callback 함수가 있을 경우 함수 실행
				if(callbackFun != undefined){
					callbackFun(responseData);
				}
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 수정
	function com_update(param, callbackFun) {
	
		// 쿼리 ID가 생략되었을 경우	
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/main/update",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (responseData) {

				// callback 함수가 있을 경우 함수 실행
				if(callbackFun != undefined){
					callbackFun(responseData);
				}
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 삭제
	function com_delete(param, callbackFun) {	
	
		// 쿼리 ID가 생략되었을 경우
		if(param.length < 1){
			alert("쿼리 ID를 입력해 주세요.");
			
			return false;
		}
		
		$.ajax({
		    url: "/main/delete",
		    type: "POST",
		    contentType: "application/json",
		    data: JSON.stringify(param),
		    success: function (responseData) {

				// callback 함수가 있을 경우 함수 실행
				if(callbackFun != undefined){
					callbackFun(responseData);
				}
		    },
		    error: function (result) {
		        alert("error");
		    }
		});
	}
	
	// 파라미터 받는 함수(GET)
	function com_getParameter(key) {
		// 현재 URL "?" 이후 부분
	    var urlParams = new URLSearchParams(window.location.search);
	    
	    // key에 해당하는 값 가져오기
	    var paramValue = urlParams.get(key);

	    return paramValue;
	}
	
	function clickTest() {
		alert('클릭성공');
	}
	