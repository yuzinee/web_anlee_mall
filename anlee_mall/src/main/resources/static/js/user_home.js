var slideIndex = 1;
var slideInterval; // 자동 슬라이드 쇼를 멈추기 위한 변수
createSlide(); // 슬라이드 생성
showSlides(slideIndex); // 슬라이드 표시

/* 리스트 출력 user_list.js */
selectList();

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