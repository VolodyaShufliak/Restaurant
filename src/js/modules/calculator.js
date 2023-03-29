function calculator(){
    //calc

    const gender=document.querySelector('#gender');
    const result=document.querySelector('.calculating__result span');
    let sex=gender.querySelector('.calculating__choose-item_active').textContent,
        height=+document.querySelector('#height').value,
        weight=+document.querySelector('#height').value,
        age=+document.querySelector('#height').value,
        ratio=+document.querySelector('.calculating__choose-item_active[data-ratio]').getAttribute('data-ratio');
        calcTotal();
    
    function calcTotal(){
        if (!sex || !height || !weight || !age || !ratio){
            result.textContent='____';
            return ;
        }
        if (sex==='female'){
            result.textContent=((447.6+(9.2*weight)+(3.1*height)-(4.3*age))*ratio).toFixed(3);
        }else{
            result.textContent=((88.36+(13.4*weight)+(4.8*height)-(5.7*age))*ratio).toFixed(3);
        }
    } 
    function getStaticInformation(parentSelector,classActive){
        const elements=document.querySelectorAll(`${parentSelector} div`);
        elements.forEach(elem=>{
            elem.addEventListener('click',(e)=>{
                if(e.target.getAttribute('data-ratio')){
                    ratio=+e.target.getAttribute('data-ratio');
                }else{
                    sex=e.target.getAttribute('id');
                }
                elements.forEach(elem=>{
                    elem.classList.remove(classActive)
                })
                e.target.classList.add(classActive);
                calcTotal();
            })
        })
    }
    getStaticInformation('#gender','calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big','calculating__choose-item_active');

    function getDynamicInformation(selector){
        const input=document.querySelector(selector);
        input.addEventListener('input',()=>{
            if(input.value.match(/\D/g)){
                input.style.border='solid red';
            }else{
                input.style.border='none';
            }
            switch (input.getAttribute('id')) {
                case 'height':
                    height=+input.value;
                    break;
                case 'weight':
                    weight=+input.value;
                    break;
                case 'age':
                    age=+input.value;
                    break;
                default:
                    break;
            }
            calcTotal();
        })
    }
    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}
module.exports = calculator;