<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="/css/manage_product_insert.css">
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/common.js"></script>
<script src="/js/common_validation.js"></script>
<!-- <script src="/js/manage_product_info.js"></script> -->
<title>Manage Product Search</title>
</head>
<body>
	<div class="card card-raised mb-5">
		<div class="card-body p-4">
			<!-- Simple DataTables example-->
			<div
				class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
				<div class="datatable-top">
					<div class="datatable-dropdown">
						<label> <select class="datatable-selector">
							<option value="5">5</option>
							<option value="10" selected="">10</option>
							<option value="15">15</option>
							<option value="20">20</option>
							<option value="25">25</option></select> entries per page
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
					<div class="datatable-info">Showing 1 to 10 of 100 entries</div>
					<nav class="datatable-pagination">
						<ul class="datatable-pagination-list">
							<li class="datatable-pagination-list-item datatable-hidden datatable-disabled">
								<a data-page="1" class="datatable-pagination-list-item-link">‹</a>
							</li>
							<li class="datatable-pagination-list-item datatable-active">
								<a data-page="1" class="datatable-pagination-list-item-link">1</a>
							</li>
							<li class="datatable-pagination-list-item">
								<a data-page="2" class="datatable-pagination-list-item-link">2</a>
							</li>
							<li class="datatable-pagination-list-item">
								<a data-page="3" class="datatable-pagination-list-item-link">3</a>
							</li>
							<li class="datatable-pagination-list-item">
								<a data-page="4" class="datatable-pagination-list-item-link">4</a>
							</li>
							<li class="datatable-pagination-list-item">
								<a data-page="2" class="datatable-pagination-list-item-link">›</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</body>
<script>
	var userId = '<%=(String) session.getAttribute("userId")%>';
	
	$(document).ready(function(){
		params = {
			"queryId" : "manageProductInfoDAO.selectProduct"
		  , "userId"  : userId
		}
		
		com_selectList(params, function(result){
			var html = "";
			
			for(var i=0; i<result.length; i++){
				html += "<tr data-index='0' onclick='tr_product_onclick("+ result[i].PRDCT_SN +")'>";
				html += "<td>"+ result[i].PRDCT_NM +"</td>";
				html += "<td>"+ result[i].PRDCT_DTLS +"</td>";
				html += "<td>"+ result[i].PRDCT_STK +"</td>";
				html += "<td>"+ price_format(result[i].PRDCT_PRCS) +"</td>";
				
				if(result[i].DISC_AMNT == "0" && result[i].DISC_PER == "0"){
				    html += "<td><span class='badge bg-success'>없음</span></td>";
				} else if (result[i].DISC_AMNT != "0" && result[i].DISC_PER == "0"){
				    html += "<td><span class='badge bg-primary'>% 할인</span></td>";
				} else if (result[i].DISC_AMNT == "0" && result[i].DISC_PER != "0"){
				    html += "<td><span class='badge bg-info'>금액 할인</span></td>";
				}
				
				html += "</tr>";
			}
			
			$("#product_list").html(html);
		});
	});
	
	/* 가격 format 지정 */
	function price_format(price){
		return "₩" + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	
	/* tr 클릭 */
	function tr_product_onclick(prdctSn){
		window.prdctSn = prdctSn; // 상품 일련번호
		
		// 상세정보 화면으로 이동
	    var url = "/manage_product_detail";
	    $("#layoutSidenav_content").load(url);
	}
</script>
</html>