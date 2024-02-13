var itemSn = com_getParameter('itemSn');

function createCategory(first, second) {
  var categoryHtml = `
    <a href="?ite">${first}</a><span>&nbsp;&gt;&nbsp;${second}</span>
    `;
  return categoryHtml;
}

function selectCategory(itemSn){
  if (itemSn == null){
    return;
  };
  var paramitem = {
      "queryId"	: "userDAO.selectNew"
    , "itemSn" : itemSn
  }
  com_selectOne(paramitem, function(resultItem) {
	var item = resultItem;
	
	var paramCategory = {
      "queryId"	: "userDAO.selectNew"
    }
	
    categoryDetail.innerHTML += createCategory(item.PRODCT_NM, item.PRODCT_NM);
  });
}