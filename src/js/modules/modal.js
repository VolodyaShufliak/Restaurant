function modal(){
    //modal window
    const btnModalTrigger=document.querySelectorAll('[data-modal]');
    const modal=document.querySelector('.modal');
    const btnClose=document.querySelectorAll('[data-close]');

    function showModalWindow(){
        modal.classList.add('show','fade');
        modal.classList.remove('hide');
        document.body.style.overflow='hidden';
        modal.querySelector('form').reset();
    }
    function closeModalWindow(){
        modal.classList.add('hide');
        modal.classList.remove('show','fade');
        document.body.style.overflow='';
    }
    btnModalTrigger.forEach(btn=>{
        btn.addEventListener('click',()=>{
            showModalWindow();
        })
    })
    btnClose.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
            closeModalWindow();
            modal.querySelector('form').reset();
        })
    })

    
}
module.exports = modal;