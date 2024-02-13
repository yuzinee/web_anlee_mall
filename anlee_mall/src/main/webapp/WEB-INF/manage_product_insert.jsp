<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="/css/manage_product_insert.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/common.js"></script>
<script src="/js/common_validation.js"></script>
<!-- <script src="/js/manage_product_insert.js"></script> -->
<title>Manage Product Insert</title>
</head>
<body>
  <form method="POST" class="register-form" id="form_product">
	<h2>PRODUCT MANAGEMENT - 신규등록</h2>
	<div class="form-row">
	  <div class="form-group">
		<label for="inp_name">상품명 :</label>
		<input type="text" name="inp_name" id="inp_name">
	  </div>
	  <div class="form-group">
		<label for="inp_code">모델코드 :</label>
		<input type="text" name="inp_code" id="inp_code">
	  </div>
	</div>
	<div class="form-row">
	  <div class="form-group">
	    <label for="sbx_category1">카테고리 대분류 :</label>
	    <div class="form-select">
	      <select name="sbx_category1" id="sbx_category1" onchange="sbx_category_onchane(this)">
			<option value="N">선택</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	  <div class="form-group">
	    <label for="sbx_category2">카테고리 중분류 :</label>
		<div class="form-select">
		  <select name="sbx_category2" id="sbx_category2" onchange="sbx_category_onchane(this)">
			<option value="N">선택</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	  <div class="form-group">
	    <label for="sbx_category3">카테고리 소분류 :</label>
		<div class="form-select">
		  <select name="sbx_category3" id="sbx_category3">
			<option value="N">선택</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	</div>
	<div class="form-row">
	  <div class="form-group">
		<label for="inp_price">판매가 :</label>
		<input type="number" name="inp_price" id="inp_price">
	  </div>
	  <div class="form-group">
		<label for="inp_inventory">재고수량 :</label>
		<input type="number" name="inp_inventory" id="inp_inventory">
	  </div>
	  <div class="form-group">
	    <label for="sbx_discount">할인여부 :</label>
		<div class="form-select">
		  <select name="sbx_discount" id="sbx_discount" onchange="sbx_discount_onchange(this)">
			<option value="N">없음</option>
			<option value="0">금액 할인</option>
			<option value="1">% 할인</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	  <div class="form-group">
		<label for="inp_discount">할인상세 :</label>
		<input type="text" name="inp_discount" id="inp_discount" disabled>
	  </div>
	</div>
	<div class="form-group">
	  <label for="inp_detail">상세설명 :</label>
	  <input type="text" name="inp_detail" id="inp_detail">
	</div>
	<div class="form-submit">
	  <input type="button" value="초기화" class="submit" name="reset" id="reset" onclick="btn_reset_onclick()">
	  <input type="button" value="상품등록" class="submit" name="submit" id="btn_insert" onclick="btn_insert_onclick()">
	</div>
  </form>
</body>
<script>
	var userId = '<%=(String)session.getAttribute("userId")%>';

	$(document).ready(function(){
		// 대분류 조회
		var param = {
			queryId : "manageProductInsertDAO.selectCategory1"
		}
		
		com_selectList(param, function(result){
			var html = "<option value='N'>선택</option>"

			for(var i=0; i<result.length; i++){
				html += "<option value='" + result[i].TYPE_SN + "'>" + result[i].TYPE_NM + "</option>";
	        }
			
			$("#sbx_category1").html(html);
		})
	});
	
	/* 카테고리 대분류ㆍ중분류 onchange */
	function sbx_category_onchane(e){
		var sbxId = "sbx_category" + (parseInt(e.id.split("sbx_category")[1]) + 1); // 다음 sbxId
		
		// 중분류ㆍ소분류 조회
		var params = {
			queryId : "manageProductInsertDAO.selectCategory23"	// 쿼리ID
		  , typeSn	: e.value									// 카테고리SN
		}
		
		com_selectList(params, function(result){
			var html = "<option value='N'>선택</option>"

			for(var i=0; i<result.length; i++){
				html += "<option value='" + result[i].TYPE_SN + "'>" + result[i].TYPE_NM + "</option>";
	        }

			$("#" + sbxId).html(html);
		})
	}

	/* 할인여부 onchange(0:금액, 1:퍼센트, N:없음) */
	function sbx_discount_onchange(e){
		if(e.value == "0"){
			$("#inp_discount").prop('disabled', false);
			$("#inp_discount").attr('placeholder', '₩');
		} else if(e.value == "1"){
			$("#inp_discount").prop('disabled', false);
			$("#inp_discount").attr('placeholder', '%');
		}  else if(e.value == "N"){
			$("#inp_discount").prop('disabled', true);
			$("#inp_discount").attr('placeholder', '');
		}
	}
	
	/* 초기화 click */
	function btn_reset_reset(){
	    $('#form_product')[0].reset(); // 폼 초기화
	    $('#sbx_discount').val('N'); // 할인여부 선택 초기화
	    $('#inp_discount').prop('disabled', true).val(''); // 할인상세 초기화 및 비활성화
	}
	
	/* 상품등록 click */
	function btn_insert_onclick(){
		var params = {
			"queryId" 	: "manageProductInsertDAO.insertProduct"
		  , "param"		: formToJson(document.getElementById('form_product'))
		  , "userId"	: userId
		}
		
		console.log(params);
		
		com_insert(params, function(){
			
		});
	}
</script>
</html>