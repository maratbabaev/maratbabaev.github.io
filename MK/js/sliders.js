/* Первый слайдер */

let prev = document.querySelector('.main-str-left');
let next = document.querySelector('.main-str-right');
let slide = document.querySelectorAll('.slide-main');     
let n = 0;

next.addEventListener('click', clickNext);
prev.addEventListener('click', clickPrev);

function clickNext() {
    n++; 
    
    if (n > slide.length - 1) {
        n = 0;
        slide[n].style.opacity = 1;
    } 
    
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.opacity = 0;
    }
        slide[n].style.opacity = 1;
    }
        
function clickPrev() {
    n--;
    
    if (n < 0) {
        n = slide.length - 1;
        slide[n].style.opacity = 1;
    }
            
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.opacity = 0;
    }
         slide[n].style.opacity = 1;
         
    }
    
setInterval(clickNext, 6000);



/* Второй слайдер */

let prevBut = document.querySelector('.str-prev');
let nextBut = document.querySelector('.str-next');
let tape = document.querySelector('.slider-tape'); 
let ind = 0;

prevBut.style.pointerEvents = 'none';
prevBut.style.opacity = 0.3;
tape.style.right = ind + '%';

nextBut.addEventListener('click', function() {
    prevBut.style.pointerEvents = 'auto';
    prevBut.style.opacity = 1;
    ind += 100;
    tape.style.right = ind + '%';
    
    if (ind == 400) {
        nextBut.style.pointerEvents = 'none';
        nextBut.style.opacity = 0.3;
    }
});

prevBut.addEventListener('click', function() {
    nextBut.style.pointerEvents = 'auto';
    nextBut.style.opacity = 1;
    ind -= 100;
    tape.style.right = ind + '%';
    
    if (ind == 0) {
        prevBut.style.pointerEvents = 'none';
        prevBut.style.opacity = 0.3;
    }
});
