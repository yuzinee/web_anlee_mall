<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
	<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script src="/js/common.js"></script>
	<script src="/js/common_validation.js"></script>
	<script src="/js/manage_home.js"></script>
	<title>ManageHome</title>
	<meta name="msapplication-TileColor" content="#dd3d31">
	<meta name="theme-color" content="#dd3d31">
</head>
<body class="sb-nav-fixed">
	<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
		<a class="navbar-brand ps-3" href="#">anlee</a>
	</nav>
	<div id="layoutSidenav">
		<div id="layoutSidenav_nav">
			<nav class="sb-sidenav accordion sb-sidenav-dark"
				id="sidenavAccordion">
				<div class="sb-sidenav-menu">
					<div class="nav">
						<div class="sb-sidenav-menu-heading">PRODUCT MANAGEMENT</div>
						<a class="nav-link" id="" onclick="nav_control('manage_product_info')" style="margin-left:10px; cursor: pointer">조회/수정</a>
						<a class="nav-link" id="" onclick="nav_control('manage_product_detail')" style="margin-left:10px; cursor: pointer">신규등록</a>
					</div>
					<div class="nav">
						<div class="sb-sidenav-menu-heading">ORDER MANAGEMENT</div>
						<a class="nav-link" id="" onclick="nav_control('manage_product_order')" style="margin-left:10px; cursor: pointer">주문내역</a>
						<a class="nav-link" id="" onclick="nav_control('manage_product_delivery')" style="margin-left:10px; cursor: pointer">배송내역</a>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">취소내역</a>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">반품내역</a>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">교환내역</a>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">완료내역</a>
					</div>
					<div class="nav">
						<div class="sb-sidenav-menu-heading">SELLER INFORMATION</div>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">판매자정보</a>
					</div>
					<div class="nav">
						<div class="sb-sidenav-menu-heading">INQUIRIES/REVIEW</div>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">Q & A</a>
						<a class="nav-link" id="" onclick="nav_control()" style="margin-left:10px; cursor: pointer">리뷰</a>
					</div>
				</div>
			</nav>
		</div>
		<div id="layoutSidenav_content"></div>
	</div>
</body>
<script>
	
</script>
</html>