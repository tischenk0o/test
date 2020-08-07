const menuIcon = document.getElementsByClassName('header-menu__icon icon-menu');
const menuList = document.getElementsByClassName('header-menu__list');

menuIcon[0].addEventListener('click', () => {
   if(menuIcon[0].className === 'header-menu__icon icon-menu active') menuIcon[0].className = 'header-menu__icon icon-menu';
   else menuIcon[0].className += ' active';
});

menuIcon[0].addEventListener('click', () => {
   if(menuList[0].className === 'header-menu__list active') menuList[0].className = 'header-menu__list';
   else menuList[0].className += ' active';
});