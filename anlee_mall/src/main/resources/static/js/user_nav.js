document.addEventListener('DOMContentLoaded', function() {
  var menuContainer = document.querySelector('.menu-container');
  var submenu = document.querySelector('.submenu');
  var subitems = document.querySelectorAll('.subitem'); // 모든 subitem 요소를 선택

  menuContainer.addEventListener('mouseenter', function() {
    submenu.style.display = 'block';
  });

  menuContainer.addEventListener('mouseleave', function(event) {
    if (!submenu.contains(event.relatedTarget)) {
      submenu.style.display = 'none';
      subitems.forEach(function(item) {
        item.style.display = 'none'; // submenu가 닫힐 때 모든 subitem 초기화
      });
    }
  });

  document.querySelectorAll('.sub-item').forEach(function(item) {
    item.addEventListener('mouseenter', function(event) {
      var targetSubitem = item.nextElementSibling; // 다음 요소(subitem) 선택
      if (targetSubitem) {
        subitems.forEach(function(subitem) {
          subitem.style.display = 'none'; // 모든 subitem 초기화
        });
        targetSubitem.style.display = 'block'; // 선택된 subitem 표시
      }
    });
  });

  submenu.addEventListener('mouseleave', function(event) {
    if (!menuContainer.contains(event.relatedTarget)) {
      submenu.style.display = 'none';
      subitems.forEach(function(item) {
        item.style.display = 'none'; // submenu가 닫힐 때 모든 subitem 초기화
      });
    }
  });
});
