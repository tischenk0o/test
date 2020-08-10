const menuActiveBurger = document.getElementsByClassName('header-menu__burger');
const menuActiveList = document.getElementsByClassName('header-menu__list');

menuActiveBurger[0].addEventListener('click', () => {
   if(menuActiveBurger[0].className === 'header-menu__burger active') {
      menuActiveBurger[0].className = 'header-menu__burger';
      menuActiveList[0].className = 'header-menu__list';
   } else {
      menuActiveBurger[0].className += ' active';
      menuActiveList[0].className += ' active';
   }
});