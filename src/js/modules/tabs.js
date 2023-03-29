function tabs(menuTabsInformation,menuTabs){
    //tabs
    let tabsParent=document.querySelector('.tabheader__items');
    let tabsHeader = document.querySelector('.tabheader');
    menuTabsInformation.forEach((item,i,menuChildren)=>{
        tabsHeader.insertAdjacentHTML('beforebegin',menuChildren[i])
    })
    menuTabs.forEach((item,i,menuTabs)=>{
        tabsParent.insertAdjacentHTML('beforeend',menuTabs[i])
    })


    let tabs=document.querySelectorAll('.tabheader__item '),
        tabsContent=document.querySelectorAll('.tabcontent');
    


    function hideTabContent() {
        tabsContent.forEach((item)=>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        })
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(num=0){
        tabsContent[num].classList.add('show','fade');
        tabsContent[num].classList.remove('hide');
        tabs[num].classList.add('tabheader__item_active')
        
    }
    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click',(event)=>{
        const target=event.target;
        if(target && target.classList.contains('tabheader__item')){
           tabs.forEach((item,i)=>{
            if(target==item){
                hideTabContent();
                showTabContent(i);
            }
           })
        }
    })
}
module.exports = tabs;