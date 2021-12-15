let start = document.querySelector('.start')
let start2 = document.querySelector('.start2')
let main = document.querySelector('.top')
let game = document.querySelector('.game')
let gamePage = document.querySelector('.game-container')
let cvs = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let count = document.querySelector('.count h3')
let timer = document.querySelector('.timer h3 span')
let countBlock = document.querySelector('.count')
let timerBlock = document.querySelector('.timer')

let count2 = document.querySelector('.res1-title span')

let res = document.querySelector('.res')
let resText = document.querySelector('.res-text')
let again = document.querySelector('.again')
let bro = document.querySelector('.bro')
let header = document.querySelector('header')
let fix = document.querySelector('.fix')
let inLeft = document.querySelector('.in-left')
let inRight = document.querySelector('.in-right')

let buts = document.querySelector('.buts')






let cat1 = new Image()
let cat2 = new Image()
let ic1 = new Image()
let ic2 = new Image()
let ic3 = new Image()
let pad = new Image()
let back = new Image()

cat1.src = './public/images/ic1.png'
cat2.src = './public/images/ic2.png'
ic1.src = './public/images/ic3.png'
ic2.src = './public/images/ic4.png'
ic3.src = './public/images/ic5.png'
pad.src = './public/images/pad.png'
back.src = './public/images/game.png'

let x = 600




/* клавиши */
document.addEventListener('keydown', function(e){
    if (e.key == 'ArrowLeft') {
        let toLeft = setInterval(function(){
            x -= 3;
            if (x <= 200) {
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
            if (x >= 1200) {
                x -= 3;
            }
        }, 1);
    document.addEventListener('keyup', function(){
        clearInterval(toRight);
      })
    }
})



/* кнопки */


if (document.documentElement.clientWidth <= 1023) {

    inLeft.addEventListener('click', function(e){
                x -= 100;
                if (x <= 200) {
                    x += 100;
                }
    })

    inRight.addEventListener('click', function(e){
                x += 100;
                if (x >= 1200) {
                    x -= 100;
                }
    })

}








let ic1Array = [];
ic1Array[0] = {
    wx : 200 + Math.floor(Math.random() * 1200),
    wy : -ic1.height
}

let ic2Array = [];
ic2Array[0] = {
    wx : 200 + Math.floor(Math.random() * 1200),
    wy : -ic2.height - 100
}


let ic3Array = [];
ic3Array[0] = {
    wx : 200 + Math.floor(Math.random() * 1200),
    wy : -ic3.height - 200
}


let cat1Array = [];
cat1Array[0] = {
    wx : 200 + Math.floor(Math.random() * 1200),
    wy : -cat1.height - 500
}

let cat2Array = [];
cat2Array[0] = {
    wx : 200 + Math.floor(Math.random() * 1200),
    wy : -cat2.height - 700
}



let c = 0
count.innerHTML = c

let t = 30
timer.innerHTML = t


function aud() {
    let audio = new Audio(); 
    audio.src = './public/audio.mp3'; 
    audio.autoplay = true; 
}

let flag = true

function play() {

    ctx.drawImage(back, 0, 0)

    ctx.drawImage(pad, x, 550)
   
  
    for (let i = 0; i < ic1Array.length; i++) {
        ctx.drawImage(ic1, ic1Array[i].wx, ic1Array[i].wy);
        ic1Array[i].wy += 3;
        if (ic1Array[i].wy >= 500 && ic1Array[i].wy <= 502) {
            ic1Array.push({
                wx : 200 + Math.floor(Math.random() * 1200),
                wy : -ic1.height
            })
        }
        if ((x <= ic1Array[i].wx + ic1.width) && (x + pad.width >= ic1Array[i].wx) && (550 <= ic1Array[i].wy + ic1.height) && (ic1Array[i].wy + ic1.height <= 650)) {
            ic1Array[i].wx = -10000
            c++ 
            aud()
        }
    }


    for (let i = 0; i < ic2Array.length; i++) {
        ctx.drawImage(ic2, ic2Array[i].wx, ic2Array[i].wy);
        ic2Array[i].wy += 3;
        if (ic2Array[i].wy >= 300 && ic2Array[i].wy <= 302) {
            ic2Array.push({
                wx : 200 + Math.floor(Math.random() * 1200),
                wy : -ic2.height - 100
            })
        }
        if ((x <= ic2Array[i].wx + ic2.width) && (x + pad.width >= ic2Array[i].wx) && (550 <= ic2Array[i].wy + ic2.height) && (ic2Array[i].wy + ic2.height <= 650)) {
            ic2Array[i].wx = -10000
            c++ 
            aud()
        }
    }


    for (let i = 0; i < ic3Array.length; i++) {
        ctx.drawImage(ic3, ic3Array[i].wx, ic3Array[i].wy);
        ic3Array[i].wy += 3;
        if (ic3Array[i].wy >= 100 && ic3Array[i].wy <= 102) {
            ic3Array.push({
                wx : 200 + Math.floor(Math.random() * 1200),
                wy : -ic3.height - 200
            })
        }
        if ((x <= ic3Array[i].wx + ic3.width) && (x + pad.width >= ic3Array[i].wx) && (550 <= ic3Array[i].wy + ic3.height) && (ic3Array[i].wy + ic3.height <= 650)) {
            ic3Array[i].wx = -10000
            c++ 
            aud()
        }
    }


    for (let i = 0; i < cat1Array.length; i++) {
        ctx.drawImage(cat1, cat1Array[i].wx, cat1Array[i].wy);
        cat1Array[i].wy += 2;
        if (cat1Array[i].wy >= 300 && cat1Array[i].wy <= 301) {
            cat1Array.push({
                wx : 200 + Math.floor(Math.random() * 1200),
                wy : -cat1.height 
            })
        }
        if ((x <= cat1Array[i].wx + cat1.width) && (x + pad.width >= cat1Array[i].wx) && (550 <= cat1Array[i].wy + cat1.height) && (cat1Array[i].wy + cat1.height <= 650)) {     
            res.classList.add('block-active')
            game.classList.remove('block-active')
            bro.classList.remove('none-active')
            header.classList.remove('header-active')
            flag = false
            resText.innerHTML = 'Как-то не очень умело ты справляешься с ловлей мусора. Надеемся, что в твоем жилье с чистотой дела обстоят получше. В любом случае можешь еще потренироваться, а потом выбрать себе надежного помощника, с которым процесс уборки станет совсем не напряжным.'
        }
    }


    for (let i = 0; i < cat2Array.length; i++) {
        ctx.drawImage(cat2, cat2Array[i].wx, cat2Array[i].wy);
        cat2Array[i].wy += 2;
        if (cat2Array[i].wy >= 500 && cat2Array[i].wy <= 501) {
            cat2Array.push({
                wx : 200 + Math.floor(Math.random() * 1200),
                wy : -cat2.height 
            })
        }
        if ((x <= cat2Array[i].wx + cat2.width) && (x + pad.width >= cat2Array[i].wx) && (550 <= cat2Array[i].wy + cat2.height) && (cat2Array[i].wy + cat2.height <= 650)) {
            res.classList.add('block-active')
            game.classList.remove('block-active')
            bro.classList.remove('none-active')
            header.classList.remove('header-active')
            flag = false
            resText.innerHTML = 'Как-то не очень умело ты справляешься с ловлей мусора. Надеемся, что в твоем жилье с чистотой дела обстоят получше. В любом случае можешь еще потренироваться, а потом выбрать себе надежного помощника, с которым процесс уборки станет совсем не напряжным.'
        }
    }

    
    count.innerHTML = c
    count2.innerHTML = c



    t -= 0.02 
    
    if (t < 0) {
        res.classList.add('block-active')
        game.classList.remove('block-active')
        bro.classList.remove('none-active')
        header.classList.remove('header-active')
        flag = false
        if (c < 10) {
            resText.innerHTML = 'Как-то не очень умело ты справляешься с ловлей мусора. Надеемся, что в твоем жилье с чистотой дела обстоят получше. В любом случае можешь еще потренироваться, а потом выбрать себе надежного помощника, с которым процесс уборки станет совсем не напряжным.'   
        } else {
            resText.innerHTML = 'Поздравляем! Ты успешно справился со своим заданием. Конечно, не без помощи умных роботов-пылесосов. Если они без проблем очистили от мусора космос, то представь, в каком идеальном состоянии благодаря разработкам ECOVACS будет твое жилье.'
        }
    } else {
        timer.innerHTML = Math.floor(t)
    }




    
   
    
  
    if (flag) {
        requestAnimationFrame(play);
    } else {
        cancelAnimationFrame(play);
    }
    
    
}









start.addEventListener('click', function(){
    if (document.documentElement.clientWidth <= 560) {
        fix.classList.add('fix-active')
        window.addEventListener("orientationchange", function() {
            fix.classList.remove('fix-active')
            main.classList.add('none-active')
            game.classList.add('block-active')
            bro.classList.add('none-active')
            header.classList.add('header-active')
        }, false);
    } else {
        main.classList.add('none-active')
        game.classList.add('block-active')
        bro.classList.add('none-active')
        header.classList.add('header-active')
    }
    scrollTo({
        top: 0,
        behavior: "auto"
    })
})


start2.addEventListener('click', function(){
    timerBlock.classList.add('opac-active')
    countBlock.classList.add('opac-active')
    gamePage.classList.add('none-active')
    buts.classList.add('flex-active')
    play()
})


again.addEventListener('click', function(){
    location.reload();
})




