/* Гамбургер */
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');
    menuList = document.querySelector('.menu_list');
    items = menuList.querySelectorAll('.menu_link');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.classList.remove('_lock');
});

for (let i=0; i< items.length; i++){
    items[i].addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.classList.remove('_lock');
    });
}


/* Табы */


$(document).ready(function(){
    $('ul.price_tabs').on('click', 'li:not(.price_tab_active)', function() {
        $(this)
          .addClass('price_tab_active')
          .siblings()
          .removeClass('price_tab_active')
          .closest('div.container')
          .find('div.price_content')
          .removeClass('price_content_active')
          .eq($(this).index())
          .addClass('price_content_active');
    });
});