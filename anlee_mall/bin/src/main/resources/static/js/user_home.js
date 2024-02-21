var slideIndex = 1;
var slideInterval; // 자동 슬라이드 쇼를 멈추기 위한 변수
createSlide(); // 슬라이드 생성
showSlides(slideIndex); // 슬라이드 표시
createHomeList(); // 리스트 제작

function createImage(imgSrc, text, page, totalpage) {
  var slideHtml = `
    <div class="mySlides fade">
      <div class="numbertext">${page} / ${totalpage}</div>
      <img src="${imgSrc}">
      <div class="text">${text}</div>
    </div>
  `;
  return slideHtml;
}

function createDot(page){
  var slideHtml = `
    <span class="dot" onclick="currentSlide(${page})"></span>
  `;
  return slideHtml;
}

function createSlide() {
  // 슬라이드 데이터
  var slidesData = [
    { imgSrc: "/image/f1.png", text: "사진 1번" },
    { imgSrc: "/image/f2.png", text: "사진 2번" },
    { imgSrc: "/image/i2.png", text: "힝힝힝" },
    { imgSrc: "/image/f3.png", text: "사딘 3번" }
  ];
  for (var i = 0; i < slidesData.length; i++) {
    slideContainer.innerHTML += createImage(slidesData[i].imgSrc, slidesData[i].text, i+1, slidesData.length);
    dotsContainer.innerHTML += createDot(i+1);
  };
}

// 클릭된 도트에 해당하는 슬라이드 표시 및 자동 슬라이드 쇼 시작
function currentSlide(n) {
  pauseSlides(); // 클릭 시 자동 슬라이드 쇼 멈춤
  showSlides(slideIndex = n);
}

// 슬라이드 표시 함수
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

  // 자동 슬라이드 쇼 재시작
  slideInterval = setTimeout(function() {
    showSlides(slideIndex += 1);
  }, 2000); // 2초 후에 다음 슬라이드로 이동
}

// 자동 슬라이드 쇼 멈춤
function pauseSlides() {
  clearTimeout(slideInterval);
}

// 0,0 표시
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 홈화면 리스트 카드 만들기
function createCard(sn, title, prcs, amnt, per, path, nm, extns) {
  var discountedPriceHtml = '';
  if (amnt === '0' && per === '0') {
    discountedPriceHtml = `<p class="card-text">${numberWithCommas(prcs)}원</p>`;
  } else {
    const discountedPrice = prcs - amnt - (prcs * (0.01 * per));
    discountedPriceHtml = `<p class="card-delete"><s>${numberWithCommas(prcs)}원</s></p><p class="card-result">${numberWithCommas(discountedPrice)}원</p>`;
  }
  var cardHtml = `
    <a class="card-container" href="/user_item?itemSn=${sn}">
      <img src="${path + nm + extns}" class="card-image">
      <div class="card-infor">
        <p class="card-title">${title}</p>
        ${discountedPriceHtml}
      </div>
    </a>
    `;
  return cardHtml;
}

// 홈화면 리스트 만들기
function createHomeList(){
  var paramNew = {
      "queryId"	: "userDAO.selectList"
    , "typeSn" : ""
    , "limitNo" : "4"
  }
  com_selectList(paramNew, function(resultNew) {
	  var itemNew = resultNew;
	  for (var i = 0; i < itemNew.length; i++) {
      homeNew.innerHTML += createCard(
		  itemNew[i].PRDCT_SN
		, itemNew[i].PRDCT_NM
		, itemNew[i].PRDCT_PRCS
		, itemNew[i].DISC_AMNT
		, itemNew[i].DISC_PER
		, itemNew[i].IMG_PATH
		, itemNew[i].SAVE_NM
		, itemNew[i].IMG_EXTNS
	  );
    };
  });
  var paramTv = {
      "queryId"	: "userDAO.selectList"
    , "typeSn" : "1_1"
    , "limitNo" : "4"
  }
  com_selectList(paramTv, function(resultTv) {
	  var itemTv = resultTv;
	  for (var i = 0; i < itemTv.length; i++) {
      homeTv.innerHTML += createCard(
		  itemTv[i].PRDCT_SN
		, itemTv[i].PRDCT_NM
		, itemTv[i].PRDCT_PRCS
		, itemTv[i].DISC_AMNT
		, itemTv[i].DISC_PER
		, itemTv[i].IMG_PATH
		, itemTv[i].SAVE_NM
		, itemTv[i].IMG_EXTNS
	  );
    };
  });
  var paramRef = {
      "queryId"	: "userDAO.selectList"
    , "typeSn" : "3_1"
    , "limitNo" : "4"
  }
  com_selectList(paramRef, function(resultRef) {
	  var itemRef = resultRef;
	  for (var i = 0; i < itemRef.length; i++) {
      homeRef.innerHTML += createCard(
		  itemRef[i].PRDCT_SN
		, itemRef[i].PRDCT_NM
		, itemRef[i].PRDCT_PRCS
		, itemRef[i].DISC_AMNT
		, itemRef[i].DISC_PER
		, itemRef[i].IMG_PATH
		, itemRef[i].SAVE_NM
		, itemRef[i].IMG_EXTNS
	  );
    };
  });
}