	$(document).ready(function(){
		search_product_list(0, 5);
	});
	
	/* 주문내역 조회 */
	function search_product_list(offset, limit){
		var limit = limit;
		
		params = {
			"queryId" : "manageProductOrderDAO.selectOrder"	// 쿼리ID
		  , "userId"  : userId								// 사용자ID
		  , "limit": limit									// 페이징 변수
		  , "offset": offset								// 페이지 변수
		}
		
		com_selectList(params, function(result){
			// 리스트 세팅
			for(var i=0; i<result.length; i++){
				$("#order_list"+(i+1)).css("cursor", "pointer");
				$("#order_name"+(i+1)).text(result[i].PRDCT_NM);
				$("#user_name"+(i+1)).text(result[i].USER_NM);
				$("#order_count"+(i+1)).text(result[i].ORDER_CNT);
				$("#result_amount"+(i+1)).text(com_priceFormat(result[i].RESULT_AMNT));
				$("#order_manage"+(i+1)).text("주문완료");
				$("#order_sn"+(i+1)).val(result[i].ORDER_SN);
			}
			
			// 페이징
			com_paging(result, limit);
		});
	}
	
	/* tr 클릭 */
	function order_list_onclick(td){
		// 주문내역 상세조회
		var orderSn = $("#order_sn"+td).val();
		
		if(orderSn != ""){
			var params = {
				"queryId" : "manageProductOrderDAO.selectOrderDetail"	// 쿼리 ID
			  , "orderSn" : orderSn										// 주문번호
			}
			
			com_selectOne(params, function(detail){
				
				$("#order_sn").val(detail.ORDER_SN);							// 주문번호
				$("#user_id").val(detail.REG_ID);								// 주문자 ID
				$("#user_nm").val(detail.USER_NM);								// 주문자 이름
				$("#product_nm").val(detail.PRDCT_NM);							// 상품명
				$("#product_cnt").val(detail.ORDER_CNT);						// 수량
				$("#product_amnt").val(com_priceFormat(detail.RESULT_AMNT));	// 결제금액
				$("#user_adr").val(detail.ORDER_ADR);							// 배송지 주소
				$("#order_sn").val(detail.ORDER_SN);							// 배송지 주소
			})
		};
	}
	
	/* 주문취소 클릭 */
	function btn_cancel_onclick(){
		var orderSn = $("#order_sn").val();
		
		if(orderSn == ""){
			alert("주문내역을 조회해 주세요.");
			
			return false;
		}
		
		// 주문취소 상태로 변경
		var params = {
			"queryId" : "manageProductOrderDAO.updateCancel" 	// 쿼리ID
		  , "orderSn" : orderSn									// 주문번호
		  , "userId"  : userId									// 사용자ID
		}
		
		if(confirm("취소하시겠습니까?")){
			com_update(params, function(){
				alert("취소되었습니다.");
				
				$("#layoutSidenav_content").load("/manage_product_order");
			})
		}
	}
	
	/* 주문접수 클릭 */
	function btn_accept_onclick(){
		var orderSn = $("#order_sn").val();
		
		if(orderSn == ""){
			alert("주문내역을 조회해 주세요.");
			
			return false;
		}
		
		// 배송내역 테이블 등록
		var params = {
			"queryId" : "manageProductOrderDAO.insertDelivery" 	// 쿼리ID
		  , "orderSn" : orderSn									// 주문번호
		  , "userId"  : userId									// 사용자ID
		}
		
		if(confirm("접수하시겠습니까?")){
			com_update(params, function(){
				alert("접수되었습니다.");
				
				$("#layoutSidenav_content").load("/manage_product_order");
			})
		}
	}