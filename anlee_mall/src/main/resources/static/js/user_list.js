function createCategory(first, second) {
  var categoryHtml = `
    <a href="?ite">${first}</a><span>&nbsp;&gt;&nbsp;${second}</span>
    `;
  return categoryHtml;
}

function selectCategory(sn){
  if (sn == null){
    return;  
  };
  categoryDetail.innerHTML += createCategory("TV/디스플레이","모니터");
}

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

function selectList(){
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
    { imgSrc: "/image/f3.png", text: "11313212312315,000원" }
  ];
  for (var i = 0; i < testitem.length; i++) {
    cardList.innerHTML += createCard(i+1, "ㅁㄴㅇㄻㄴㅇㄹ상품명이에요상품명상품명이에요상품명상품명이에요상품명", testitem[i].text, testitem[i].imgSrc);
  };
}