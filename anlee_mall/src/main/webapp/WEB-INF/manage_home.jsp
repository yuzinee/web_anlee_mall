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
		<a class="navbar-brand ps-3" href="#">Start Bootstrap</a>
		<form
			class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
			<div class="input-group">
				<input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch">
				<button class="btn btn-primary" id="btnNavbarSearch" type="button"></button>
			</div>
		</form>
	</nav>
	<div id="layoutSidenav">
		<div id="layoutSidenav_nav">
			<nav class="sb-sidenav accordion sb-sidenav-dark"
				id="sidenavAccordion">
				<div class="sb-sidenav-menu">
					<div class="nav">
						<div class="sb-sidenav-menu-heading">Core</div>
						<a class="nav-link" id="test" onclick="test()">Dashboard</a>
					</div>
				</div>
			</nav>
		</div>
		<div id="layoutSidenav_content"></div>
	</div>
</body>
<script>
	function test(){
		$("#layoutSidenav_content").load("/login");
	}
</script>
</html>