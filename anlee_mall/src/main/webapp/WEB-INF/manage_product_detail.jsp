<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="/css/manage_product_detail.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/common.js"></script>
<script src="/js/common_validation.js"></script>
<script src="/js/manage_product_detail.js"></script>
<title>Manage Product Insert</title>
</head>
<body>
  <form method="POST" class="register-form" id="form_product">
	<h2>PRODUCT MANAGEMENT - 신규등록</h2>
	<div class="form-row">
	  <div class="form-group">
		<label for="inp_name">상품명 :</label>
		<input type="text" name="name" id="inp_name">
	  </div>
	  <div class="form-group">
		<label for="inp_code">모델코드 :</label>
		<input type="text" name="code" id="inp_code">
	  </div>
	</div>
	<div class="form-row">
	  <div class="form-group">
	    <label for="sbx_category1">카테고리 대분류 :</label>
	    <div class="form-select">
	      <select name="category1" id="sbx_category1" onchange="sbx_category_onchane(this.id)">
			<option value="">선택</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	  <div class="form-group">
	    <label for="sbx_category2">카테고리 중분류 :</label>
		<div class="form-select">
		  <select name="category2" id="sbx_category2" onchange="sbx_category_onchane(this.id)">
			<option value="">선택</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	  <div class="form-group">
	    <label for="sbx_category3">카테고리 소분류 :</label>
		<div class="form-select">
		  <select name="category3" id="sbx_category3">
			<option value="">선택</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	</div>
	<div class="form-row">
	  <div class="form-group">
		<label for="inp_price">판매가 :</label>
		<input type="number" name="price" id="inp_price">
	  </div>
	  <div class="form-group">
		<label for="inp_inventory">재고수량 :</label>
		<input type="number" name="inventory" id="inp_inventory">
	  </div>
	  <div class="form-group">
	    <label for="sbx_discount">할인여부 :</label>
		<div class="form-select">
		  <select name="discountType" id="sbx_discount" onchange="sbx_discount_onchange(this)">
			<option value="N">없음</option>
			<option value="0">₩</option>
			<option value="1">%</option>
	      </select>
	      <span class="select-icon"><i class="zmdi zmdi-chevron-down"></i></span>
	    </div>
	  </div>
	  <div class="form-group">
		<label for="inp_discount">할인상세 :</label>
		<input type="text" name="discount" id="inp_discount" readOnly>
	  </div>
	</div>
	<div class="form-group">
	  <label for="inp_detail">상세설명 :</label>
	  <input type="text" name="detail" id="inp_detail">
	</div>
	<div class="form-submit">
	  <input type="button" value="초기화" class="submit" name="reset" id="reset" onclick="btn_reset_onclick()">
	  <input type="button" value="상품수정" class="submit" name="submit" id="btn_update" onclick="btn_update_onclick()" hidden>
	  <input type="button" value="상품삭제" class="submit" name="submit" id="btn_delete" onclick="btn_delete_onclick()" hidden>
	  <input type="button" value="상품등록" class="submit" name="submit" id="btn_insert" onclick="btn_insert_onclick()">
	</div>
  </form>
</body>
<script>
	var userId = '<%=(String)session.getAttribute("userId")%>';
</script>
</html>