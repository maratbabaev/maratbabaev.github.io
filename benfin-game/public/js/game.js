let startGame = document.querySelector('.start-game')
let gameOpac = document.querySelector('.game-opac')
let gameContainer = document.querySelector('.game-container')
let trackBlock = document.querySelector('.track')
let timerNum = document.querySelector('.timer h4')
let final = document.querySelector('.final')
let trackAlert = document.querySelector('.track-alert')
let nextGame = document.querySelector('.next-game')
let alertText = document.querySelectorAll('.track-alert p')

let cvs = document.getElementById('canvas')

let ctx = cvs.getContext('2d')

let track = new Image()
let car = new Image()

let img1 = new Image()
let img2 = new Image()
let img3 = new Image()
let img4 = new Image()
let img5 = new Image()
let img6 = new Image()



img1.src = './public/images/1.png'
img2.src = './public/images/2.png'
img3.src = './public/images/3.png'
img4.src = './public/images/4.png'
img5.src = './public/images/5.png'
img6.src = './public/images/6.png'
car.src = './public/images/car.png'
track.src = './public/images/track.png'

let trackY = -3600
let carX = 442

let left = document.querySelector('.game-left')
let right = document.querySelector('.game-right')


if (document.documentElement.clientWidth <= 1023) {
    left.addEventListener('click', function(){
        let toLeft = setInterval(function(){
            if (trackAlert.classList.contains('block-active')) {
                carX = 442
            } else {
            carX -= 3;
                if (carX <= 268) {
                    carX += 3;
                }
            }
        }, 1);
        document.addEventListener('mouseup', function(){
        clearInterval(toLeft);
      })
    })
    right.addEventListener('click', function(){
        let toRight = setInterval(function(){
            if (trackAlert.classList.contains('block-active')) {
                carX = 442
            } else {
            carX += 3;
                if (carX >= 610) {
                    carX -= 3;
                }
            }
        }, 1);
        document.addEventListener('mouseup', function(){
        clearInterval(toRight);
      })
    })
}




left.addEventListener('mousedown', function(){
    let toLeft = setInterval(function(){
        if (trackAlert.classList.contains('block-active')) {
            carX = 442
        } else {
        carX -= 3;
            if (carX <= 268) {
                carX += 3;
            }
        }
    }, 1);
    document.addEventListener('mouseup', function(){
    clearInterval(toLeft);
  })
})

right.addEventListener('mousedown', function(){
    let toRight = setInterval(function(){
        if (trackAlert.classList.contains('block-active')) {
            carX = 442
        } else {
        carX += 3;
            if (carX >= 610) {
                carX -= 3;
            }
        }
    }, 1);
    document.addEventListener('mouseup', function(){
    clearInterval(toRight);
  })
})

document.addEventListener('keydown', function(e){
    if (e.key == 'ArrowLeft') {
        let toLeft = setInterval(function(){
            if (trackAlert.classList.contains('block-active')) {
                carX = 442
            } else {
            carX -= 3;
                if (carX <= 268) {
                    carX += 3;
                }
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
            if (trackAlert.classList.contains('block-active')) {
                carX = 442
            } else {
            carX += 3;
                if (carX >= 610) {
                    carX -= 3;
                }
            }
        }, 1);
        document.addEventListener('keyup', function(){
        clearInterval(toRight);
      })
    }
})



let carY = 500
let img1Y = -200
let img2Y = -700
let img3Y = -1200
let img4Y = -1800
let img5Y = -2300
let img6Y = -2800
let img1X = Math.floor(Math.random() * (430 - 270 + 50)) + 270
let img2X = Math.floor(Math.random() * (430 - 270 + 50)) + 270
let img3X = Math.floor(Math.random() * (430 - 270 + 50)) + 270
let img4X = Math.floor(Math.random() * (430 - 270 + 50)) + 270
let img5X = Math.floor(Math.random() * (430 - 270 + 50)) + 270
let img6X = Math.floor(Math.random() * (430 - 270 + 50)) + 270



function game() {
    

    ctx.drawImage(track,0,trackY)
    ctx.drawImage(car,carX,carY)
    ctx.drawImage(img1,img1X,img1Y)
    ctx.drawImage(img2,img2X,img2Y)
    ctx.drawImage(img3,img3X,img3Y)
    ctx.drawImage(img4,img4X,img4Y)
    ctx.drawImage(img5,img5X,img5Y)
    ctx.drawImage(img6,img6X,img6Y)

    /*trackY =- 3600
            img1Y = -200
            img2Y = -700
            img3Y = -1200
            img4Y = -1800
            img5Y = -2300
            img6Y = -2800*/
/*
    if (carX <= img1X+img1.width && carX+car.width >= img1X && carY <= img1Y+img1.height && carY+car.height >= img1Y ||
        carX <= img2X+img2.width && carX+car.width >= img2X && carY <= img2Y+img2.height && carY+car.height >= img2Y || 
        carX <= img3X+img3.width && carX+car.width >= img3X && carY <= img3Y+img3.height && carY+car.height >= img3Y ||
        carX <= img4X+img4.width && carX+car.width >= img4X && carY <= img4Y+img4.height && carY+car.height >= img4Y ||
        carX <= img5X+img5.width && carX+car.width >= img5X && carY <= img5Y+img5.height && carY+car.height >= img5Y ||
        carX <= img6X+img6.width && carX+car.width >= img6X && carY <= img6Y+img6.height && carY+car.height >= img6Y
        ) {
            
            trackAlert.classList.add('block-active')
            carX = 442
            nextGame.addEventListener('click', function(){
                img1X = -10000 + 'px'
                trackAlert.classList.remove('block-active')
                
            })
           
        }
    else {
        trackY += 5
        img1Y += 5
        img2Y += 5
        img3Y += 5
        img4Y += 5
        img5Y += 5
        img6Y += 5
    }
*/
    
if (carX <= img1X+img1.width && carX+car.width >= img1X && carY <= img1Y+img1.height && carY+car.height >= img1Y) {
    trackAlert.classList.add('block-active')
    for (let i = 0; i < alertText.length; i++) {
        alertText[i].classList.remove('block-active')
    }
    alertText[0].classList.add('block-active')
    carX = 442
    nextGame.addEventListener('click', function(){
        img1X = -10000 + 'px'
        trackAlert.classList.remove('block-active')
    })
} else if (carX <= img2X+img2.width && carX+car.width >= img2X && carY <= img2Y+img2.height && carY+car.height >= img2Y) {
    trackAlert.classList.add('block-active')
    for (let i = 0; i < alertText.length; i++) {
        alertText[i].classList.remove('block-active')
    }
    alertText[1].classList.add('block-active')
    carX = 442
    nextGame.addEventListener('click', function(){
        img2X = -10000 + 'px'
        trackAlert.classList.remove('block-active')
    })
} else if (carX <= img3X+img3.width && carX+car.width >= img3X && carY <= img3Y+img3.height && carY+car.height >= img3Y) {
    trackAlert.classList.add('block-active')
    for (let i = 0; i < alertText.length; i++) {
        alertText[i].classList.remove('block-active')
    }
    alertText[2].classList.add('block-active')
    carX = 442
    nextGame.addEventListener('click', function(){
        img3X = -10000 + 'px'
        trackAlert.classList.remove('block-active')
    })
} else if (carX <= img4X+img4.width && carX+car.width >= img4X && carY <= img4Y+img4.height && carY+car.height >= img4Y) {
    trackAlert.classList.add('block-active')
    for (let i = 0; i < alertText.length; i++) {
        alertText[i].classList.remove('block-active')
    }
    alertText[3].classList.add('block-active')
    carX = 442
    nextGame.addEventListener('click', function(){
        img4X = -10000 + 'px'
        trackAlert.classList.remove('block-active')
    })
} else if (carX <= img5X+img5.width && carX+car.width >= img5X && carY <= img5Y+img5.height && carY+car.height >= img5Y) {
    trackAlert.classList.add('block-active')
    for (let i = 0; i < alertText.length; i++) {
        alertText[i].classList.remove('block-active')
    }
    alertText[4].classList.add('block-active')
    carX = 442
    nextGame.addEventListener('click', function(){
        img5X = -10000 + 'px'
        trackAlert.classList.remove('block-active')
    })
} else if (carX <= img6X+img6.width && carX+car.width >= img6X && carY <= img6Y+img6.height && carY+car.height >= img6Y) {
    trackAlert.classList.add('block-active')
    for (let i = 0; i < alertText.length; i++) {
        alertText[i].classList.remove('block-active')
    }
    alertText[5].classList.add('block-active')
    carX = 442
    nextGame.addEventListener('click', function(){
        img6X = -10000 + 'px'
        trackAlert.classList.remove('block-active')
    })
} else {
    trackY += 5
    img1Y += 5
    img2Y += 5
    img3Y += 5
    img4Y += 5
    img5Y += 5
    img6Y += 5
}


    if (trackY >= 0) {
        ctx.drawImage(track,0,0)
        carY -= 5
        ctx.drawImage(car,carX,carY)
        if (carY <= 20 ) {
            carY = 20
            setTimeout(function(){
                final.classList.add('block-active')
                gameSection.classList.remove('block-flex')
            }, 1000)
        }
        
    }

    requestAnimationFrame(game)
}


/*
let t = 0
function timer() {
    t++
    setTimeout(function(){
        timer()
    },1000)
    timerNum.innerHTML = t
}
*/





startGame.addEventListener('click', function(){
    trackBlock.scrollIntoView({
        behavior: 'auto',
        block: 'start'
    });
    gameOpac.classList.add('block-none')
    gameContainer.classList.add('game-container_active')
    trackBlock.classList.add('track_active')
    game()
})

