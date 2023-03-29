window.addEventListener('DOMContentLoaded',()=>{
    const menu = [
        {
            name:'ДаблЧізбургер Меню',
            src:'img/menu_photo/doublecheesemenu.jpg',
            description:'Два біфштекси з натуральної яловичини, два шматочки сиру “Чеддер”, цибуля, гірчиця, кетчуп, булочка.'
        },
        {
            name:'БігМак Меню',
            src:'img/menu_photo/bigmacmenu.jpg',
            description:'Два біфштекси з натуральної яловичини, цибуля, маринований огірок, сир “Чеддер”, свіжий салат, заправлені спеціальним соусом, у булочці з насінням сезаму.'
        },
        {
            name:'МакНагетс Меню',
            src:'img/menu_photo/nagetsmenu.jpg',
            description:'Апетитні шматочки ніжного курячого філе, засмажені у хрумкій паніровці.'
        },
        {
            name:'БігтейстіМеню',
            src:'img/menu_photo/bigtastymenu.jpg',
            description:'Натуральна яловичина у поєднанні зі свіжими овочами та плавленим сиром “Емменталь”.'
        }
    ]
    const menuTabsInformation =[];
    const menuTabs = [];
    const slidePhotos = []

    menu.forEach(item=>{
        menuTabsInformation.push(
            '<div class="tabcontent">'+
                `<img src=${item.src} alt="vegy">`+
                '<div class="tabcontent__descr">'+item.description+
            '</div>'+
            '</div>') ;
        menuTabs.push(`<div class="tabheader__item">${item.name}</div>`);
        slidePhotos.push(`
                            <div class="offer__slide">
                                <img src=${item.src} alt="pepper">
                            </div>`
                        );
    })

   const tabs = require('./modules/tabs');
   const calculator = require('./modules/calculator');
   const modal = require('./modules/modal');
   const timer = require('./modules/timer');
   const slider = require('./modules/slider');
    
   tabs(menuTabsInformation,menuTabs);
   calculator();
   modal();
   timer();
   slider(slidePhotos);
    
})

