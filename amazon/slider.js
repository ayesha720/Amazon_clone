
const r=document.querySelector('.right');
const l =document.querySelector('.left');
const slider=document.querySelector('.slider');

const images = document.querySelectorAll('images');
let number=1;

l.addEventListener('click',()=>{
    if(number<images.length){
    slider.style.transform=`translateX(-${number*800}px)`;
    number++;
    }
    else{
        slider.style.transform=`translateX(0px)`;
        number=0;
    }

});
