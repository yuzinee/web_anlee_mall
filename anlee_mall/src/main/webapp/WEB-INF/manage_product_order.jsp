<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<script src="/js/manage_product_order.js"></script>
<title>Manage Product Search</title>
</head>
<body>
	<div class="card card-raised mb-5" style="padding: 30px 30px 30px 30px">
		<div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
			<div class="datatable-container">
				<table id="datatablesSimple" class="datatable-table" style="margin-top:10px">
					<thead>
						<tr>
							<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">상품명</a></th>
							<th data-sortable="true" style="width: 32%;"><a href="#" class="datatable-sorter">구매자</a></th>
							<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">수량</a></th>
							<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">결제금액</a></th>
							<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">상품상태</a></th>
						</tr>
					</thead>
					<tbody id="order_list">
						<tr data-index='0' id="order_list1" onclick="order_list_onclick(1)">
							<td id="order_name1">　</td>
							<td id="user_name1"> </td>
							<td id="order_count1"> </td>
							<td id="result_amount1"> </td>
							<td id="order_manage1"></td>
							<input id="order_sn1" hidden/>
						</tr>
						<tr data-index='0' id="order_list2" onclick="order_list_onclick(2)">
							<td id="order_name2">　</td>
							<td id="user_name2"></td>
							<td id="order_count2"></td>
							<td id="result_amount2"></td>
							<td id="order_manage2"></td>
							<input id="order_sn2" hidden/>
						</tr>
						<tr data-index='0' id="order_list3" onclick="order_list_onclick(3)">
							<td id="order_name3">　</td>
							<td id="user_name3"></td>
							<td id="order_count3"></td>
							<td id="result_amount3"></td>
							<td id="order_manage3"></td>
							<input id="order_sn3" hidden/>
						</tr>
						<tr data-index='0' id="order_list4" onclick="order_list_onclick(4)">
							<td id="order_name4">　</td>
							<td id="user_name4"></td>
							<td id="order_count4"></td>
							<td id="result_amount4"></td>
							<td id="order_manage4"></td>
							<input id="order_sn4" hidden/>
						</tr>
						<tr data-index='0' id="order_list5" onclick="order_list_onclick(5)">
							<td id="order_name5">　</td>
							<td id="user_name5"></td>
							<td id="order_count5"></td>
							<td id="result_amount5"></td>
							<td id="order_manage5"></td>
							<input id="order_sn5" hidden/>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="datatable-bottom">
				<nav class="datatable-pagination">
					<ul class="datatable-pagination-list" id="ul_paging">	
					</ul>
				</nav>
			</div>
		</div>
	</div>
    <div style="padding: 30px 30px 30px 30px">
		<div class="form-row">
		  <div class="form-group">
			<label for="inp_name">주문번호 :</label>
			<input type="text" name="order_sn" id="order_sn" readOnly>
		  </div>
		  <div class="form-group">
			<label for="inp_name">주문자 ID :</label>
			<input type="text" name="user_name" id="user_id" readOnly>
		  </div>
		  <div class="form-group">
			<label for="inp_name">주문자 이름 :</label>
			<input type="text" name="user_nm" id="user_nm" readOnly>
		  </div>
		</div>
		<div class="form-row">
		  <div class="form-group">
			<label for="inp_code">상품명 :</label>
			<input type="text" name="product_nm" id="product_nm" readOnly>
		  </div>
		  <div class="form-group">
			<label for="inp_price">수량 :</label>
			<input type="number" name="product_cnt" id="product_cnt" readOnly>
		  </div>
		  <div class="form-group">
			<label for="inp_inventory">결제금액 :</label>
			<input type="text" name="product_amnt" id="product_amnt" readOnly>
		  </div>
		</div>
		<div class="form-group">
		  <label for="inp_detail">주소 :</label>
		  <input type="text" name="user_adr" id="user_adr" readOnly>
		</div>
		<div class="form-submit">
		  <input type="button" value="주문취소" class="submit" name="reset" id="btn_cancel" onclick="btn_cancel_onclick()">
		  <input type="button" value="주문접수" class="submit" name="submit" id="btn_accept" onclick="btn_accept_onclick()">
		</div>
    </div>
</body>
<script>
	var userId = '<%=(String) session.getAttribute("userId")%>';
</script>
</html>