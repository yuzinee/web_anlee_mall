	$(document).ready(function(){
		search_product_list(0, sbxLimitVal);
	});
	
	function search_product_list(offset, limit){
		var limit = 5;
		
		// 리스트 조회
		params = {
			"queryId" : "manageProductOrderDAO.selectOrder"
		  , "userId"  : userId
		  , "limit": limit
		  , "offset": offset
		}
		
		com_selectList(params, function(result){
			// 리스트 세팅
			for(var i=0; i<result.length; i++){
				$("#order_list"+(i+1)).css("cursor", "pointer");
				$("#order_name"+(i+1)).text(result[i].PRDCT_NM);
				$("#user_name"+(i+1)).text(result[i].USER_NM);
				$("#order_count"+(i+1)).text(result[i].ORDER_CNT);
				$("#result_amount"+(i+1)).text(com_priceFormat(result[i].RESULT_AMNT));
				$("#order_manage"+(i+1)).text("배송 준비중");
				$("#order_sn"+(i+1)).val(result[i].ORDER_SN);
			}
			
			// 페이징
			var htmlPaging = "";

			if(limit <= result[0].count){
				
				htmlPaging += "<li class='datatable-pagination-list-item datatable-hidden datatable-disabled' style='cursor: pointer'>";
				htmlPaging += "<a data-page='1' class='datatable-pagination-list-item-link' onclick='search_product_list(0," + limit + ")'><</a></li>";
				
				var pagingNum = 0;
				
				if(result[0].count%limit == 0){
					pagingNum = result[0].count / limit;
				} else {
					pagingNum = result[0].count / limit + 1;
				}
				
				for(var i=1; i<=pagingNum; i++){
				    htmlPaging += "<li class='datatable-pagination-list-item datatable-active' style='cursor: pointer'>";
				    htmlPaging += "<a data-page="+ i +" class='datatable-pagination-list-item-link' onclick='search_product_list("+ (i-1) +"," + limit + ")'>"+ i +"</a></li>";
				}
				
				htmlPaging += "<li class='datatable-pagination-list-item' style='cursor: pointer'>";
				htmlPaging += "<a data-page='2' class='datatable-pagination-list-item-link' onclick='search_product_list("+ (pagingNum-1) +"," + limit + ")'>></a></li>";
				
				$("#ul_paging").html(htmlPaging);
			}
		});
	}
	
	