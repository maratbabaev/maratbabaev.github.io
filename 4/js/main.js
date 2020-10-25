let menu = document.querySelector('.menu_burger');

function menuActive() {
    let burger = document.querySelector('.burger');
    let list = document.querySelector('.menu_mobile');
    burger.classList.toggle('burger_toggle');
    list.classList.toggle('menu_mobile_toggle');
}

menu.addEventListener('click', menuActive);
