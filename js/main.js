'use strict';
{
  const menuItems = document.querySelectorAll('.menu li a');
  //配列
  menuItems.forEach(item => {
    item.addEventListener('click' ,e => {
      e.preventDefault();
      //a要素はクリックすると他のページに飛ぶがそれをキャンセルする
      item.classList.add('active');
    })
  });
}
