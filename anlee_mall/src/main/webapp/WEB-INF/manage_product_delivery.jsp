<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/common.js"></script>
<script src="/js/manage_product_delivery.js"></script>
<title>Manage Product Search</title>
</head>
<body>
	<div class="card card-raised mb-5">
		<div class="card-body p-4">
			<div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
				<div class="datatable-top">
					<div class="datatable-dropdown">
						<label> 
							<select class="datatable-selector" id="sbx_limit" onchange="search_delivery_list(0, parseInt(this.value))" style="cursor: pointer">
								<option value="1">1</option>
								<option value="10" selected>10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
							</select> 테이블 행을 클릭하면 배송현황을 확인할 수 있습니다.
						</label>
					</div>
					<div class="datatable-search">
						<label> 
							<select class="datatable-selector" id="sbx_status" onchange="search_delivery_list(0, 10)" style="cursor: pointer">
								<option value="all">전체</option>
								<option value="0">배송준비중</option>
								<option value="1">배송중</option>
								<option value="2">배송완료</option>
							</select>
						</label>
					</div>
				</div>
				<div class="datatable-container">
					<table id="datatablesSimple" class="datatable-table">
						<thead>
							<tr>
								<th data-sortable="true" style="width: 14%;"><a href="#" class="datatable-sorter">운송장번호</a></th>
								<th data-sortable="true" style="width: 18%;"><a href="#" class="datatable-sorter">상품명</a></th>
								<th data-sortable="true" style="width: 36%;"><a href="#" class="datatable-sorter">주소</a></th>
								<th data-sortable="true" style="width: 16%;"><a href="#" class="datatable-sorter">연락처</a></th>
								<th data-sortable="true" style="width: 16%;"><a href="#" class="datatable-sorter">예상배송일</a></th>
							</tr>
						</thead>
						<tbody id="delivery_list">
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
	</div>
</body>
<script>
	var userId = '<%=(String) session.getAttribute("userId")%>';
</script>
</html>