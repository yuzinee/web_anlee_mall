	$(document).ready(function(){
		// 대분류 조회
		var param = {
			queryId : "manageProductDetailDAO.selectCategory1"
		}
		
		com_selectList(param, function(result){
			var html = "<option value=''>선택</option>"

			for(var i=0; i<result.length; i++){
				html += "<option value='" + result[i].TYPE_SN + "'>" + result[i].TYPE_NM + "</option>";
	        }
			
			$("#sbx_category1").html(html);
			
			if(window.prdctSn != undefined && window.prdctSn != ""){
				$("#btn_update").prop("hidden", false);
				$("#btn_delete").prop("hidden", false);
				$("#btn_insert").prop("hidden", true);
				
				var params = {
					"queryId" : "manageProductDetailDAO.selectDetail"
				  , "prdctSn" : window.prdctSn.toString()
				}
				
				com_selectOne(params, function(result){
					result_set(result);
				})
			}
		})
	});
		
	/* 카테고리 대분류ㆍ중분류 onchange */
	function sbx_category_onchane(sbx){
		var sbxId = "sbx_category" + (parseInt(sbx.substring(sbx.length - 1)) + 1); // 다음 sbxId
	
		// 중분류ㆍ소분류 조회
		var params = {
			queryId : "manageProductDetailDAO.selectCategory23"	// 쿼리ID
		  , typeSn	: $("#"+sbx).val()							// 카테고리SN
		}
		
		com_selectList(params, function(result){
			var html = "<option value=''>선택</option>"

			for(var i=0; i<result.length; i++){
				html += "<option value='" + result[i].TYPE_SN + "'>" + result[i].TYPE_NM + "</option>";
	        }
	        
			$("#" + sbxId).html(html);
		})
	}

	/* 할인여부 onchange(0:금액, 1:퍼센트, N:없음) */
	function sbx_discount_onchange(e){
		// 할인상세 속성 변경
		if(e.value == "0"){
			$("#inp_discount").val("");
			$("#inp_discount").prop('readOnly', false);
			$("#inp_discount").attr('placeholder', '₩');
		} else if(e.value == "1"){
			$("#inp_discount").val("");
			$("#inp_discount").prop('readOnly', false);
			$("#inp_discount").attr('placeholder', '%');
		}  else if(e.value == "N"){
			$("#inp_discount").val("");
			$("#inp_discount").prop('readOnly', true);
			$("#inp_discount").attr('placeholder', '');
		}
	}
	
	/* 초기화 click */
	function btn_reset_reset(){
	    $('#form_product')[0].reset(); 						// 폼 초기화
	    $('#sbx_discount').val('N'); 						// 할인여부 선택 초기화
	    $('#inp_discount').prop('readOnly', true).val(''); 	// 할인상세 초기화 및 비활성화
	}
	
	/* 상품등록 click */
	function btn_insert_onclick(){
		var params = {
			"queryId" 	: "manageProductDetailDAO.insertProduct"				// 쿼리ID
		  , "param"		: formToJson(document.getElementById('form_product'))	// 상품정보
		  , "userId"	: userId												// 사용자ID
		}
		
		com_insert(params, function(){
			alert("상품이 등록되었습니다.");
		});
	}
	
	/* 카테고리 상세조회 결과 세팅 */
	function result_set(info){
		$("#inp_name").val(info.PRDCT_NM);
		$("#inp_code").val(info.PRDCT_CD);
		$("#inp_code").val(info.PRDCT_CD);
		$("#sbx_category1").val(info.TYPE_SN.substring(0, 1));
		$("#inp_price").val(info.PRDCT_PRCS);
		$("#inp_inventory").val(info.PRDCT_STK);
		$("#inp_detail").val(info.PRDCT_DTLS);
					
		// 카테고리 중분류 세팅
		var params = {
			queryId : "manageProductDetailDAO.selectCategory23"	// 쿼리ID
		  , typeSn	: info.TYPE_SN.substring(0, 1)			// 카테고리SN
		}

		com_selectList(params, function(result){
			var html = "<option value=''>선택</option>"
			
			for(var i=0; i<result.length; i++){
				html += "<option value='" + result[i].TYPE_SN + "'>" + result[i].TYPE_NM + "</option>";
	        }
	        
			$("#sbx_category2").html(html);
			$("#sbx_category2").val(info.TYPE_SN.match(/^(\d+_\d+)_/)[1]);
			
			// 카테고리 소분류 세팅
			var params = {
				queryId : "manageProductDetailDAO.selectCategory23"	// 쿼리ID
			  , typeSn	: info.TYPE_SN.match(/^(\d+_\d+)_/)[1]									// 카테고리SN
			}
			
			com_selectList(params, function(result){
				var html = "<option value=''>선택</option>"
	
				for(var i=0; i<result.length; i++){
					html += "<option value='" + result[i].TYPE_SN + "'>" + result[i].TYPE_NM + "</option>";
		        }
		        
				$("#sbx_category3").html(html);
				$("#sbx_category3").val(info.TYPE_SN);
			})
		})
		
		console.log(info.DISC_AMNT);
		console.log(info.DISC_PER);
		
		if(info.DISC_AMNT != 0 && info.DISC_PER == 0){
			$("#sbx_discount").val(0);
			$("#inp_discount").val(info.DISC_AMNT);
		} else if(info.DISC_AMNT == 0 && info.DISC_PER != 0){
			$("#sbx_discount").val(1);
			$("#inp_discount").val(info.DISC_PER);
		} else {
			$("#sbx_discount").val("N");
		}
	}