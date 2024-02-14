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
						<label> 
							<select class="datatable-selector" id="sbx_limit" onchange="search_product_list(0, parseInt(this.value))">
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
	var sbxLimitVal = parseInt($("#sbx_limit").val()); // 페이징 수
	
	$(document).ready(function(){
		search_product_list(0, sbxLimitVal);
	});
	
	function search_product_list(offset, limit){
		// 리스트 조회
		params = {
			"queryId" : "manageProductInfoDAO.selectProduct"
		  , "userId"  : userId
		  , "limit": limit
		  , "offset": offset
		}
		
		com_selectList(params, function(result){
			var htmlList = "";
			var htmlPaging = "";
			
			// 리스트 추가
			for(var i=0; i<result.length; i++){
				htmlList += "<tr data-index='0' onclick='tr_product_onclick("+ result[i].PRDCT_SN +")'>";
				htmlList += "<td>"+ result[i].PRDCT_NM +"</td>";
				htmlList += "<td>"+ result[i].PRDCT_DTLS +"</td>";
				htmlList += "<td>"+ result[i].PRDCT_STK +"</td>";
				htmlList += "<td>"+ price_format(result[i].PRDCT_PRCS) +"</td>";
				
				if(result[i].DISC_AMNT == "0" && result[i].DISC_PER == "0"){
				    htmlList += "<td><span class='badge bg-success'>없음</span></td>";
				} else if (result[i].DISC_AMNT != "0" && result[i].DISC_PER == "0"){
				    htmlList += "<td><span class='badge bg-primary'>금액 할인</span></td>";
				} else if (result[i].DISC_AMNT == "0" && result[i].DISC_PER != "0"){
				    htmlList += "<td><span class='badge bg-info'>% 할인</span></td>";
				}
				
				htmlList += "</tr>";
			}
			
			$("#product_list").html(htmlList);
			
			// 페이징
			htmlPaging += "<li class='datatable-pagination-list-item datatable-hidden datatable-disabled'>";
			htmlPaging += "<a data-page='1' class='datatable-pagination-list-item-link' onclick='search_product_list(0," + limit + ")'><</a></li>";
			
			var pagingNum = 0;

			if(result[0].count%limit == 0){
				pagingNum = result[0].count / limit;
			} else {
				pagingNum = result[0].count / limit + 1;
			}
			
			for(var i=1; i<=pagingNum; i++){
			    htmlPaging += "<li class='datatable-pagination-list-item datatable-active'>";
			    htmlPaging += "<a data-page="+ i +" class='datatable-pagination-list-item-link' onclick='search_product_list("+ (i-1) +"," + limit + ")'>"+ i +"</a></li>";
			}

			htmlPaging += "<li class='datatable-pagination-list-item'>";
			htmlPaging += "<a data-page='2' class='datatable-pagination-list-item-link' onclick='search_product_list("+ (pagingNum-1) +"," + limit + ")'>></a></li>";
			
			$("#ul_paging").html(htmlPaging);
		});
	}
	
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