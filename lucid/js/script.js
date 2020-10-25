document.querySelectorAll('.but-dots')[0].classList.add('active');
        
function currentSlide(n) {
       
var tape = document.querySelector('.slider-tape');
var block = document.querySelectorAll('.slider-bottom');
var dots = document.querySelectorAll('.but-dots');
       
if (n==1)  {
    tape.style.left = '0';
    block[n-1].animate ([{       
        transform: 'scale(0.3,0.3)'
}], {
        duration: 1000,
        direction: "reverse"
});   

for (var i = 0; i<dots.length;i++) {
    dots[i].classList.remove('active');
}   
 
    dots[n-1].classList.add('active');
 
}  

    
if (n==2)  {
    tape.style.left = '-100%'; 
    block[n-1].animate([{
        transform: 'scale(0.3,0.3)'
}], {
        duration: 1000,
        direction: "reverse"
}); 
    
for (var i = 0; i<dots.length;i++) {
    dots[i].classList.remove('active');
}
    
    dots[n-1].classList.add('active');

}
     
 if (n==3)  {
tape.style.left = '-200%';  
block[n-1].animate([{
        transform: 'scale(0.3,0.3)'
  }], {
        duration: 1000,
        direction: "reverse"
});
     
for (var i = 0; i<dots.length;i++) {
    dots[i].classList.remove('active');
}

     dots[n-1].classList.add('active');
     
} 
}





window.onscroll = function() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 80 ) {
        document.querySelector('.header').classList.add('header-fixed');
        document.querySelector('.top').style.paddingTop = '14px';
    } else {          
        document.querySelector('.header').classList.remove('header-fixed');
        document.querySelector('.top').style.paddingTop = '40px';
    }

    
    if (window.pageYOffset > 300) {
      
        var a =  document.querySelectorAll('.features-block');
        
        a[0].style.transform = 'scale(1,1)';
        a[1].style.transform = 'scale(1,1)';
        a[2].style.transform = 'scale(1,1)';
        a[3].style.transform = 'scale(1,1)';
    
    }
    
    if (window.pageYOffset > 900) {
       
        document.querySelector('.details-top').classList.add('details-top-scr');
    }
    
    if (window.pageYOffset > 1500) {
       
        document.querySelector('.custom-left').style.left = '5%';
        document.querySelector('.custom-right').style.right = '0';
    }
    
    if (window.pageYOffset > 2100) {
       
        document.querySelector('.slider-bottom-1').style.transform = 'scale(1,1)';
    }
    
    if (window.pageYOffset > 2900) {
      
        var b =  document.querySelectorAll('.pricings-bl');
        
        b[0].style.transform = 'scale(1,1)';
        b[1].style.transform = 'scale(1,1)';
        b[2].style.transform = 'scale(1,1)';
        b[3].style.transform = 'scale(1,1)';
    
    }
    
}


window.onload = function() {
   
     document.querySelector('.main_left').style.left = '0';
     document.querySelector('.main_right').style.right = '0';  
}


document.querySelector('.menu-mobile').onclick = function() {
    document.querySelector('.top-mobile').classList.toggle('top-mobile-active');
}




const anchors = document.querySelectorAll('.header a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
