var itemSn = com_getParameter('itemSn');

selectCategory(itemSn);

function createCategory(category) {
  var categoryHtml = `
    <a href="/user_list?category=${category[0].TYPE_SN}">${category[0].TYPE_NM}</a>
    <span>&nbsp;&gt;&nbsp;</span>
    <a href="/user_list?category=${category[0].TYPE_SN}">${category[1].TYPE_NM}</a>
    <span>&nbsp;&gt;&nbsp;</span>
    <a href="/user_list?category=${category[0].TYPE_SN}">${category[2].TYPE_NM}</a>
    `;
  return categoryHtml;
}

function selectCategory(itemSn){
  if (itemSn == null){
    return;
  };
  var paramitem = {
      "queryId"	: "userDAO.selectItem"
    , "itemSn" : itemSn
  }
  com_selectOne(paramitem, function(resultItem) {
	var item = resultItem;
	

	// 카테고리 lvl3
	var result3 = item.TYPE_SN;
    var arrType = result3.split("_");

    // 카테고리 lvl2
    var result2 = arrType[0] + "_" + arrType[1];

    // 카테고리 lvl1
    var result1 = arrType[0];

	var paramCategory = {
        "queryId" : "userDAO.selectCategory"
      , "lvl1" : result1
      , "lvl2" : result2
      , "lvl3" : result3
    }
	com_selectList(paramCategory, function(resultCategory){
	  var category = resultCategory;
      categoryDetail.innerHTML += createCategory(category);		
	});
  });
}