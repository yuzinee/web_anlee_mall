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
				htmlList += "<tr data-index='0' onclick='tr_product_onclick("+ result[i].PRDCT_SN +")' style='cursor: pointer'>";
				htmlList += "<td>"+ result[i].PRDCT_NM +"</td>";
				htmlList += "<td>"+ result[i].PRDCT_DTLS +"</td>";
				htmlList += "<td>"+ result[i].PRDCT_STK +"</td>";
				htmlList += "<td>"+ com_priceFormat(result[i].PRDCT_PRCS) +"</td>";
				
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
			
			if($("#sbx_limit").val() <= result[0].count){
				com_paging(result, limit);
			}
		});
	}
	
	/* tr 클릭 */
	function tr_product_onclick(prdctSn){
		window.prdctSn = prdctSn; // 상품 일련번호
		
		// 상세정보 화면으로 이동
	    var url = "/manage_product_detail";
	    $("#layoutSidenav_content").load(url);
	}