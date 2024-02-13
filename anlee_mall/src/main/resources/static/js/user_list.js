selectList();

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

// 리스트 제작
function selectList(){
  var paramData = {
      "queryId"	: "userDAO.selectList"
    , "typeSn" : ""
    , "limitNo" : "15"
  }
  com_selectList(paramData, function(resultData) {
	  var itemData = resultData;
	  for (var i = 0; i < itemData.length; i++) {
      cardList.innerHTML += createCard(
		  itemData[i].PRDCT_SN
		, itemData[i].PRDCT_NM
		, itemData[i].PRDCT_PRCS
		, itemData[i].DISC_AMNT
		, itemData[i].DISC_PER
		, itemData[i].IMG_PATH
		, itemData[i].SAVE_NM
		, itemData[i].IMG_EXTNS
	  );
    };
  });
}