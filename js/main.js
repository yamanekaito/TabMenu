'use strict';
{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');
  //配列
  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click' ,e => {
      e.preventDefault();
      //a要素はクリックすると他のページに飛ぶがそれをキャンセルする
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      //menuItemsのactiveクラスをすべて外す
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    })
  });
}
