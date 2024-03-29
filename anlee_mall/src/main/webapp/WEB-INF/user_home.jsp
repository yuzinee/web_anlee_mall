<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/user_nav.jsp" %>

  <div class="slideshow-container">
    <div id="slideContainer"></div>
  </div>
  <div class="slideshow-dot">
    <div id="dotsContainer"></div>
  </div>
  <div class="home-list">
    <p class="home-category">NEW<a href="/user_list">더보기</a></p>
    <div class="card-list" id="homeNew"></div>
    <p class="home-category">TV<a href="/user_list?typeSn=1_1">더보기</a></p>
    <div class="card-list" id="homeTv"></div>
    <p class="home-category">냉장고<a href="/user_list?typeSn=3_1">더보기</a></p>
    <div class="card-list" id="homeRef"></div>
  </div>

<%@ include file="/WEB-INF/user_footer.jsp" %>

<script src="/js/user_home.js"></script>