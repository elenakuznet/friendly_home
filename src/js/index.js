const burgerBtn = $('.header__button');
const menuOverlay =$('.menu__overlay');
const menu = $('.menu');
const menuLink = $('.menu__link');

const borisBtn = $('.boris__button');
const saraBtn = $('.sara__button');
const luiBtn = $('.lui__button');
const piterBtn = $('.piter__button');
const kennyBtn = $('.kenny__button');

const boris = $('.boris');
const sara = $('.sara');
const lui = $('.lui');
const piter =$('.piter');
const kenny = $('.kenny');



$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').hide().siblings().removeClass('active').show()
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
        .closest('div.tabs').find('div.tabs__image').removeClass('active').eq($(this).index()).addClass('active')
});



const modal = $('.modal');
const modalMain = $('.modal__main');
const openBtn = $('.modal__open');
const closeBtn = $('.modal__close');


// modal open

openBtn.click(function() {
    modal.fadeIn(100, function() {
        modalMain.show(200);
    });
});


// modal close

function closeModal() {
    modalMain.hide(200, function() {
        modal.fadeOut(100);
    })
};

//click on button 

closeBtn.click(closeModal);

// click on overlay

$('.modal').click(function(event){
    if(event.target === this) {
        closeModal();
    }
});


function closeBurger() {
    menu.hide(200, function() {
        menuOverlay.hide(100, function() {
            // removeInnert(menu.get(0));
        });
        
    });
}


burgerBtn.click(function() {
    menuOverlay.show(100, function() {
        menu.show(200, function() {
            // addInnert(menu.get(0));
        });
    })
})



menuOverlay.click(function(event){
    if(event.target === this) {
        closeBurger();
    }
});

menuLink.click(function() {
    closeBurger();
})


// Слайдер 


new Swiper('.swiper', {
    slidesPerView: 1,
        // spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    
        navigation: {
            nextEl: '.button-right',
            prevEl: '.button-left',
        },
    
        // mousewheel: true,
        // keyboard: true,
    
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //             slidesPerView: 2,
    //             spaceBetween: 20
    //         },
    //         // when window width is >= 480px
    //         480: {
    //             slidesPerView: 3,
    //             spaceBetween: 30
    //         },
    //         // when window width is >= 640px
    //         640: {
    //             slidesPerView: 4,
    //             spaceBetween: 40
    //         }
    // }
    });


new Swiper('.swiper1', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        spaceBetween: 10,
        loop: true,
        // centeredSlides: true,
        mousewheel: true,
        keyboard: true,
    });

new Swiper('.swiper2', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        spaceBetween: 10,
        loop: true,
        // centeredSlides: true,
        mousewheel: true,
        keyboard: true,
    });

// Карта

ymaps.ready(init);
        function init(){
            const myMap = new ymaps.Map("map", {
                center: [55.848968, 37.376054],
                zoom: 17
            });

            const mark = new ymaps.Placemark([55.848968, 37.376054], {
                hintContent: 'Friendly House - приют для животных',
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/footer/Vector.svg',
                iconImageSize: [39, 59],
                iconImageOffset: [-20, -59]
            });
            myMap.geoObjects.add(mark);

            myMap.behaviors.disable('drag');

            myMap.controls.remove('geolocationControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('trafficControl');
            myMap.controls.remove('typeSelector');
            // myMap.controls.remove('fullscreenControl');
            // myMap.controls.remove('zoomControl');
        }
        
        
        
        
// //!--innert 
// let prevActiveElement;

// function addInnert(elem) {
//     prevActiveElement = document.activeElement;
//     for (let i = 0; i < document.body.children.length; i++) {
//         if (document.body.children[i] !== elem) {
//             document.body.children[i].inert = true;
//         }
//     };
//     elem.inert = false;
//     if (elem.closest('[inert]')) elem.closest('[inert]').inert = false;

//     for (let i = 0; i < window.elemsInert.length; i++) {
//         if (elem === window.elemsInert[i].elem && window.elemsInert[i].esc) {
//             function esc(e) {
//                 if (e.key == 'Escape') {
//                     window.elemsInert[i].esc()
//                 }
//                 document.removeEventListener('keydown', esc);
//             }
//             document.addEventListener('keydown', esc);
//         }

//     }
// }

// function activationInnert(elemsInert) {
//     window.elemsInert = elemsInert;

//     function removeInnert(elem) {
//         if (elem) {
//             for (let i = 0; i < document.body.children.length; i++) {
//                 if (document.body.children[i] !== elem) {
//                     document.body.children[i].inert = false;
//                 }
//             };
//             elem.innert = true;
//             prevActiveElement.focus();
//         }

//         for (let i = 0; i < elemsInert.length; i++) {
//             if (window.screen.width <= elemsInert[i].breakpoints || !elemsInert[i].breakpoints) {
//                 elemsInert[i].elem.inert = true
//                 console.log(elemsInert[i]);
//             }
//         }
//     }
//     removeInnert();

//     return removeInnert
// }

// //!--end-innert

// const removeInnert = activationInnert([
//     {
//         elem: menu.get(0),
//         esc: closeBurger
//     }
// ]);
