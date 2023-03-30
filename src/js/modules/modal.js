function modal(httpReq){
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

    //db
    let submit=modal.querySelector('form');
    bindPostData(submit);

    function bindPostData(form){
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const formData=new FormData(form);
        let jsonFormData=JSON.stringify(Object.fromEntries(formData.entries())) ;
        httpReq('http://localhost:3000/requests','POST',jsonFormData)
            .then(data=>{
                showThanksModal('Дякуєм за замовлення!!!');});
    })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        showModalWindow();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModalWindow();
        }, 4000);
        
    }
    
}
module.exports = modal;