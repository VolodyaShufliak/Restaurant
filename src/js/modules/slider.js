function slider(slidePhotos){
    //slider
    const slidesParent = document.querySelector('.offer__slider-wrapper');
    slidePhotos.forEach(item=>{
        slidesParent.insertAdjacentHTML('beforeend',item)
    })
    const slides=document.querySelectorAll('.offer__slide');
    const prevArrow=document.querySelector('.offer__slider-prev');
    const nextArrow=document.querySelector('.offer__slider-next');
    const currentSlide=document.querySelector('#current');
    const totalSlides=document.querySelector('#total');

    let numCurrentSlide=1;

    currentSlide.textContent=addZeroAtStartNumber(numCurrentSlide);
    totalSlides.textContent=addZeroAtStartNumber(slides.length);

    function addZeroAtStartNumber(num){
        if(num<10){num=`0${num}`}
        return num;
    }

    showSlides(numCurrentSlide);
    function showSlides(num){
        if (num>slides.length){numCurrentSlide=1;}
        if (num<1){numCurrentSlide=slides.length;}
        slides.forEach((slide)=>{
            slide.classList.remove('show','fade');
            slide.classList.add('hide');
        })
        slides[numCurrentSlide-1].classList.add('show','fade');
        currentSlide.textContent=addZeroAtStartNumber(numCurrentSlide);
    }
    function plusSlides(i){
        numCurrentSlide+=i;
        showSlides(numCurrentSlide)
    }
    prevArrow.addEventListener('click',()=>{
        plusSlides(-1);
    })
    nextArrow.addEventListener('click',()=>{
        plusSlides(1);
    })
}
module.exports = slider;