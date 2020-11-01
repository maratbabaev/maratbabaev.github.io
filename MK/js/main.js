$(".phone_mask").mask("+375 (99) 999-99-99");




/* Мобильное меню */

let menu = document.querySelector('.menu-burger');

function menuActive() {
    let burger = document.querySelector('.burger');
    let list = document.querySelector('.menu-mobile');
    burger.classList.toggle('burger-toggle');
    list.classList.toggle('menu-mobile-toggle');
}

menu.addEventListener('click', menuActive);
