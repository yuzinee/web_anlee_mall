	$(document).ready(function(){
		nav_control('manage_product_info'); // 기본화면 상품 리스트로
	});
	
	/* 화면 전환 */
	function nav_control(url){
		$("#layoutSidenav_content").load("/"+url);
		window.prdctSn = "";
	}