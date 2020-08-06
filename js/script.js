const listItems = [
   document.getElementById('item-1'), 
   document.getElementById('item-2'), 
   document.getElementById('item-3'), 
   document.getElementById('item-4'), 
   document.getElementById('item-5'), 
   document.getElementById('item-6'), 
   document.getElementById('item-7'), 
];


listItems[0].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[0].className += ' active'; });
listItems[1].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[1].className += ' active'; });
listItems[2].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[2].className += ' active'; });
listItems[3].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[3].className += ' active'; });
listItems[4].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[4].className += ' active'; });
listItems[5].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[5].className += ' active'; });
listItems[6].addEventListener('click', () => { 
   for(let activeItem of listItems){ activeItem.className = 'header__item'; }
   listItems[6].className += ' active'; }); 

const burgerIcon = document.querySelector('.header__icon');
const burgerMenu = document.querySelector('.header__list');
burgerIcon.addEventListener('click', () => { 
   if (burgerIcon.className === 'header__icon active') { burgerIcon.className = 'header__icon'; burgerMenu.className = 'header__list'; }
   else { burgerIcon.className = 'header__icon active'; burgerMenu.className = 'header__list active'}
})