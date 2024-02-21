$(document).ready(function(){
  var itemSn = com_getParameter('itemSn');
  selectDetail(itemSn);
});

function selectDetail(itemSn){
  if (itemSn == null){
    return;
  };
  var paramitem = {
      "queryId"	: "userDAO.selectDetail"
    , "itemSn" : itemSn
  }
  com_selectOne(paramitem, function(resultItem) {
	var item = resultItem;
	
	var arrType = item.TYPE_SN.split("_");
    var sqlQuery = "";

    for (var i = 0; i < arrType.length; i++) {
      var lvl = arrType.slice(0, i + 1).join("_");
      sqlQuery += (i > 0 ? " OR TYPE_SN = " : "") + "'" + lvl + "'";
    }

	var paramCategory = {
        "queryId" : "userDAO.selectCategory"
      , "sqlQuery" : sqlQuery
    }

	com_selectList(paramCategory, function(resultCategory){
	  var category = resultCategory;
      categoryDetail.innerHTML += createCategory(category);		
	});
	  itemMain.innerHTML = createDetail(
		  item.PRDCT_SN
		, item.PRDCT_NM
		, item.PRDCT_PRCS
		, item.DISC_AMNT
		, item.DISC_PER
		, item.IMG_PATH
		, item.SAVE_NM
		, item.IMG_EXTNS
	);
  });
}

// 제품 html 제작
function createDetail(sn, title, prcs, amnt, per, path, nm, extns) {
  var discountedPriceHtml = '';
  if (amnt === '0' && per === '0') {
    discountedPriceHtml = `<p class="card-text">${numberWithCommas(prcs)}원</p>`;
  } else {
    const discountedPrice = prcs - amnt - (prcs * (0.01 * per));
    discountedPriceHtml = `<p class="card-delete"><s>${numberWithCommas(prcs)}원</s></p><p class="card-result">${numberWithCommas(discountedPrice)}원</p>`;
  }
  var cardHtml = `
      <p>${title}</p>
      <img src="${path + nm + extns}" class="card-image">
      <p>${prcs}</p>
      ${discountedPriceHtml}
    `;
  return cardHtml;
}