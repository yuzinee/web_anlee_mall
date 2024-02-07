sampleTest();

function createCard(sn, title, text, imageurl) {
  var cardHtml = `
    <a class="card-container" href="?itemSn=${sn}">
      <img src="${imageurl}" class="card-image">
      <div class="card-infor">
        <p class="card-title">${title}</p>
        <p class="card-text">${text}</p>
      </div>
    </a>
    `;
  return cardHtml;
}

function sampleTest(){
  var testitem = [
    { imgSrc: "/image/i1.png", text: "1원" },
    { imgSrc: "/image/i2.png", text: "2원" },
    { imgSrc: "/image/i3.png", text: "3원" },
    { imgSrc: "/image/i2.png", text: "4원" },
    { imgSrc: "/image/i1.png", text: "5원" },
    { imgSrc: "/image/i1.png", text: "6원" },
    { imgSrc: "/image/i2.png", text: "7원" },
    { imgSrc: "/image/i3.png", text: "8원" },
    { imgSrc: "/image/i2.png", text: "9원" },
    { imgSrc: "/image/i2.png", text: "10원" },
    { imgSrc: "/image/i2.png", text: "11원" },
    { imgSrc: "/image/i3.png", text: "12원" },
    { imgSrc: "/image/i3.png", text: "13원" },
    { imgSrc: "/image/i2.png", text: "14원" },
    { imgSrc: "/image/i1.png", text: "15원" },
    { imgSrc: "/image/i1.png", text: "16원" },
    { imgSrc: "/image/i2.png", text: "17원" },
    { imgSrc: "/image/i2.png", text: "18원" },
    { imgSrc: "/image/i1.png", text: "19원" },
    { imgSrc: "/image/i2.png", text: "20원" },
    { imgSrc: "/image/i3.png", text: "21원" },
    { imgSrc: "/image/f2.png", text: "22원" },
    { imgSrc: "/image/f1.png", text: "23원" },
    { imgSrc: "/image/f1.png", text: "24원" },
    { imgSrc: "/image/f1.png", text: "25원" },
    { imgSrc: "/image/f3.png", text: "26원" },
    { imgSrc: "/image/f3.png", text: "27원" },
    { imgSrc: "/image/f2.png", text: "28원" },
    { imgSrc: "/image/f2.png", text: "29원" },
    { imgSrc: "/image/f1.png", text: "30원" },
    { imgSrc: "/image/f1.png", text: "31원" },
    { imgSrc: "/image/f2.png", text: "32원" },
    { imgSrc: "/image/f1.png", text: "33원" },
    { imgSrc: "/image/f1.png", text: "34원" },
    { imgSrc: "/image/f1.png", text: "35원" },
    { imgSrc: "/image/f3.png", text: "15,000원" }
  ];
  for (var i = 0; i < testitem.length; i++) {
    cardList.innerHTML += createCard(i+1, "상품명", testitem[i].text, testitem[i].imgSrc);
  };
}

/*
function search_test() {
  var testParam = {
    "queryId": "testMainDAO.selectTestList" // 쿼리 ID
  }
  com_selectList(testParam, function(testResult) {
    var arrTest = testResult;
    var cardContainer = document.getElementById("cardContainer");
    for (var i = 0; i < arrTest.length; i++) {
      // 카드들 추가
      cardContainer.innerHTML += createCard(arrTest[i].TEST_SN, arrTest[i].TEST_NM, "테스트 요약", "https://via.placeholder.com/300");
    }
  });
}*/