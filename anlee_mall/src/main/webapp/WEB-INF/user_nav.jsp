<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <title>이유진홈페이지</title>
    <link rel="stylesheet" type="text/css" href="/css/user.css">
    <script src="/js/common.js"></script>
    <script src="/js/common_user.js"></script>
</head>
<body>
  <div class="nav-main">
    <div class="login-container">
      <img class="mobile-menu" src="/image/mobilemenu.svg">
      <div class="login-menu">
        <a href="">장바구니</a>
        <a href="">로그아웃</a>
        <a href="">회원가입</a>
      </div>
      <img class="mobile-search" src="/image/search.svg">
    </div>
    <div class="home-body">
      <img class="logo-home" src="/image/logo.png">
    </div>
    <div class="nav-category">          
      <div class="menu-container">
        <a href="#" class="menu-item">전체 카테고리</a>
          <div class="submenu">  
            <a class="sub-item" href="#">주방제품</a>
            <div class="subitem">
              <a href="#">상품1</a>
              <br>
              <a href="#">상품2</a>
            </div> 
            <br>
            <a class="sub-item" href="#">가전제품</a>
            <div class="subitem">
              <a href="#">상품3</a>
              <br>
              <a href="#">상품4</a>
            </div> 
          </div>
      </div>
      <a href="">공지사항</a>
      <a href="">고객센터</a>      
      <input class="nav-searchbox"></input>
    </div>
  </div>
  
<script src="/js/user_nav.js"></script>