// const { active } = require("browser-sync");

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

    /* Модальные окна */

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('[data-modal=card]').on('click', function() {
        $('.overlay, #card').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #card, #thanks').fadeOut('slow');
    });

/*     Маска телефона и даты */

    $("input[name=date]").mask("99.99.9999");
    $("input[name=phone]").mask("+7 (999) 999-99-99");

/*     Скрипт для отправки форм на сайте */

    $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #card').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
    });


});

/* Аккордеон */

rules_accordion = document.querySelector('.rules_accordion')
rules_accordion_items = rules_accordion.querySelectorAll('.rules_accordion-item')
observer = []
for (let i = 0; i< rules_accordion_items.length; i++){
    object = {"key": false}
    observer.push(object)
}
for (let i = 0; i< rules_accordion_items.length; i++){
    rules_accordion_items[i].addEventListener('click', () => {
        if ( observer[i].key === false){
            rules_accordion_items[i].classList.add('rules_accordion-item_opened')
            observer[i].key = true
        }
        else{
            rules_accordion_items[i].classList.remove('rules_accordion-item_opened')
            observer[i].key = false
        }
    })
}






// //Тут мы получаем индекс элемента, у которого есть класс 'carousel_img_active'
// function getIndex(slide_array) {
//     let index = 0
//     for ( let i = 0; i< slide_array.length; i++){
//         if ( 'carousel_img_active' in slide_array[i]){
//             index = i
//         }
//     }
//     //Вовзращаем index(число, которому сопроставлен элемент в массиве)
//     return index
// }

//Находим левую стрелку
/* const arrowPrev = document.querySelector('.carousel_arrow_prev');
//Находим правую стрелку
const arrowNext = document.querySelector('.carousel_arrow_next');
//Находим элемент который содержит несколько кнопок(нам надо получить массив)
// const carouselWrapper = document.querySelector('.carousel_wrapper');
// Находим все картинки в carouselWrapper(получаем массив, это когда ты можешь обращаться к ним по индексу)
let slide = document.querySelectorAll('.carousel_img')
// Задаем индекс для активного слайда, когда запускаешь сайт - он равен 0
let activeSlide = 0
// Добавляем действие при нажатии на правую стрелку находим активный элемент, менаяем свойсва. И добавляем видимость следующему
// до те пор пока индекс меншье 5(если прибаляешь 1), если нет, то все по новой 
arrowNext.addEventListener(('click'), () =>{
    if (activeSlide + 1 < slide.length){
        slide[activeSlide].style.opacity = '0'
        slide[activeSlide].style.display = 'none'
        slide[activeSlide + 1].style.display = 'block'
        slide[activeSlide + 1].style.opacity = '100'
        slide[activeSlide + 1].style.transition = '1s'
        activeSlide +=1
    }
    else{
        
        slide[activeSlide].style.display = 'none'
        activeSlide = 0
        slide[activeSlide].style.display = 'block'
        slide[activeSlide].style.opacity = '100'


    }
})
// Добавляем действие при нажатии на левую стрелку
arrowPrev.addEventListener(('click'), () => {
    if (activeSlide + 1 < slide.length){
        slide[activeSlide].style.opacity = '0'
        slide[activeSlide].style.display = 'none'
        slide[activeSlide + 1].style.display = 'block'
        slide[activeSlide + 1].style.opacity = '100'
        slide[activeSlide + 1].style.transition = '1s'
        activeSlide +=1
    }
    else{
        
        slide[activeSlide].style.display = 'none'
        activeSlide = 0
        slide[activeSlide].style.display = 'block'
        slide[activeSlide].style.opacity = '100'
    }
}) */