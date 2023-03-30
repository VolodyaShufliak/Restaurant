window.addEventListener('DOMContentLoaded',()=>{
    let menu=[];
    async function  httpReq(url,method = 'GET',body = null,headers = {'Content-Type':'application/json'}){
        let response= await fetch(url,{method,body,headers});
        const data =await response.json();
        return data;
    }
     httpReq('http://localhost:3000/menu')
        .then(res=>menu=[...res])
        .finally(()=>{
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
            modal(httpReq);
            timer();
            slider(slidePhotos);
        })
    

    
})

