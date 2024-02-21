// 카테고리 html 제작
function createCategory(category) {
  var categoryHtml = ``;

  for (var i = 0; i < category.length; i++) {
    var typeNm = `<a href="/user_list?typeSn=${category[i].TYPE_SN}">${category[i].TYPE_NM}</a>`;
    categoryHtml += (i > 0 ? `<span>&nbsp;&gt;&nbsp;</span>` : ``) + typeNm;
  }
  return categoryHtml;
}

// 리스트 html 제작
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

// 0,0 표시
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
