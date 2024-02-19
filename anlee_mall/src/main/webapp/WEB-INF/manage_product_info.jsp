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
<script src="/js/common_validation.js"></script>
<script src="/js/manage_product_info.js"></script>
<title>Manage Product Search</title>
</head>
<body>
	<div class="card card-raised mb-5">
		<div class="card-body p-4">
			<div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
				<div class="datatable-top">
					<div class="datatable-dropdown">
						<label> 
							<select class="datatable-selector" id="sbx_limit" onchange="search_product_list(0, parseInt(this.value))" style="cursor: pointer">
								<option value="1">1</option>
								<option value="10" selected>10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
							</select> entries per page
						</label>
					</div>
					<div class="datatable-search">
						<input class="datatable-input" placeholder="Search..." type="search" title="Search within table" aria-controls="datatablesSimple">
					</div>
				</div>
				<div class="datatable-container">
					<table id="datatablesSimple" class="datatable-table">
						<thead>
							<tr>
								<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">상품명</a></th>
								<th data-sortable="true" style="width: 32%;"><a href="#" class="datatable-sorter">상세설명</a></th>
								<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">재고수</a></th>
								<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">판매가격</a></th>
								<th data-sortable="true" style="width: 17%;"><a href="#" class="datatable-sorter">할인정보</a></th>
							</tr>
						</thead>
						<tbody id="product_list">
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