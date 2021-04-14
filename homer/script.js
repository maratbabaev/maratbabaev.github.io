
let cvs = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let bg = new Image();
let man = new Image(); 
let block = new Image(); 

bg.src = 'img/house.jpg';
man.src = 'img/man.png';
block.src = 'img/wall.png';



let x = 150;


let a = 1;

function om() {
    let audio = new Audio(); 
    audio.src = 'sound/om.mp3'; 
    audio.autoplay = true; 
}

function uhu() {
    let audio = new Audio(); 
    audio.src = 'sound/uhu.mp3'; 
    audio.autoplay = true; 
}

function donut() {
    let audio = new Audio(); 
    audio.src = 'sound/donut.mp3'; 
    audio.autoplay = true; 
}

setInterval(donut,20000);





document.addEventListener('keydown', function(e){
    if (e.key == 'ArrowLeft') {
        let toLeft = setInterval(function(){
            x -= 3;
            if (x <= -20) {
                x += 3;
            }
        }, 1);
    document.addEventListener('keyup', function(){
        clearInterval(toLeft);
      })
    }
})

document.addEventListener('keydown', function(e){
    if (e.key == 'ArrowRight') {
        let toRight = setInterval(function(){
            x += 3;
            if (x >= 545) {
                x -= 3;
            }
        }, 1);
    document.addEventListener('keyup', function(){
        clearInterval(toRight);
      })
    }
})





let f = 0;
document.querySelector('h3').innerHTML = f;


let blocks = [];
blocks[0] = {
    wx : Math.floor(Math.random() * 590),
    wy : -block.height
}


function play() {
    
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(man, x, 375);
   

    for (let i = 0; i < blocks.length; i++) {
        ctx.drawImage(block, blocks[i].wx, blocks[i].wy, 50, 50);
        blocks[i].wy += 10;
        if (blocks[i].wy == 100) {
            blocks.push({
                wx : Math.floor(Math.random() * 590),
                wy : -block.height
            })
        }
        if ((x <= blocks[i].wx + 50) && (x + man.width >= blocks[i].wx) && (375 <= blocks[i].wy + 50) && (blocks[i].wy + 50 <= cvs.height)) {
        blocks[i].wx = -100;
        om();
        f++;
        document.querySelector('h3').innerHTML = f;
        if (f%10 == 0) {
            uhu();
        }
       }
    }
   requestAnimationFrame(play);
}





document.addEventListener('keydown', function(e){
    if (e.code == 'Enter') {
        document.querySelector('.marj').style.display = 'block';
        document.querySelector('h3').style.display = 'block';
        document.querySelector('.start').style.display = 'none';
        play();
    }
});
