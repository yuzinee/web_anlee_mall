	var sbxLimitVal = parseInt($("#sbx_limit").val()); // 페이징 수
	
	$(document).ready(function(){
		search_delivery_list(0, sbxLimitVal);
	});
	
	function search_delivery_list(offset, limit){
		// 리스트 조회
		params = {
			"queryId" : "manageProductDeliveryDAO.selectDelivery"	// 쿼리ID
		  , "userId"  : userId										// 사용자ID
		  , "limit"   : limit										// 페이징 변수
		  , "offset"  : offset										// 페이징 변수
		  , "status"  : $("#sbx_status").val()						// 배송상태
		}
		
		com_selectList(params, function(result){
			var htmlList = "";
			var htmlPaging = "";
			
			// 리스트 추가
			for(var i=0; i<result.length; i++){
				htmlList += "<tr data-index='0' onclick='tr_delivery_onclick("+ result[i].DRVR_NUM +")' style='cursor: pointer'>";
				htmlList += "<td>"+ result[i].DRVR_NUM +"</td>";
				htmlList += "<td>"+ result[i].PRDCT_NM +"</td>";
				htmlList += "<td>"+ result[i].ORDER_ADR +"</td>";
				htmlList += "<td>"+ result[i].USER_PN +"</td>";
				
				if(result[i].DRVR_STUS == "0"){
				    htmlList += "<td>"+result[i].EST_DT+" (배송준비중)</td>";
				} else if (result[i].DRVR_STUS == "1"){
				    htmlList += "<td>"+result[i].EST_DT+" (배송중)</td>";
				} else if (result[i].DRVR_STUS == "3"){
				    htmlList += "<td>"+result[i].EST_DT+" (배송완료-구매확정전)</td>";
				}
				
				htmlList += "</tr>";
			}
			
			$("#delivery_list").html(htmlList);
			
			// 페이징
			if($("#sbx_limit").val() <= result[0].count){
				com_paging(result, limit);
			}
		});
	}
	
	/* tr 클릭 */
	function tr_delivery_onclick(drvrNum){
		// 배송 조회
		location.href = "https://trace.cjlogistics.com/web/detail.jsp?slipno=" + drvrNum;
	}