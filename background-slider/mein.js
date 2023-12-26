const body = document.body;
const slider = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;

function bodyBg(){
    body.style.backgroundImage = slider[activeSlide].style.backgroundImage;
}

function curentSlide (){
    slider.forEach(slide =>{
        slide.classList.remove('active');
    })
    slider[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', ()=>{
    activeSlide++;
    if (activeSlide > slider.length-1){
        activeSlide = 0;
    }
    bodyBg();
    curentSlide();
});

leftBtn.addEventListener('click', ()=>{
    activeSlide--;
    if (activeSlide<0){
        activeSlide = slider.length -1;
    }
    bodyBg();
    curentSlide();
});

