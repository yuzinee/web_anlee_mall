var typeSn = com_getParameter('typeSn');

if (typeSn == null){
  categoryDetail.innerHTML += `<p>전체보기</p>`;
  selectList(typeSn); 
}
else {
  selectCategory(typeSn);
  selectList(typeSn);
}

// 카테고리 제작
function selectCategory(typeSn){
  // _ 로 자르기
  var arrType = typeSn.split("_");
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
}

// 리스트 제작
function selectList(typeSn){
  if (typeSn == null){
	  typeSn = "";
  }
  var paramData = {
      "queryId"	: "userDAO.selectList"
    , "typeSn" : typeSn
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